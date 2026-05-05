import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

const notion = new Client({ auth: process.env.VITE_NOTION_API_KEY });

async function checkDB() {
  try {
    const DB_ID = process.env.VITE_NOTION_DB_ID;
    if (!DB_ID) throw new Error("Missing DB ID");
    
    console.log("Attempting query on DB:", DB_ID);
    const query = await notion.databases.query({ database_id: DB_ID, page_size: 1 });
    console.log("Success! Results size:", query.results.length);
    console.log(JSON.stringify(query.results[0], null, 2));
  } catch(err: any) {
    console.error("Query failed with message:");
    console.error(err.message);
    if(err.stack) console.error(err.stack);
  }
}
checkDB();
