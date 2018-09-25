(function () {
    var c;
    var ctx;
    var tiles;
    var img;
    var canvas_list = [];
    var current_img_url = "./city1.PNG"
    var current_canvas;
    var imgData;
    var original_img_data;
    var change = 0;
    var isFirst = 0;
    var i;

    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        document.getElementById('img_uploader').addEventListener('change', readURL, true);

        c = document.getElementById("canvas");
        ctx = c.getContext("2d");
        tiles = document.getElementsByClassName("tile");
        console.log(tiles);
        // document.getElementById('img_uploader').addEventListener('change', readURL, true);
        
        // Init default image
        img = document.createElement("img");

        img.onload = function () {
            c.width = img.width;
            c.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            original_img_data = ctx.getImageData(0, 0, c.width, c.height);
            console.log(original_img_data)
            if (change === 0) {
                appendCanvases();
                change += 1;
            }
            assembleFilteredPhotos();
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
            assembleFilteredPhotos();
        } else {
            /// Error message TODO
            console.log("Could not read file. :(")
        }
    }

    function assembleFilteredPhotos() {
        changeCanvasSizes();
        let filters = pixelsJS.getFilterList();

        for (let j = 0; j < filters.length; j += 1) {
            let filter = filters[j]
            let current_canvas = canvas_list[j];
            let tile = tiles[j];

            if (isFirst === 0) {
                let name = document.createElement("p")
                name.innerHTML = filter
                name.className = "text-primary"
                tile.appendChild(name)
            }

            let getctx = current_canvas.getContext("2d");
            imgData = ctx.getImageData(0, 0, c.width, c.height);
            console.log(imgData)
            let resImgData = pixelsJS.filterImgData(imgData, filter);
        
            getctx.putImageData(resImgData, 0, 0);
        }
        isFirst = 1;
    }

    function changeCanvasSizes() {
        console.log("canvas list called")
        for (let k = 0; k < canvas_list.length; k += 1) {
            let canvas = canvas_list[k];
            canvas.width = img.width;
            canvas.height = img.height;
        }
        console.log("canvases", canvas_list)
    }



    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();