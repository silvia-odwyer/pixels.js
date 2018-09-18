import _ from 'lodash';
var imgData;
let i, addition, addition1, addition2;

function filterMagic() {
    var filter_dict = { "a": a, "offset" : offset, "offset_blue": offset_blue_imgdata, "offset_green": offset_green_imgdata, "solange_grey": solange_grey_imgdata, "invert": invert_imgdata, "lemon": lemon_imgdata, "coral": coral_imgdata, "dark_purple_min_noise": dark_purple_min_noise_imgdata, "green_med_noise": green_med_noise_imgdata, "teal_min_noise": teal_min_noise_imgdata, "blue_min_noise": blue_min_noise_imgdata, "green_min_noise": green_min_noise_imgdata, "green_med_noise": green_med_noise_imgdata, "pink_min_noise": pink_min_noise_imgdata, "red_min_noise": red_min_noise_imgdata, "min_noise": min_noise_imgdata, "pane": pane_imgdata, "add_horizontal_lines": add_horizontal_line_imgdata, "add_diagonal_lines": add_diagonal_lines_imgdata, "add_green_diagonal_lines": add_green_diagonal_lines_imgdata, "greengreyscale": greengreyscale_imgdata, "darkify": darkify_imgdata, "incbrightness": incbrightness_imgdata, "cool_twilight": cool_twilight_imgdata, "blues": blues_imgdata, "ryo": ryo_conv, "lix": lix_conv, "casino": casino_imgdata, "yellow_casino": yellow_casino_imgdata, "specks": specks_imgdata, "sat_adj": sat_adj_imgdata, "noise_centre": noise_centre_imgdata, "greenspecks": green_specks_imgdata, "eclectic": eclectic_imgdata, "matrix": matrix_imgdata, "cosmic": cosmic_imgdata, "solange_dark": solange_dark_imgdata, "solange": solange_imgdata, "zapt": zapt_imgdata, "neue": neue_imgdata, "eon": eon_imgdata, "aeon": aeon_imgdata, "ocean": ocean_imgdata, "confetti": confetti_imgdata, "horizon": horizon_imgdata, "rosetint": rosetint_imgdata, "slate": slate_imgdata, "purplescale": purplescale_imgdata, "redgreyscale": redgreyscale_imgdata, "radio": radio_imgdata, "specks_redscale": specksredscale_imgdata, "twenties": twenties_imgdata, "greyscale": greyscale_imgdata, "mellow": mellow_imgdata, "vintage": vintage_imgdata, "evening": evening_imgdata, "bluegreyscale": blue_greyscale_imgdata, "perfume": perfume_imgdata, "pink_aura": pink_aura_imgdata, "serenity": serenity_imgdata, "bluegreyscale": blue_greyscale_imgdata, "retroviolet": retroviolet_imgdata, "haze": haze_imgdata, "frontward": frontward_imgdata }

    return {

        // Browser-only function
        filterImg: (img, filter) => {
            console.log("In browser");
            let img2Canvas = imgToCanvas(img);
            let canvas = img2Canvas[0];
            let context = img2Canvas[1];

            imgData = context.getImageData(0, 0, canvas.width, canvas.height);
            console.log(imgData);
            let new_img_data = filter_dict[filter]();
            console.log(new_img_data);

            context.putImageData(imgData, 0, 0)

            console.log(canvas, img);
            img.parentNode.replaceChild(canvas, img);

        },

        // Browser and NodeJS compatible
        filterImgData: (user_img_data, filter) => {
            // Re-initialize the data in the imgData object
            imgData = user_img_data;
            let new_img_data = filter_dict[filter]();
            return new_img_data;
        }
    };
}

const imgToCanvas = (img) => {
    console.log("IMAGE IS", img);
    var canvas = document.createElement("canvas");
    canvas.height = img.height;
    canvas.width = img.width;
    var context = canvas.getContext("2d");
    var ptrn = context.createPattern(img, 'no-repeat');
    context.fillStyle = ptrn;
    context.fillRect(0, 0, canvas.width, canvas.height);

    return [canvas, context];
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkIfBrowser = () => {
    module.exports = false;
    try {
        module.exports = Object.prototype.toString.call(global.process) === '[object process]'
        console.log("Cannot use browser functions in Node!");

    }
    catch (e) {
        return true
    }
    return false
}

const offset = () => {
    console.log("offset called")
    for (let i = 0; i < imgData.data.length; i += 4) {
        var offset = 5;
        imgData.data[i] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const lix_conv = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
    }
    return imgData;
}

const ryo_conv = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const blue_greyscale_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 20
        imgData.data[i + 1] = avg + 30
        imgData.data[i + 2] = avg + 60
    }
    return imgData;
}

const offset_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 5;
        imgData.data[i] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const offset_green_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 5;
        imgData.data[i + 1] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const offset_blue_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var offset = 5;
        imgData.data[i + 2] = imgData.data[i + 4 * offset * offset] == undefined ? 0 : imgData.data[i + 4 * offset];
    }
    return imgData;
}

const solange_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
    }
    return imgData;
}

const solange_grey_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i + 2];
        imgData.data[i + 1] = imgData.data[i + 1]
        imgData.data[i + 2] = imgData.data[i]

    }
    return imgData;
}


const min_noise_imgdata = () => {
    var rand = (0.5 - Math.random()) * 53;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.4;

        let randomColor2 = 0.6 + Math.random() * 0.4;

        let randomColor3 = 0.6 + Math.random() * 0.4;

        imgData.data[i] = imgData.data[i] * 0.99 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

        imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3;
    }
    return imgData;
}

const red_min_noise_imgdata = () => {
    var rand = (0.5 - Math.random()) * 1;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.6;

        let randomColor2 = 0.6 + Math.random() * 0.4;

        let randomColor3 = 0.6 + Math.random() * 0.4;

        imgData.data[i] = imgData.data[i] * 0.99 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

        imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3;
    }
    return imgData;
}

const cool_twilight_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
    }
    return imgData;
}

const blues_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const darkify_imgdata = () => {
    let BRIGHTNESS_ADJ = 20;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] -= BRIGHTNESS_ADJ
        imgData.data[i + 1] -= BRIGHTNESS_ADJ
        imgData.data[i + 2] -= BRIGHTNESS_ADJ
    }
    return imgData;
}

const incbrightness_imgdata = () => {
    let BRIGHTNESS_ADJ = 50;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += BRIGHTNESS_ADJ
        imgData.data[i + 1] += BRIGHTNESS_ADJ
        imgData.data[i + 2] += BRIGHTNESS_ADJ
    }
    return imgData;
}

const greyscale_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg
        imgData.data[i + 1] = avg
        imgData.data[i + 2] = avg
    }
    return imgData;
}

const redgreyscale_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 100
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const greengreyscale_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 20
        imgData.data[i + 1] = avg + 70
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}


const add_horizontal_line_imgdata = () => {
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

const add_diagonal_lines_imgdata = () => {
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

const add_green_diagonal_lines_imgdata = () => {
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

const pane_imgdata = () => {
    let inc = 0;
    for (i = 0; i < imgData.data.length; i += 4) {
        inc += 200;
        if (inc > 255) {
            inc = 0;
        }
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 5;
        imgData.data[i + 1] = avg + inc;
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const casino_imgdata = () => {

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

const yellow_casino_imgdata = () => {

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

const specks_imgdata = () => {
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

const incbrightness_two_imgdata = () => {
    let inc = 0;
    let inc2 = 0;
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

const invert_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const solange_dark_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 200 - imgData.data[i];

        // imgData.data[i + 1] = 255 - imgData.data[i + 1];
        // imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const zapt_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        // imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        // imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const neue_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
    }
    return imgData;
}

const eon_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 120 - imgData.data[i + 1];
        imgData.data[i + 2] = 100 - imgData.data[i + 2];
    }
    return imgData;
}

const aeon_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = 60 - imgData.data[i + 1];
        imgData.data[i + 2] = 100 - imgData.data[i + 2];
    }
    return imgData;
}

const rosetint_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 80
        imgData.data[i + 1] = avg + 20
        imgData.data[i + 2] = avg + 31
    }
    return imgData;
}

const slate_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 4
        imgData.data[i + 1] = avg + 3
        imgData.data[i + 2] = avg + 12
    }
    return imgData;
}

const purplescale_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 90
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 80
    }
    return imgData;
}

const radio_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 5
        imgData.data[i + 1] = avg + 40
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const twenties_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
        imgData.data[i] = avg + 18
        imgData.data[i + 1] = avg + 12
        imgData.data[i + 2] = avg + 20
    }
    return imgData;
}

const ocean_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 10
        imgData.data[i + 1] += 20
        imgData.data[i + 2] += 90
    }
    return imgData;
}

const sat_adj_imgdata = () => {
    let SAT_ADJ = 150;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] -= SAT_ADJ
        imgData.data[i + 1] -= SAT_ADJ
        imgData.data[i + 2] -= SAT_ADJ
    }
    return imgData;
}

const specksredscale_imgdata = () => {
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

const noise_centre_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += getRandomNumber(0, 100);
        imgData.data[i + 1] += 20
        imgData.data[i + 2] += getRandomNumber(0, 255)

    }

    return imgData;
}

const perfume_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 80
        imgData.data[i + 1] += 40
        imgData.data[i + 2] += 120
    }
    return imgData;
}

const serenity_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 10
        imgData.data[i + 1] += 40
        imgData.data[i + 2] += 90
    }
    return imgData;
}

const pink_aura_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 90
        imgData.data[i + 1] += 10
        imgData.data[i + 2] += 90
    }
    return imgData;
}

const haze_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 90
        imgData.data[i + 1] += 90
        imgData.data[i + 2] += 10
    }
    return imgData;
}

const mellow_imgdata = () => {

    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = 120 - imgData.data[i + 2];
    }
    return imgData;
}

const green_specks_imgdata = () => {

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

const eclectic_imgdata = () => {

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

const matrix_imgdata = () => {
    var randomNumber;

    for (i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        var addition;
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

        if (imgData.data[i] - addition > 255) {
            imgData.data[i] -= addition
        }
        else {
            imgData.data[i] += addition
        }

        if (imgData.data[i + 1] + addition > 255) {
            imgData.data[i + 1] -= addition2;
        } else {
            imgData.data[i + 1] += addition2;
        }
    }
    return imgData;
}

const matrix2 = () => {
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
            imgData.data[i + 1] += addition2;
        }
    }
    return imgData;
}

const cosmic_imgdata = () => {
    let randomNumber = 0;

    for (i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
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

const retroviolet_imgdata = () => {

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

const vintage_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] += 120
        imgData.data[i + 1] += 70
        imgData.data[i + 2] += 13
    }

    return imgData;
}

const confetti_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {

        let randomNumber = getRandomNumber(0, 200);

        if (randomNumber > 0 && randomNumber < 10) {
            imgData.data[i] = getRandomNumber(0, 255)
            imgData.data[i + 1] = getRandomNumber(0, 255)
            imgData.data[i + 2] = getRandomNumber(0, 255)
        }

        else {
            imgData.data[i] += 10
            imgData.data[i + 1] += 20
            imgData.data[i + 2] += 90
        }

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

const evening_imgdata = () => {
    let SAT_ADJ = 60;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] -= SAT_ADJ
        imgData.data[i + 1] -= SAT_ADJ
        imgData.data[i + 2] -= SAT_ADJ
    }
    return imgData;
}


// An experimental function that is used for the testing of image filtering.
const a = function () {
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

const pixel_blue_imgdata = () => {
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


const lemon_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 1] = imgData.data[i] + 50;
    }
    return imgData;
}

const coral_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 2] = imgData.data[i + 1] + 50;
    }
    return imgData;
}

const frontward_imgdata = () => {
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i + 2];
        imgData.data[i + 2] = imgData.data[i + 1] + 50;
    }
    return imgData;
}

const green_med_noise_imgdata = () => {
    let rand = (0.5 - Math.random()) * 9;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.5;

        let randomColor2 = 0.6 + Math.random() * 0.5;

        let randomColor3 = 0.6 + Math.random() * 0.5;

        imgData.data[i] = imgData.data[i + 1] * 0.5 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 2] * 0.99 * randomColor2;

        imgData.data[i + 2] = imgData.data[i] * 0.99 * randomColor3;
    }
    return imgData;
}

const dark_purple_min_noise_imgdata = () => {
    let rand = (0.5 - Math.random()) * 9;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.5;

        let randomColor2 = 0.6 + Math.random() * 0.5;

        let randomColor3 = 0.6 + Math.random() * 0.5;

        imgData.data[i] = imgData.data[i] * 0.5 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 1] * 0.3 * randomColor2;

        imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3;
    }
    return imgData;
}

const teal_min_noise_imgdata = () => {
    let rand = (0.5 - Math.random()) * 1;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.1;

        let randomColor2 = 0.6 + Math.random() * 0.5;

        let randomColor3 = 0.6 + Math.random() * 0.5;

        imgData.data[i] = imgData.data[i] * 0.99 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

        imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3;
    }
    return imgData;
}

const purple_min_noise_imgdata = () => {
    let rand = (0.5 - Math.random()) * 1;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.5;

        let randomColor2 = 0.6 + Math.random() * 0.2;

        let randomColor3 = 0.6 + Math.random() * 0.8;

        imgData.data[i] = imgData.data[i] * 0.99 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

        imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3;
    }
    return imgData;
}

const blue_min_noise_imgdata = () => {
    let rand = (0.5 - Math.random()) * 1;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.1;

        let randomColor2 = 0.6 + Math.random() * 0.2;

        let randomColor3 = 0.6 + Math.random() * 0.7;

        imgData.data[i] = imgData.data[i] * 0.99 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

        imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3;
    }
    return imgData;
}

const green_min_noise_imgdata = () => {
    let rand = (0.5 - Math.random()) * 1;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.1;

        let randomColor2 = 0.6 + Math.random() * 0.5;

        let randomColor3 = 0.6 + Math.random() * 0.4;

        imgData.data[i] = imgData.data[i] * 0.99 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

        imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3;
    }
    return imgData;
}

const pink_min_noise_imgdata = () => {
    let rand = (0.5 - Math.random()) * 1;

    for (i = 0; i < imgData.data.length; i += 4) {
        let randomColor1 = 0.6 + Math.random() * 0.6;

        let randomColor2 = 0.6 + Math.random() * 0.1;

        let randomColor3 = 0.6 + Math.random() * 0.4;

        imgData.data[i] = imgData.data[i] * 0.99 * randomColor1;
        imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

        imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3;
    }
    return imgData;
}

export default filterMagic();
