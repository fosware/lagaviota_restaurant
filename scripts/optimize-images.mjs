import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);
const root = process.cwd();
const sourceDir = path.join(root, "public", "source-images");
const outputDir = path.join(root, "public", "images");

const images = [
  ["fajitas-combinadas.jpg", "fajitas-combinadas"],
  ["alambre.jpg", "alambre"],
  ["camarones-diabla.jpg", "camarones-diabla"],
  ["torta.jpg", "torta"],
  ["pupusas.jpg", "pupusas"],
  ["sopes.jpg", "sopes"],
  ["birria.jpg", "birria"],
  ["burrito-smothered.jpg", "burrito-smothered"],
  ["salsa-bar.jpg", "salsa-bar"],
];

await fs.mkdir(outputDir, { recursive: true });

for (const [inputName, outputName] of images) {
  const input = path.join(sourceDir, inputName);
  const image = sharp(input, { failOn: "none" }).rotate().resize({
    width: 1400,
    height: 1000,
    fit: "cover",
    withoutEnlargement: true,
  });

  await image.clone().webp({ quality: 78 }).toFile(path.join(outputDir, `${outputName}.webp`));
  await image.clone().avif({ quality: 52 }).toFile(path.join(outputDir, `${outputName}.avif`));
}

await run("magick", [
  path.join(root, "public", "favicon.svg"),
  "-define",
  "icon:auto-resize=16,32,48",
  path.join(root, "public", "favicon.ico"),
]);

console.log(`Optimized ${images.length} images and favicon.ico`);
