import {getRandomNumber} from "./helpers.js"
let i;

const add_horizontal_line_imgdata = (imgData) => {
    let inc = 0;
    for (i = 0; i < imgData.data.length; i += 4) {
        inc += 1;
        if (inc > 255) {
            inc = 0;
        }
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + inc;
        imgData.data[i + 1] = avg + 70
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const add_diagonal_lines_imgdata = (imgData) => {
    let inc = 0;
    for (i = 0; i < imgData.data.length; i += 4) {
        inc += 20;
        if (inc > 255) {
            inc = 0;
        }
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + inc;
        imgData.data[i + 1] = avg + 70
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const add_green_diagonal_lines_imgdata = (imgData) => {
    let inc = 0;
    for (i = 0; i < imgData.data.length; i += 4) {
        inc += 20;
        if (inc > 255) {
            inc = 0;
        }
        var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 5;
        imgData.data[i + 1] = avg + inc;
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

export {add_diagonal_lines_imgdata, add_green_diagonal_lines_imgdata, add_horizontal_line_imgdata}