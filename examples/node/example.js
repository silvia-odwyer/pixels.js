
var filterMagic = require('Pixels.js');

const pureimage = require("pureimage");
var out = function() {
    var img1 = pureimage.make(100, 50);
    var ctx = img1.getContext('2d');
    ctx.fillStyle = 'rgba(255,0,0, 0.5)';

    var imgData = ctx.getImageData(0, 0, img1.height, img1.width);
    imgData = pixelsJS.filterImgData(imgData, "solange");
    // imgData can now be placed on the canvas.

    console.log("New img data:", imgData)

    ctx.putImageData(newImgData, 0, 0)

};
out();