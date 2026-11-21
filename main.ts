import { mkdirSync, writeFileSync } from "node:fs";

const text = `Past the last light, the dunes go on in silver waves. The wind smooths each ridge, erasing every footprint. Above you the sky is wide and quiet, and the stars hang lower. Nothing here hurries. The night has done this for a thousand years, and will go on long after you are gone.`;

const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`entry must be 1-280 Unicode code points, got ${length}`);
}

if (text.includes("\n") || !text.endsWith(".")) {
  throw new Error("entry must be a single paragraph ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
