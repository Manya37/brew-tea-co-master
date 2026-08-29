import sharp from "sharp";
import { resolve } from "path";

const input = resolve("public/logo.jpeg");
const iconOutput = resolve("public/logo-icon.png");

const trimmedBuffer = await sharp(input).trim({ threshold: 12 }).png().toBuffer();
const { width, height } = await sharp(trimmedBuffer).metadata();

const cropSize = Math.round(width * 0.92);
const left = Math.round((width - cropSize) / 2);
const top = Math.round(height * 0.14);

await sharp(trimmedBuffer)
  .extract({ left, top, width: cropSize, height: cropSize })
  .resize(160, 160, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(iconOutput);

console.log(`Icon crop: ${cropSize}x${cropSize} at (${left}, ${top})`);
