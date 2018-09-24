(function () {

    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        
        var img = document.getElementById("img");
        img.onload = function () {
            pixelsJS.filterImg(img, "neue");
        }

        var img2 = document.getElementById("img2");
        img2.onload = function() {
            pixelsJS.filterImg(img2, "cosmic")
        }

        var img3 = document.getElementById("img3");
        img3.onload = function() {
            pixelsJS.filterImg(img3, "ocean")
        }
    }

})();