import {getRandomNumber} from "./helpers.js"
let i, addition, addition1, addition2;

const casino_imgdata = (imgData) => {

    let inc = 0;

    for (i = 0; i < imgData.data.length; i += 4) {
        inc = getRandomNumber(0, 255);
        if (inc > 255) {
            inc = 0;
        }

        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + inc;
        imgData.data[i + 1] = avg + 2;
        imgData.data[i + 2] = avg + 5;
    }
    return imgData;
}

const yellow_casino_imgdata = (imgData) => {

    let inc = 0;
    let inc2 = 0;
    for (i = 0; i < imgData.data.length; i += 4) {
        inc = getRandomNumber(0, 255);
        inc2 = getRandomNumber(0, 255);

        if (inc > 255) {
            inc = 0;
        }

        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + inc;
        imgData.data[i + 1] = avg + inc2;
        imgData.data[i + 2] = avg + 5;
    }

    return imgData;
}

const specks_imgdata = (imgData) => {
    var inc = 0;
    var inc2 = 0;
    var inc3 = 0
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


const specksredscale_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        let randomNumber = getRandomNumber(0, 100);
        if (randomNumber > 10 && randomNumber < 13) {
            imgData.data[i] = 120
            imgData.data[i + 1] = 120
            imgData.data[i + 2] = 120
        }
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3

        imgData.data[i] = avg + 100
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const noise_centre_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += getRandomNumber(0, 100);
        imgData.data[i + 1] += 20
        imgData.data[i + 2] += getRandomNumber(0, 255)

    }

    return imgData;
}


const green_specks_imgdata = (imgData) => {

    var randomNumber;

    for (i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        let addition = 0;
        if (randomNumber > 0 && randomNumber < 50) {
            addition1 = 20;
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition1 = 10;
            addition2 = 90;
        }

        else {
            addition1 = 30;
            addition2 = 10;
        }

        imgData.data[i] += addition1;
        imgData.data[i + 1] += addition2;
        imgData.data[i + 2] += addition1;
    }
    return imgData;
}

const eclectic_imgdata = (imgData) => {

    let randomNumber = 0;

    for (i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        let addition = 0;
        if (randomNumber > 0 && randomNumber < 50) {
            addition1 = 20;
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition1 = 10;
            addition2 = 90;
        }

        else {
            addition1 = 30;
            addition2 = 10;
        }

        if (imgData.data[i] + addition > 255) {
            imgData.data[i] -= addition
        }
        else {
            imgData.data[i] += addition
        }

        if (imgData.data[i + 1] + addition > 255) {
            imgData.data[i + 1] -= addition2;
        } else {
            imgData.data[i] += addition2;
        }
    }
    return imgData;
}


const retroviolet_imgdata = (imgData) => {

    let randomNumber = 0;

    for (i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);

        let addition1 = 0;
        let addition2 = 0;
        if (randomNumber > 0 && randomNumber < 50) {
            addition1 = 20;
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition1 = 20;
            addition2 = 90;
        }

        else {
            addition1 = 10;
            addition2 = 50;
        }

        if (imgData.data[i] - addition1 > 255) {
            imgData.data[i] -= addition1
        }
        else {
            imgData.data[i] += addition1
        }

        if (imgData.data[i + 2] + addition2 > 255) {
            imgData.data[i + 2] -= addition2;
        } else {
            imgData.data[i + 2] += addition2;
        }
    }
    return imgData;
}

// const confetti_imgdata = () => {
//     for (i = 0; i < imgData.data.length; i += 4) {

//         let randomNumber = getRandomNumber(0, 200);

//         if (randomNumber > 0 && randomNumber < 10) {
//             imgData.data[i] = getRandomNumber(0, 255)
//             imgData.data[i + 1] = getRandomNumber(0, 255)
//             imgData.data[i + 2] = getRandomNumber(0, 255)
//         }

//         else {
//             imgData.data[i] += 10
//             imgData.data[i + 1] += 20
//             imgData.data[i + 2] += 90
//         }

//     }
//     return imgData;
// }

export {casino_imgdata, yellow_casino_imgdata, retroviolet_imgdata, eclectic_imgdata, green_specks_imgdata, specks_imgdata, specksredscale_imgdata}