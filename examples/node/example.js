
var filterMagic = require('./filterMagic.js');
const pureimage = require("pureimage");
var out = function() {
    var img1 = pureimage.make(100, 50);
    var ctx = img1.getContext('2d');
    ctx.fillStyle = 'rgba(255,0,0, 0.5)';

    ctx.getImageData(0, 0, img1.height, img1.width)
    var imgData = ctx.getImageData(0, 0, img1.width, img1.height);
    console.log(imgData)

    for (let i = 0; i < imgData.data.length; i += 4) {
        var offset = 5;
        imgData.data[i] = imgData.data[i+4*offset *offset] == undefined ? 0 : imgData.data[i+4*offset];
    }
    console.log(imgData)

    // imgData can now be placed on the canvas.
};
out();