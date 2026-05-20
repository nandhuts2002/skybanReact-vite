import { Jimp } from 'jimp';
import fs from 'fs';

function intToRGBA(color) {
  // Jimp stores colors as RGBA 32-bit integers: 0xRRGGBBAA
  // But wait, JavaScript bitwise operations operate on 32-bit signed integers, 
  // so we should use unsigned right shift for the first byte or division/modulo.
  const r = Math.floor(color / 0x1000000) % 0x100;
  const g = Math.floor(color / 0x10000) % 0x100;
  const b = Math.floor(color / 0x100) % 0x100;
  const a = color % 0x100;
  return { r, g, b, a };
}

async function removeBackground() {
  try {
    console.log('Loading image...');
    const image = await Jimp.read('src/assets/skyban-logo.png');
    
    console.log('Processing image...');
    // Sample background color from top-left corner
    const bgColor = image.getPixelColor(0, 0);
    const bgRGBA = intToRGBA(bgColor);
    console.log('Background color:', bgRGBA);
    
    // We'll iterate through all pixels. If a pixel is similar to the bgColor, we make it transparent.
    image.scan((x, y, idx) => {
      const color = image.getPixelColor(x, y);
      const { r, g, b } = intToRGBA(color);
      
      const distance = Math.sqrt(
        Math.pow(r - bgRGBA.r, 2) +
        Math.pow(g - bgRGBA.g, 2) +
        Math.pow(b - bgRGBA.b, 2)
      );
      
      // If color is very similar to background, make it transparent
      if (distance < 55) { // Tolerance (blue color is solid but can have compression artifacts)
        image.setPixelColor(0x00000000, x, y);
      }
    });

    console.log('Saving image...');
    await image.write('src/assets/skyban-logo.png');
    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeBackground();
