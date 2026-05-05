import { config } from "dotenv";
config();
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.VITE_NOTION_API_KEY });
const PROJECTS_DB_ID = "32d72537fef78027805cf313dc1aa7e5";

const fallbackWorks = [
  {
    title: "Rice Blast - Image Analysis",
    description: "Designing the future of sustainable agriculture with Image based analysis and smart farming",
    image: "https://framerusercontent.com/images/WEdUzezFqC4J9tdglBttno1HIE.png?width=1376&height=768",
    tech: ["Python", "Computer Vision", "React"],
    featured: true,
  },
  {
    title: "Rice Blast Weather Analysis",
    description: "Breathing new life into an organic market",
    image: "https://framerusercontent.com/images/veuEX7EWKH8st7lAt2LmNetkvFU.png?width=1376&height=768",
    tech: ["Machine Learning", "Weather API"],
    featured: true,
  },
  {
    title: "Vibe Script",
    description: "2-Minute Scripts for Busy Creators",
    image: "https://framerusercontent.com/images/i3mDpWhFu7tEOL0xWnjl8eeXis.png?width=1070&height=736",
    tech: ["AI", "React", "Node.js"],
    featured: false,
  },
  {
    title: "JOY POST",
    description: "You cook We post",
    image: "https://framerusercontent.com/images/MJbZW81lC3ekTVgYP7V6GReLd3A.png?width=1408&height=768",
    tech: ["React Native", "Cloud"],
    featured: false,
  },
];

async function setupProjectsDB() {
  console.log("1. Updating Projects DB Schema...");
  try {
    await notion.databases.update({
      database_id: PROJECTS_DB_ID,
      properties: {
        "Description": { rich_text: {} },
        "Tech": { multi_select: {} },
        "Github": { url: {} },
        "Live": { url: {} },
        "Image": { files: {} },
        "Featured": { checkbox: {} }
      }
    });
    console.log("✅ Added required columns (Description, Tech, Github, Live, Image, Featured).");
  } catch (err: any) {
    console.error("⚠️ Failed to update DB schema:", err.message);
  }

  console.log("\n2. Seeding default projects...");
  const existing = await notion.databases.query({ database_id: PROJECTS_DB_ID });
  if (existing.results.length > 0) {
    console.log("⏩ Database already has projects. Skipping seed.");
    return;
  }

  for (const item of fallbackWorks) {
    try {
      await notion.pages.create({
        parent: { database_id: PROJECTS_DB_ID },
        properties: {
          "Name": { title: [{ text: { content: item.title } }] },
          "Description": { rich_text: [{ text: { content: item.description } }] },
          "Tech": { 
            multi_select: item.tech.map(t => ({ name: t })) 
          },
          "Featured": { checkbox: item.featured },
          "Image": { 
            files: [
              {
                name: "cover",
                type: "external",
                external: { url: item.image }
              }
            ] 
          }
        }
      });
      console.log(`✅ Created project: ${item.title}`);
    } catch (e: any) {
      console.error(`❌ Failed to create project ${item.title}:`, e.message);
    }
  }
  
  console.log("\n🎉 Projects Database setup complete!");
}

setupProjectsDB();
