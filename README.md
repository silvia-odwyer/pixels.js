# Pixels.JS: Hundreds of photo filters for your JS projects

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
![GitHub top language](https://img.shields.io/github/languages/top/badges/shields.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg)

Pixels.JS is an  image filtering library with over 100 photo filters for use in the browser or with Node.JS.

Image filtering comprises vintage filters, solarizers, inverters, and over ninety more. You can explore these in the Flashback web app, 
which makes use of the library.

## Importing Pixels.JS
### In The Browser
Include the following script tag in your page's head tag: `<script src="unpkg.com/Pixels.JS.js"></script>`

### Node.JS
`npm install Pixels.JS`


## Using Pixels.JS
#### Browser
##### HTML
<img src="image.PNG" id="img"/> 

##### Javascript
```javascript
// Select the image you wish to filter
var img = document.getElementById("img")
// First parameter is the image object, and the second is the filter you wish to apply.
pixelsJS.filterImg(img, "twenties");      
```
1. Include the image on the webpage. `<img src="path/to/image.PNG">`

2. In your JS, select the image you want to add filters to. `var img = document.getElementById("img")`

3. Pass the image into the filter function, and include the name of the filter you want. 
`var filtered_img = Pixels.JS.filterImg(img, "sepia")`

The method filters the image and replaces the current image with the filtered one, so there's no need to append the new image to the DOM, as this is already
done for you.

#### Node.JS
Usage for Node.JS varies slightly to the browser. Whereas in-browser Pixels.JS automatically replaces the image on the webpage with the newly filtered one, 
in Node, your environment and canvas libraries can differ, so we've kept usage flexible for Node. 

Simply get the image data of the image and pass it to the filterImgData function. The output will be the new image data. 
You can then place this new image data onto your canvas.

```javascript
const get-image-data = require('get-image-data');
const Pixels.JS = require("Pixels.JS");
const Canvas = require('canvas')

var canvas = new Canvas(200, 200),
    ctx = canvas.getContext('2d'),

get-image-data('./image.jpg', function(error, info) {
  var imgData = info.data
  
  let newImgData = Pixels.JS.filterImgData(imgData, "solange");
  
  ctx.putImageData(imgData, 0, 0);
  
})
```

!["Usage code for Node.JS"](https://github.com/silvia-odwyer/Pixels.JS/blob/master/node_code.png "Usage code for NodeJS")
