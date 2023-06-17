import { readFile } from "node:fs/promises";

async function main() {
  let filePath ="C:\Users\Shubham\Desktop\Cdac Kh WPT  SM Data\day9\package.json";
  let fileData = await readFile(filePath, { encoding: "utf-8" });
  console.log(fileData);
}

main();