import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public");
const output = path.join(root, "docs");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });

const designSystem = await readFile(
  path.join(source, "editorial-design-system-static.html"),
  "utf8",
);

await Promise.all([
  writeFile(path.join(output, "index.html"), designSystem),
  writeFile(path.join(output, "editorial-design-system.html"), designSystem),
  writeFile(path.join(output, "404.html"), designSystem),
  writeFile(path.join(output, ".nojekyll"), ""),
]);

console.log("GitHub Pages build generated in docs/.");
