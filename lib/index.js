var imgData;
let i, addition, addition1, addition2;
import * as brightness_adj from "./brightness_adjs";
import * as colour_tints from "./colour_tints";
import * as gamma from "./gamma";
import * as line_gen from "./line_generators";
import * as misc from "./miscellaneous";
import * as noise_gen from "./noise_generators.js";
import * as offsets from "./offset_filters";
import * as specks_gen from "./specks_generators";

function pixelsJS() {

    return {

        // Browser-only function
        // Used for pre-set filters only. 
        // useNaturalDimensions is a flag if true will use the natural width
        // and height of the image rather than the image element's width and height
        filterImg: (img, filter, useNaturalDimensions = false) => {
            let filterExists = checkIfFilterExists(filter);
            if (filterExists) {
                let filter_dict = getFilterNames();
                let canvas_and_context = imgToCanvas(img, useNaturalDimensions);
                let canvas = canvas_and_context[0];
                let context = canvas_and_context[1];

                imgData = context.getImageData(0, 0, canvas.width, canvas.height);
                let new_img_data = filter_dict[filter](imgData);

                context.putImageData(new_img_data, 0, 0);

                img.parentNode.replaceChild(canvas, img);
            }

            else {
                console.log(`PixelsJS ERROR: Filter ${filter} does not exist`)
            }
        },

        replaceImgElement: (canvas, img) => {
            img.parentNode.replaceChild(canvas, img);
        },

        // Browser and NodeJS compatible
        filterImgData: (user_img_data, filter) => {
            let filterExists = checkIfFilterExists(filter);
            if (filterExists) {
                // Re-initialize the data in the imgData object
                let filter_dict = getFilterNames();
                imgData = user_img_data;
                let new_img_data = filter_dict[filter](imgData);
                return new_img_data;
            }
            else {
                console.log(`PixelsJS Error: Filter ${filter} does not exist`)
            }

        },

        getFilterList: () => {
            let filter_dict = getFilterNames();
            let filters = Object.keys(filter_dict);
            return filters;
        },

        adjBrightness: (img, BRIGHTNESS_ADJ) => {
            let canvas_and_context = imgToCanvas(img);
            let canvas = canvas_and_context[0];
            let context = canvas_and_context[1];

            let imgData = context.getImageData(0, 0, canvas.width, canvas.height);

            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] -= BRIGHTNESS_ADJ
                imgData.data[i + 1] -= BRIGHTNESS_ADJ
                imgData.data[i + 2] -= BRIGHTNESS_ADJ
            }
            context.putImageData(imgData, 0, 0);

            img.parentNode.replaceChild(canvas, img);
        },

        convertToJpg: (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const image = new Image();
                    image.src = reader.result;
                    image.onload = () => {
                        const canvas = document.createElement("canvas");
                        canvas.width = image.width;
                        canvas.height = image.height;
                        const ctx = canvas.getContext("2d");
                        ctx.drawImage(image, 0, 0);
                        canvas.toBlob(
                            (blob) => {
                                blob.name = file.name;
                                resolve(blob);
                            },
                            "image/jpeg",
                            1
                        );
                    };
                    console.log("completed");
                };
            });
        },
    };
}

const getFilterNames = () => {
    const filter_dict = { "horizontal_lines": line_gen.add_horizontal_line_imgdata, "extreme_offset_blue": offsets.extreme_offset_blue, "ocean": colour_tints.ocean_imgdata, "extreme_offset_green": offsets.extreme_offset_green, "offset_green": offsets.offset_green_imgdata, "extra_offset_blue": offsets.extra_offset_blue, "extra_offset_red": offsets.extra_offset_red, "extra_offset_green": offsets.extra_offset_green, "extreme_offset_red": offsets.extreme_offset_red, "specks_redscale": specks_gen.specksredscale_imgdata, "vintage": colour_tints.vintage_imgdata, "perfume": colour_tints.perfume_imgdata, "serenity": colour_tints.serenity_imgdata, "eclectic": specks_gen.eclectic_imgdata, "diagonal_lines": line_gen.add_diagonal_lines_imgdata, "green_specks": specks_gen.green_specks_imgdata, "warmth": colour_tints.warmth, "casino": specks_gen.casino_imgdata, "green_diagonal_lines": line_gen.add_green_diagonal_lines_imgdata, "offset": offsets.offset, "offset_blue": offsets.offset_blue_imgdata, "neue": colour_tints.neue_imgdata, "sunset": colour_tints.sunset, "specks": specks_gen.specks_imgdata, "wood": colour_tints.wood, "lix": colour_tints.lix_conv, "ryo": colour_tints.ryo_conv, "bluescale": colour_tints.blue_greyscale_imgdata, "solange": colour_tints.solange_imgdata, "evening": colour_tints.evening_imgdata, "crimson": colour_tints.crimson, "teal_min_noise": noise_gen.teal_min_noise_imgdata, "phase": colour_tints.phase, "dark_purple_min_noise": noise_gen.dark_purple_min_noise_imgdata, "coral": colour_tints.coral_imgdata, "darkify": brightness_adj.darkify_imgdata, "incbrightness": brightness_adj.incbrightness_imgdata, "incbrightness2": brightness_adj.incbrightness_two_imgdata, "yellow_casino": specks_gen.yellow_casino_imgdata, "invert": brightness_adj.invert_imgdata, "sat_adj": brightness_adj.sat_adj_imgdata, "lemon": colour_tints.lemon_imgdata, "pink_min_noise": noise_gen.pink_min_noise_imgdata, "frontward": colour_tints.frontward_imgdata, "pink_aura": colour_tints.pink_aura_imgdata, "haze": colour_tints.haze_imgdata, "cool_twilight": colour_tints.cool_twilight_imgdata, "blues": colour_tints.blues_imgdata, "horizon": colour_tints.horizon_imgdata, "mellow": colour_tints.mellow_imgdata, "solange_dark": colour_tints.solange_dark_imgdata, "solange_grey": colour_tints.solange_grey_imgdata, "zapt": colour_tints.zapt_imgdata, "eon": colour_tints.eon_imgdata, "aeon": colour_tints.aeon_imgdata, "matrix": noise_gen.matrix_imgdata, "cosmic": noise_gen.cosmic_imgdata, "min_noise": noise_gen.min_noise_imgdata, "red_min_noise": noise_gen.red_min_noise_imgdata, "matrix2": noise_gen.matrix2, "purplescale": colour_tints.purplescale_imgdata, "radio": colour_tints.radio_imgdata, "twenties": colour_tints.twenties_imgdata, "pixel_blue": brightness_adj.pixel_blue_imgdata, "greyscale": colour_tints.greyscale_imgdata, "grime": colour_tints.grime, "redgreyscale": colour_tints.redgreyscale_imgdata, "retroviolet": specks_gen.retroviolet_imgdata, "greengreyscale": colour_tints.greengreyscale_imgdata, "crimson": colour_tints.crimson, "green_med_noise": noise_gen.green_med_noise_imgdata, "green_min_noise": noise_gen.green_min_noise_imgdata, "blue_min_noise": noise_gen.blue_min_noise_imgdata, "rosetint": colour_tints.rosetint_imgdata, "purple_min_noise": noise_gen.purple_min_noise_imgdata, "red_effect": colour_tints.red_effect, "gamma": gamma.gamma, "teal_gamma": gamma.teal_gamma, "purple_gamma": gamma.purple_gamma, "yellow_gamma": gamma.yellow_gamma, "bluered_gamma": gamma.bluered_gamma, "green_gamma": gamma.green_gamma, "red_gamma": gamma.red_gamma, "black_specks": specks_gen.black_specks, "white_specks": specks_gen.white_specks, "salt_and_pepper": specks_gen.salt_and_pepper, "rgbSplit": offsets.rgbSplit, "threshold": misc.threshold, "threshold75": misc.threshold75, "threshold125": misc.threshold125, "pixelate": misc.pixelate, "pixelate16": misc.pixelate16 }
    return filter_dict;
}

// Check if the filter exists.
const checkIfFilterExists = (filter) => {
    let filter_dict = getFilterNames();
    let filters = Object.keys(filter_dict)
    if (filters.includes(filter)) {
        return true
    }
    return false
}

// Convert the image to a canvas. 
// This image can then be manipulated accordingly with the given image data. 
// The image data can then be manipulated accordingly.
// The image can then be sent out to the stream with the following image data. 

const imgToCanvas = (img, useNaturalDimensions = false) => {
    var canvas = document.createElement("canvas");
    let imgWidth = img.width || img.naturalWidth;
    let imgHeight = img.height || img.naturalHeight;

    // flag to force the usage of the natural width/height rather than
    // the img tag's w/h. Otherwise images larger than the 
    // img element's size don't filter the entire image correctly
    if(useNaturalDimensions) {
        imgWidth = img.naturalWidth;
        imgHeight = img.naturalHeight;
    }    

    canvas.height = imgHeight;
    canvas.width = imgWidth;
    var context = canvas.getContext("2d");
    var ptrn = context.createPattern(img, 'no-repeat');
    context.fillStyle = ptrn;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return [canvas, context];
}

// Generate a random number when given a max and min number. 
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

export default pixelsJS();