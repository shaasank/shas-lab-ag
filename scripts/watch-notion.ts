// watch-notion.ts
// Polls Notion every 30 seconds and updates notion-data.json.
// Vite HMR detects the JSON file change and hot-reloads the browser automatically.
//
// Run: npm run watch-notion
// Keep this running alongside `npm run dev` for live Notion updates.

import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INTERVAL_MS = 30_000; // 30 seconds

function sync() {
  try {
    const syncScript = path.resolve(__dirname, "sync-notion.ts");
    execSync(`npx tsx "${syncScript}"`, { stdio: "inherit" });
  } catch {
    console.error(`[watch] ⚠️ sync failed, will retry in ${INTERVAL_MS / 1000}s`);
  }
}

console.log(`🔄 Notion watcher started — syncing every ${INTERVAL_MS / 1000}s`);
console.log(`   Vite HMR will auto-reload the browser when content changes.\n`);

// Run immediately on start, then poll
sync();
setInterval(sync, INTERVAL_MS);
