import sharp from "sharp";
import { resolve } from "path";

const input = resolve("public/fav-icon.png");
const iconOutput = resolve("app/icon.png");
const appleOutput = resolve("app/apple-icon.png");

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width;
const H = info.height;

let minX = W;
let minY = H;
let maxX = 0;
let maxY = 0;

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a > 20 && r > 100 && g > 100 && b < 200) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }
}

const pad = Math.round((maxX - minX) * 0.04);
minX = Math.max(0, minX - pad);
minY = Math.max(0, minY - pad);
maxX = Math.min(W - 1, maxX + pad);
maxY = Math.min(H - 1, maxY + pad);

const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;
const cropSize = Math.max(cropW, cropH);
const cropLeft = Math.max(0, minX - Math.round((cropSize - cropW) / 2));
const cropTop = Math.max(0, minY - Math.round((cropSize - cropH) / 2));

const square = await sharp(input)
  .extract({
    left: cropLeft,
    top: cropTop,
    width: Math.min(cropSize, W - cropLeft),
    height: Math.min(cropSize, H - cropTop),
  })
  .resize(512, 512, { fit: "cover" })
  .png()
  .toBuffer();

await sharp(square).resize(96, 96).png().toFile(iconOutput);
await sharp(square).resize(180, 180).png().toFile(appleOutput);

console.log(`Favicon set from fav-icon.png → ${iconOutput} (96px), ${appleOutput}`);
