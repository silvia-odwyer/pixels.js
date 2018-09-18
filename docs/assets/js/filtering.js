(function () {
    var c;
    var ctx;
    var tiles;
    var img;
    var canvas_list = [];
    var current_img_url = "city1.PNG"
    var current_canvas;
    var imgData;
    var original_img_data;
    var change = 0;
    var i;

    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        c = document.getElementById("canvas");
        ctx = c.getContext("2d");
        tiles = document.getElementsByClassName("tile");
        console.log(tiles);
        // document.getElementById('img_uploader').addEventListener('change', readURL, true);
        appendCanvases();

        // Init default image
        img = document.createElement("img");

        img.onload = function () {
            ctx.drawImage(img, 0, 0, 220, 277);
            original_img_data = ctx.getImageData(0, 0, c.width, c.height);
            console.log(original_img_data)
            if (change === 0) {
                assembleFilteredPhotos();
                change += 1;
            }
        }
        img.src = current_img_url;
    }

    function appendCanvases() {
        // Create for loop which creates canvases and then appends them to a list. 

        for (i = 0; i < tiles.length; i++) {
            let appended_canvas = document.createElement("canvas");
            appended_canvas.width = c.width;
            appended_canvas.height = c.height;
            let tile_elem = tiles[i];
            canvas_list.push(appended_canvas);
            tile_elem.appendChild(appended_canvas);
        }
        console.log(canvas_list);
    }

    function readURL() {
        let file = document.getElementById("img_uploader").files[0];

        let reader = new FileReader();
        reader.onloadend = function () {
            img.src = reader.result; // Set the global image to the path of the file on the client's PC.
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            /// Error message TODO
            console.log("Could not read file. :(")
        }
    }

    function assembleFilteredPhotos() {
        const group = [offset_imgdata, offset_blue_imgdata, offset_green_imgdata, haze_imgdata, pink_aura_imgdata, serenity_imgdata, perfume_imgdata, vintage_imgdata, evening_imgdata, mellow_imgdata, red_min_noise_imgdata, greyscale_imgdata, specksredscale_imgdata, blue_greyscale_imgdata, twenties_imgdata, radio_imgdata, redgreyscale_imgdata, purplescale_imgdata, slate_imgdata, cosmic_imgdata, matrix_imgdata, eclectic_imgdata, green_specks_imgdata, rosetint_imgdata, horizon_imgdata, pink_min_noise_imgdata, confetti_imgdata, retroviolet_imgdata, ocean_imgdata, incbrightness_two_imgdata, noise_centre_imgdata, sat_adj_imgdata, specks_imgdata, yellow_casino_imgdata, casino_imgdata, aeon_imgdata, eon_imgdata, neue_imgdata, zapt_imgdata, solange_imgdata, solange_dark_imgdata, lix_conv, ryo_conv, blues_imgdata, cool_twilight_imgdata, incbrightness_imgdata, greengreyscale_imgdata, add_green_diagonal_lines_imgdata, add_diagonal_lines_imgdata, add_horizontal_line_imgdata, pane_imgdata, min_noise_imgdata, green_med_noise_imgdata, green_min_noise_imgdata, blue_min_noise_imgdata, dark_purple_min_noise_imgdata, lemon_imgdata, coral_imgdata, darkify_imgdata, frontward_imgdata, solange_grey_imgdata]

        for (let j = 0; j < canvas_list.length; j += 1) {
            let current_canvas = canvas_list[j];
            console.log(current_canvas);

            let getctx = current_canvas.getContext("2d");
            imgData = ctx.getImageData(0, 0, c.width, c.height);

            // let resImgData = group[j]();
            console.log(resImgData);
            getctx.putImageData(imgData, 0, 0);
        }
    }



    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();