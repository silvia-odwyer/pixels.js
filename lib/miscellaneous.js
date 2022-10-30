/**
 * @param {number} threshold - influences darkness with 0 being completely black and 255 being completely white. Values inbetween produce a black and white image with varying outlines. Default value of 100.
 */
 const threshold = (imgData, threshold = 100) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        let r = imgData.data[i];
        let g = imgData.data[i+1];
        let b = imgData.data[i+2];
        let v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
        imgData.data[i] = imgData.data[i+1] = imgData.data[i+2] = v;
    }
    return imgData;
}

const threshold75 = (imgData) => threshold(imgData, 75);

const threshold125 = (imgData) => threshold(imgData, 125);

/**
 * Produces a pixelated image.
 * @param {number} sample_size - side length of block in px, default value of 10
 */
const pixelate = (imgData, sample_size = 10) => {
    const { width, height } = imgData;
    let r, g, b;

    // Sample size must be an even number to work:
    if (sample_size % 2 !== 0) sample_size += 1;

    // Loop through the rows from top to bottom:
    for (let y = 0; y < height; y += sample_size) {
        // Loop through all the columns from left to right:
        for (let x = 0; x < width; x += sample_size) {
            // Get rgb values at center of sample block: 
            let midX = x + (sample_size/2);
            let midY = y + (sample_size/2);
            let midPos = (midX + (midY*width))*4;
            if (imgData.data[midPos] !== undefined) {
                r = imgData.data[midPos];
                g = imgData.data[midPos + 1];
                b = imgData.data[midPos + 2];
            }

            let endX = x + sample_size;
            let endY = y + sample_size;

            // Fill in sample block with selected colour:
            // (note: the breaks below prevent the pixel changes from wrapping around the image)
            for (let sy = y; sy < endY; sy++) {
                if (sy > height) break;
                for (let sx = x; sx < endX; sx++) {
                    if (sx > width) break;
                    let pos = (sx + (sy*width))*4;
                    imgData.data[pos] = r;
                    imgData.data[pos + 1] = g;
                    imgData.data[pos + 2] = b;
                }
            }
        }
    };

    return imgData;
}

const pixelate16 = (imgData) => pixelate(imgData, 16);

export {threshold, threshold75, threshold125, pixelate, pixelate16}