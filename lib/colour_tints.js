let i;
import {getRandomNumber} from "./helpers.js"

const lemon_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = imgData.data[i] + 50;
    }
    return imgData;
}

const coral_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = imgData.data[i + 1] + 50;
    }
    return imgData;
}

const frontward_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i + 2];
        imgData.data[i + 2] = imgData.data[i + 1] + 50;
    }
    return imgData;
}

const vintage_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 120
        imgData.data[i + 1] += 70
        imgData.data[i + 2] += 13
    }

    return imgData;
}

const perfume_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 80
        imgData.data[i + 1] += 40
        imgData.data[i + 2] += 120
    }
    return imgData;
}

const serenity_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 10
        imgData.data[i + 1] += 40
        imgData.data[i + 2] += 90
    }
    return imgData;
}

const pink_aura_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 90
        imgData.data[i + 1] += 10
        imgData.data[i + 2] += 90
    }
    return imgData;
}

const haze_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 90
        imgData.data[i + 1] += 90
        imgData.data[i + 2] += 10
    }
    return imgData;
}

const mellow_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = 120 - imgData.data[i + 2];
    }
    return imgData;
}

const solange_dark_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 200 - imgData.data[i];

        // imgData.data[i + 1] = 255 - imgData.data[i + 1];
        // imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const zapt_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        // imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        // imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const neue_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
        imgData.data[i] = imgData.data[i] + 20;

    }
    return imgData;
}

const eon_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 120 - imgData.data[i + 1];
        imgData.data[i + 2] = 100 - imgData.data[i + 2];
    }
    return imgData;
}

const aeon_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 60 - imgData.data[i + 1];
        imgData.data[i + 2] = 100 - imgData.data[i + 2];
    }
    return imgData;
}

const rosetint_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 80
        imgData.data[i + 1] = avg + 20
        imgData.data[i + 2] = avg + 31
    }
    return imgData;
}

const slate_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 4
        imgData.data[i + 1] = avg + 3
        imgData.data[i + 2] = avg + 12
    }
    return imgData;
}

const purplescale_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 90
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 80
    }
    return imgData;
}

const radio_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 5
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const twenties_imgdata = (imgData) => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 18
        imgData.data[i + 1] = avg + 12
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const ocean_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 10
        imgData.data[i + 1] += 20
        imgData.data[i + 2] += 90
    }
    return imgData;
}

const greyscale_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg
        imgData.data[i + 1] = avg
        imgData.data[i + 2] = avg
    }
    return imgData;
}

const redgreyscale_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 100
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const greengreyscale_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 20
        imgData.data[i + 1] = avg + 70
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}



const warmth =  (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] + 10
        imgData.data[i + 1] = imgData.data[i + 1] + 18
    }
    return imgData;
}

const crimson = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] + 20
        imgData.data[i + 1] = imgData.data[i + 2] + 20
    }
    return imgData;
}

const phase = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] + getRandomNumber(10, 20)
        imgData.data[i + 1] = imgData.data[i + 2] + getRandomNumber(10, 20)

        imgData.data[i + 2] = imgData.data[i + 2] + getRandomNumber(10, 20)
    }
    return imgData;
}

const grime = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = imgData.data[i] + 5;
        imgData.data[i] = imgData.data[i] + 1;
    }
    return imgData;
}

const evening_imgdata = (imgData) => {
    let SAT_ADJ = 60;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] -= SAT_ADJ
        imgData.data[i + 1] -= SAT_ADJ
        imgData.data[i + 2] -= SAT_ADJ
    }
    return imgData;
}

const sunset = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = imgData.data[i] + 50;
        imgData.data[i + 2] = imgData.data[i + 2] + 12;
    }
    return imgData;
}

const wood = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] + 30
        imgData.data[i + 1] = imgData.data[i + 1] + 12;
    }
    return imgData;
}


const lix_conv = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
    }
    return imgData;
}

const ryo_conv = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const blue_greyscale_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 20
        imgData.data[i + 1] = avg + 30
        imgData.data[i + 2] = avg + 60
    }
    return imgData;
}


const solange_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
    }
    return imgData;
}

const solange_grey_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i + 2];
        imgData.data[i + 1] = imgData.data[i + 1]
        imgData.data[i + 2] = imgData.data[i]

    }
    return imgData;
}



const cool_twilight_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = imgData.data[i + 2] + 70;

    }
    return imgData;
}

const blues_imgdata = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const red_effect = (imgData) => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] + 200;
        imgData.data[i + 1] = imgData.data[i + 1] - 50;
        imgData.data[i + 2] = imgData.data[i + 2] * 0.5;
    }
    return imgData;
}

const horizon_imgdata = () => {
    let SAT_ADJ = 150;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] -= SAT_ADJ
        imgData.data[i + 1] -= SAT_ADJ
        imgData.data[i + 2] -= SAT_ADJ
    }
    return imgData;
}

export {horizon_imgdata, blues_imgdata, cool_twilight_imgdata, blue_greyscale_imgdata, aeon_imgdata, solange_grey_imgdata, solange_imgdata, ryo_conv, lix_conv, wood, sunset, 
lemon_imgdata, coral_imgdata, frontward_imgdata, greyscale_imgdata, perfume_imgdata, vintage_imgdata, serenity_imgdata, slate_imgdata, warmth, redgreyscale_imgdata, 
grime, phase, crimson, greengreyscale_imgdata, ocean_imgdata, radio_imgdata, neue_imgdata, eon_imgdata, zapt_imgdata, solange_dark_imgdata, pink_aura_imgdata, haze_imgdata,
mellow_imgdata, evening_imgdata, twenties_imgdata, rosetint_imgdata, purplescale_imgdata, red_effect}