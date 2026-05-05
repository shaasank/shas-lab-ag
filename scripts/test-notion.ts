import { Client } from "@notionhq/client";
import fs from "fs";

try {
  const notion = new Client({ auth: "dummy" });
  let output = "Keys on notion:\n" + Object.keys(notion).join(", ") + "\n\n";
  if ((notion as any).databases) {
    output += "Keys on notion.databases:\n" + Object.keys((notion as any).databases).join(", ") + "\n\n";
  } else {
    output += "notion.databases is undefined\n\n";
  }
  fs.writeFileSync("notion-structure.txt", output);
  console.log("Wrote to notion-structure.txt");
} catch (e: any) {
  fs.writeFileSync("notion-structure.txt", "Error: " + e.message + "\n" + e.stack);
  console.log("Wrote error to notion-structure.txt");
}
