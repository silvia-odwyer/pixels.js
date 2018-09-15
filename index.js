import _ from 'lodash';
var imgData;
function filterMagic() {
    return {

        filterImg: (img, filter) => {
            var filter_dict = { "offset": offset }
            // var filter_dict = { "a": a, "offset_blue" : offset_blue_imgdata, "offset_green" : offset_green_imgdata, "offset" : offset_imgdata, "solange_grey" : solange_grey_imgdata, "invert": invert_imgdata, "lemon" : lemon_imgdata, "coral" : coral_imgdata, "dark_purple_min_noise" : dark_purple_min_noise_imgdata, "green_med_noise" : green_med_noise_imgdata, "teal_min_noise" : teal_min_noise_imgdata, "blue_min_noise" : blue_min_noise_imgdata, "green_min_noise" : green_min_noise_imgdata, "green_med_noise" : green_med_noise_imgdata, "pink_min_noise" : pink_min_noise_imgdata, "red_min_noise" : red_min_noise_imgdata, "min_noise": min_noise_imgdata, "pane": pane_imgdata, "add_horizontal_lines": add_horizontal_line_imgdata, "add_diagonal_lines": add_diagonal_lines_imgdata, "add_green_diagonal_lines": add_green_diagonal_lines_imgdata, "greengreyscale": greengreyscale_imgdata, "darkify": darkify_imgdata, "incbrightness": incbrightness_imgdata, "cool_twilight": cool_twilight_imgdata, "blues": blues_imgdata, "ryo_conv": ryo_conv, "lix": lix_conv, "casino": casino_imgdata, "yellow_casino": yellow_casino_imgdata, "specks": specks_imgdata, "sat_adj": sat_adj_imgdata, "noise_centre": noise_centre_imgdata, "greenspecks": green_specks_imgdata, "eclectic": eclectic_imgdata, "matrix": matrix_imgdata, "cosmic": cosmic_imgdata, "solange_dark": solange_dark_imgdata, "solange": solange_imgdata, "zapt": zapt_imgdata, "neue": neue_imgdata, "eon": eon_imgdata, "aeon": aeon_imgdata, "ocean": ocean_imgdata, "confetti": confetti_imgdata, "horizon": horizon_imgdata, "rosetint": rosetint_imgdata, "slate": slate_imgdata, "purplescale": purplescale_imgdata, "redgreyscale": redgreyscale_imgdata, "radio": radio_imgdata, "specks_redscale": specksredscale_imgdata, "twenties": twenties_imgdata, "greyscale": greyscale_imgdata, "mellow": mellow_imgdata, "vintage": vintage_imgdata, "evening": evening_imgdata, "bluegreyscale": blue_greyscale_imgdata, "perfume": perfume_imgdata, "pink_aura": pink_aura_imgdata, "serenity": serenity_imgdata, "bluegreyscale": blue_greyscale_imgdata, "retroviolet": retroviolet_imgdata, "haze": haze_imgdata, "frontward" : frontward_imgdata }
            console.log("filter image called")

            let img2Canvas = imgToCanvas(img);
            let canvas = img2Canvas[0];
            let context = img2Canvas[1];

            imgData = context.getImageData(0, 0, canvas.width, canvas.height);
            console.log(imgData);

            let filter_func = filter_dict[filter];
            let new_img_data = filter_dict[filter]();
            console.log(new_img_data);

            context.putImageData(imgData, 0, 0)

            console.log(canvas, img);
            img.parentNode.replaceChild(canvas, img);

        }

    };

}



export default filterMagic();
