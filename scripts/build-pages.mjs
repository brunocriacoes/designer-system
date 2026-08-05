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
  path.join(source, "editorial-design-system.html"),
  "utf8",
);

const embeddedDocument = designSystem.match(
  /data-srcdoc="([\s\S]*?)"><\/iframe>/,
)?.[1];

if (!embeddedDocument) {
  throw new Error("Could not find the embedded design system document.");
}

const standaloneDesignSystem = embeddedDocument
  .replaceAll("&lt;", "<")
  .replaceAll("&gt;", ">")
  .replaceAll("&quot;", '"')
  .replaceAll("&#39;", "'")
  .replaceAll("&amp;", "&")
  .replaceAll("editorial-logo.jpeg", "brand-logo.jpeg")
  .replace("img-src blob:", "img-src 'self' blob:");

await Promise.all([
  writeFile(path.join(output, "index.html"), standaloneDesignSystem),
  writeFile(path.join(output, "editorial-design-system.html"), standaloneDesignSystem),
  writeFile(path.join(output, "404.html"), standaloneDesignSystem),
  writeFile(path.join(output, ".nojekyll"), ""),
]);

console.log("GitHub Pages build generated in docs/.");
