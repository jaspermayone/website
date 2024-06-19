const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/output');
const copyrightText = '© Jasper Mayone';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  } else {
    fs.mkdirSync(outputDir);
  }

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Error reading images directory', err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(imagesDir, file);
        const outputPath = path.join(outputDir, file);

        sharp(filePath)
            .metadata()
            .then(metadata => {
                const svg = `
                    <svg width="${metadata.width}" height="${metadata.height}">
                        <text x="${metadata.width - 10}" y="${metadata.height - 10}" font-size="200" fill="white" text-anchor="end">${copyrightText}</text>
                    </svg>
                `;
                return sharp(filePath)
                    .composite([{
                        input: Buffer.from(svg),
                        gravity: 'southeast'
                    }])
                    .toFile(outputPath);
            })
            .then(() => {
                console.log(`Processed ${file}`);
            })
            .catch(err => {
                console.error(`Error processing ${file}`, err);
            });
    });
});
