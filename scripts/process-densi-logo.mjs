import sharp from "sharp";
import { resolve } from "path";

const input = resolve("public/densi-logo.png");
const output = resolve("public/densi-logo-icon.png");

let buffer = await sharp(input).greyscale().normalize().threshold(50).negate().png().toBuffer();
buffer = await sharp(buffer).trim({ threshold: 1 }).resize({ height: 96 }).png().toBuffer();

const { data, info } = await sharp(buffer).raw().toBuffer({ resolveWithObject: true });
const W = info.width;
const H = info.height;
const C = info.channels;
const out = Buffer.alloc(W * H * 4);

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const si = (y * W + x) * C;
    const di = (y * W + x) * 4;
    if (data[si] > 128) {
      out[di + 3] = 0;
    } else {
      out[di] = 0;
      out[di + 1] = 0;
      out[di + 2] = 0;
      out[di + 3] = 255;
    }
  }
}

let minX = W;
let minY = H;
let maxX = 0;
let maxY = 0;

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    if (out[i + 3] > 0) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }
}

const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;
const cropped = Buffer.alloc(cropW * cropH * 4);

for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const si = ((minY + y) * W + (minX + x)) * 4;
    const di = (y * cropW + x) * 4;
    cropped.set(out.subarray(si, si + 4), di);
  }
}

await sharp(cropped, { raw: { width: cropW, height: cropH, channels: 4 } })
  .resize({ height: 192, kernel: sharp.kernel.nearest })
  .png()
  .toFile(output);

const meta = await sharp(output).metadata();
console.log(`Wrote ${output} (${meta.width}x${meta.height})`);
