import { config } from "dotenv";
config();
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.VITE_NOTION_API_KEY });
const DB_ID = process.env.VITE_NOTION_DB_ID!;

const defaultSiteContent = [
  { key: "hero_name", value: "SHASHANK" },
  { key: "hero_subtitle", value: "AI ENG - CREATOR - PRODUCT DEV" },
  { key: "info_what_i_do", value: "I help brands find clarity and express it through strong, thoughtful design with reliable AI based Solutions." },
  { key: "info_background", value: "Originally from India, I've been designing solutions for startups and creative founders." },
  { key: "info_approach", value: "I believe good design starts with empathy. I ask questions, listen closely, and build brand solutions that feel as good as they look, honest, beautiful, and built to last." },
  { key: "info_career", value: "(2025 - NOW) AI ENGINEER" },
  { key: "contact_headline", value: "CONTACT" },
  { key: "contact_tagline_1", value: "Let's create something meaningful together." },
  { key: "contact_tagline_2", value: "I'd love to hear about your project, big or small." },
  { key: "contact_email", value: "shashank1341@gmail.com" },
  { key: "contact_phone", value: "+91 7338970698" },
  { key: "footer_headline", value: "GET IN TOUCH" },
  { key: "footer_copyright", value: "© 2025 SHAS-LAB. ALL RIGHTS RESERVED." },
  { key: "footer_email", value: "shashank1341@gmail.com" },
  { key: "footer_linkedin", value: "https://www.linkedin.com/in/shashank-p-044a7b288/" },
  { key: "footer_github", value: "https://github.com/shaasank" },
  { key: "footer_medium", value: "https://medium.com/@shas21ad303" },
  { key: "site_name", value: "SHAS-LAB©" }
];

async function setup() {
  console.log("Fetching DB info...");
  const db = await notion.databases.retrieve({ database_id: DB_ID });
  const keys = Object.keys(db.properties);
  console.log("DB Keys found: " + keys.join(", "));

  const titleKey = keys.find(k => k.toLowerCase() === "property" || k.toLowerCase() === "title" || k.toLowerCase() === "name") || "Property";
  const descKey = keys.find(k => k.toLowerCase() === "text" || k.toLowerCase() === "description") || "Text";
  const typeKey = keys.find(k => k.toLowerCase() === "type") || "Type";

  console.log("\n1. Finding existing content items...");
  const existing = await notion.databases.query({ database_id: DB_ID });
  const existingKeys = new Set();
  
  for (const page of existing.results as any[]) {
    const props = page.properties;
    const titleObj = props[titleKey];
    const currentType = props[typeKey]?.select?.name;
    const titleStr = titleObj?.title?.[0]?.plain_text || "";
    
    if (currentType === "Content") {
      existingKeys.add(titleStr);
    }
  }

  console.log("\n2. Adding content rows...");
  for (const item of defaultSiteContent) {
    if (existingKeys.has(item.key)) {
      console.log(`⏩ Skipping ${item.key} (already exists)`);
      continue;
    }
    
    try {
      await notion.pages.create({
        parent: { database_id: DB_ID },
        properties: {
          [titleKey]: { title: [{ text: { content: item.key } }] },
          [descKey]: { rich_text: [{ text: { content: item.value } }] },
          [typeKey]: { select: { name: "Content" } }
        }
      });
      console.log(`✅ Created ${item.key}`);
    } catch (e: any) {
      console.error(`❌ Failed ${item.key}: ` + e.message);
    }
  }
}

setup();
