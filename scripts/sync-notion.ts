// Must load env FIRST before any other imports that use process.env
import { config } from "dotenv";
config();

import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NOTION_KEY = process.env.VITE_NOTION_API_KEY;
const CONTENT_DB_ID = process.env.VITE_NOTION_DB_ID;
const PROJECTS_DB_ID = process.env.VITE_NOTION_PROJECTS_DB_ID;

if (!NOTION_KEY) { console.error("❌ VITE_NOTION_API_KEY missing"); process.exit(1); }
if (!CONTENT_DB_ID) { console.error("❌ VITE_NOTION_DB_ID (Content DB) missing"); process.exit(1); }
if (!PROJECTS_DB_ID) { console.error("❌ VITE_NOTION_PROJECTS_DB_ID (Projects DB) missing"); process.exit(1); }

const notion = new Client({ auth: NOTION_KEY });

// ── helpers ──────────────────────────────────────────────────────────────────

function getText(prop: any): string {
  if (!prop) return "";
  const arr = prop.title ?? prop.rich_text ?? [];
  return arr.map((b: any) => b.plain_text ?? "").join("");
}

function getImage(prop: any): string {
  if (!prop) return "";
  if (prop.url) return prop.url;
  const files = prop.files ?? [];
  return files[0]?.file?.url ?? files[0]?.external?.url ?? "";
}

// ── fetch Content ────────────────────────────────────────────────────────────

async function fetchSiteContent() {
  console.log(`📝 Querying Content DB: ${CONTENT_DB_ID}`);
  const res = await notion.databases.query({ database_id: CONTENT_DB_ID! });
  console.log(`   Found ${res.results.length} content rows.`);

  const siteContent: Record<string, string> = {};

  for (const page of res.results as any[]) {
    const p = page.properties;
    
    // We configured this earlier to use Property and Text columns for content
    const key = getText(p.Property) || getText(p.Title) || getText(p.Name);
    const value = getText(p.Text) || getText(p.Description) || getText(p.Value) || getText(p["Text 1"]);
    
    // Ensure it's marked as Content OR fallback if Type is undefined 
    const typeLabel = p.Type?.select?.name || p.Type?.select?.name;
    
    if (key && (typeLabel === "Content" || !typeLabel)) {
      siteContent[key] = value;
    }
  }

  return siteContent;
}

// ── fetch Projects ───────────────────────────────────────────────────────────

async function fetchProjects() {
  console.log(`📦 Querying Projects DB: ${PROJECTS_DB_ID}`);
  const res = await notion.databases.query({ database_id: PROJECTS_DB_ID! });
  console.log(`   Found ${res.results.length} projects.`);

  const projects: any[] = [];

  for (const page of res.results as any[]) {
    const p = page.properties;
    const title = getText(p.Name) || getText(p.Title) || getText(p.Property);
    
    if (!title || title === "Untitled") continue; // skip empty placeholder rows

    projects.push({
      id:          page.id,
      title,
      description: getText(p.Description) || getText(p.Text),
      tech:        (p.Tech?.multi_select ?? []).map((t: any) => t.name),
      github:      p.Github?.url ?? p.GitHub?.url ?? "",
      live:        p.Live?.url ?? "",
      featured:    p.Featured?.checkbox ?? false,
      image:       getImage(p.Image) ||
                   "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
    });
  }
  
  return projects;
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  try {
    const [siteContent, projects] = await Promise.all([
      fetchSiteContent(),
      fetchProjects()
    ]);

    const output = {
      projects,
      siteContent,
      lastUpdated: new Date().toISOString(),
    };

    const outPath = path.resolve(__dirname, "../src/lib/notion-data.json");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(output, null, 2));

    console.log(`✅ Synced ${projects.length} project(s) & ${Object.keys(siteContent).length} content key(s) at ${new Date().toLocaleTimeString()}`);
  } catch (err: any) {
    console.error("❌ Sync failed:", err.message ?? err);
    if (err.stack) console.error(err.stack);
    process.exit(1);
  }
}

main();
