// Run with:
// $ node --experimental-modules filesystem_demo/index.mjs

import { writeFileSync, readFileSync, appendFileSync } from "fs";
import path from "path";

const file = path.join("filesystem_demo", "example.txt");

writeFileSync(file, "I like turtles.\n");

console.log(readFileSync(file).toString());

appendFileSync(file, JSON.stringify({ message: "Super secret message" }));

console.log(readFileSync(file).toString());
