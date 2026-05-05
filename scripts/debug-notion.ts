import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

const notion = new Client({ auth: process.env.VITE_NOTION_API_KEY });
const DB_ID = process.env.VITE_NOTION_DB_ID!;

async function checkDB() {
  try {
    const db = await notion.databases.retrieve({ database_id: DB_ID });
    console.log("DB retrieved successfully. Title:", (db as any).title?.[0]?.plain_text);
    console.log("Keys in properties:", Object.keys((db as any).properties).join(", "));
  } catch (err: any) {
    console.error("API error retrieving DB:");
    console.error(err.body || err.message || err);
  }
  
  try {
    const query = await notion.databases.query({ database_id: DB_ID, page_size: 1 });
    console.log("Query Results Count:", query.results.length);
    if(query.results.length > 0) {
      console.log("First item properties:");
      console.log(Object.keys((query.results[0] as any).properties).join(", "));
    }
  } catch(err: any) {
     console.error("API error querying DB:");
     console.error(err.body || err.message || err);
  }
}

checkDB();
