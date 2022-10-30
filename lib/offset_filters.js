import {getRandomNumber} from "./helpers.js"
let i;

const extreme_offset_blue = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 35;
        imgData.data[i + 2] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const extra_offset_blue = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 15;
        imgData.data[i + 2] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const extreme_offset_green = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 35;
        imgData.data[i + 1] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const extra_offset_green = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 15;
        imgData.data[i + 1] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const extreme_offset_red = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 35;
        imgData.data[i] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const extra_offset_red = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 15;
        imgData.data[i] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const offset = (imgData) => {
    for (let i = 0; i < imgData.data.length; i += 4) {
        var offset = 5;
        imgData.data[i] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const offset_green_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 5;
        imgData.data[i + 1] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const offset_blue_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 5;
        imgData.data[i + 2] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const rgbSplit = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i - 150] = imgData.data[i + 0]; 
      imgData.data[i + 500] = imgData.data[i + 1]; 
      imgData.data[i - 300] = imgData.data[i + 2]; 
    }
    return imgData;
}

export {offset, extra_offset_blue, extra_offset_green, extra_offset_red, extreme_offset_blue, extreme_offset_green, extreme_offset_red, offset_green_imgdata, offset_blue_imgdata, rgbSplit}