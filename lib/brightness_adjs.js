import {getRandomNumber} from "./helpers.js"
let i, addition1, addition2, addition;

const darkify_imgdata = (imgData) => {
    let BRIGHTNESS_ADJ = 20;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] -= BRIGHTNESS_ADJ
        imgData.data[i + 1] -= BRIGHTNESS_ADJ
        imgData.data[i + 2] -= BRIGHTNESS_ADJ
    }
    return imgData;
}

const incbrightness_imgdata = (imgData) => {
    let BRIGHTNESS_ADJ = 50;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += BRIGHTNESS_ADJ
        imgData.data[i + 1] += BRIGHTNESS_ADJ
        imgData.data[i + 2] += BRIGHTNESS_ADJ
    }
    return imgData;
}

const incbrightness_two_imgdata = (imgData) => {
    let inc = 0;
    let inc2 = 0;
    let inc3 = 0;
    for (i = 0; i < imgData.data.length; i += 4) {
        i = getRandomNumber(0, imgData.data.length);
        inc = getRandomNumber(0, 255);
        inc2 = getRandomNumber(0, 255);
        inc3 = getRandomNumber(0, 255)
        if (inc > 255) {
            inc = 0;
        }

        var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = (avg + inc);
        imgData.data[i + 1] = avg + inc2;
        imgData.data[i + 2] = avg + 5;
    }
    return imgData;
}

const invert_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}



const sat_adj_imgdata = (imgData) => {
    let SAT_ADJ = 150;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] -= SAT_ADJ
        imgData.data[i + 1] -= SAT_ADJ
        imgData.data[i + 2] -= SAT_ADJ
    }
    return imgData;
}



// An experimental function that is used for the testing of image filtering.
const a = function (imgData) {
    let randomNumber = 0;

    for (i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        let addition = 0;
        if (randomNumber > 0 && randomNumber < 50) {
            addition1 = 0;
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition1 = 100;
            addition2 = 90;
        }

        else {
            addition1 = 70;
            addition2 = 10;
        }

        if (imgData.data[i] - addition > 255) {
            imgData.data[i] -= addition
        }
        else {
            imgData.data[i] += addition
        }

        if (imgData.data[i + 1] + addition > 255) {
            imgData.data[i + 1] -= addition2;
        } else {
            imgData.data[i + 2] += addition2;
        }
    }
    return imgData;
}

const pixel_blue_imgdata = (imgData) => {
    let randomNumber = 0;

    for (i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        let addition = 0;
        if (randomNumber > 0 && randomNumber < 50) {
            addition1 = 0;
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition1 = 100;
            addition2 = 90;
        }

        else {
            addition1 = 70;
            addition2 = 10;
        }

        if (imgData.data[i] - addition > 255) {
            imgData.data[i] -= addition
        }
        else {
            imgData.data[i] += addition
        }

        if (imgData.data[i + 1] + addition > 255) {
            imgData.data[i + 1] -= addition2;
        } else {
            imgData.data[i + 2] += addition2;
        }
    }
    return imgData;
}

export {sat_adj_imgdata, incbrightness_imgdata, incbrightness_two_imgdata, darkify_imgdata, invert_imgdata, a, pixel_blue_imgdata}

