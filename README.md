# Pixels.JS
## 70+ Photo Filters for your Browser & Node Projects

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Documentation Status](https://readthedocs.org/projects/pixelsjs/badge/?version=latest)](https://pixelsjs.readthedocs.io/en/latest/?badge=latest)
![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg)
![GitHub last commit](https://img.shields.io/badge/filters-71-blue.svg)

![PixelsJS Header](https://github.com/silvia-odwyer/pixels.js/blob/master/pixels_header.PNG "PixelsJS Header")

Pixels.JS is an  image filtering library with over 70 photo filters for use in the browser or with Node.JS.

Image filtering comprises vintage filters, solarizers, inverters, and over ninety more. You can explore these in the [official web app](https://silvia-odwyer.github.io/pixels.js/demo.html), which makes use of the library and each of its comprising filters.

## Check Out The Official Website
The official home of PixelsJS is now here! https://silvia-odwyer.github.io/pixels.js/

## Read The Docs [![Documentation Status](https://readthedocs.org/projects/pixelsjs/badge/?version=latest)](https://pixelsjs.readthedocs.io/en/latest/?badge=latest)
For complete PixelsJS documentation: https://pixelsjs.readthedocs.io/en/latest/

## Importing Pixels.JS
### In The Browser
Include the following script tag in your webpage's head tag: 

```html
<script src="https://cdn.jsdelivr.net/gh/silvia-odwyer/pixels.js/dist/Pixels.js"></script>
``` 

### Node.JS
[NOT YET ON NPM; COMING SOON]
`npm install pixelsjs`

## PixelsJS In Action
On our website, you can enter your own image and view its filtered versions as well as extra demos, but here's a quick demo:

![PixelsJS can transform even this image of a city into a scene from a cyberpunk film!](https://github.com/silvia-odwyer/flashback/blob/master/media/flashback-app-city.gif "PixelsJS can transform even this image of a city into a scene from a cyberpunk film!")

## Using Pixels.JS
### Browser
##### HTML
After you've included a copy of Pixels.JS in your head tag, include an image in your HTML:
```html
<img src="image.PNG" id="img"/> 
```

##### Javascript
Then, in your JavaScript:
```javascript
// Select the image you wish to filter
var img = document.getElementById("img")

// First parameter is the image object, and the second is the filter you wish to apply.
img.onload = function() {
  pixelsJS.filterImg(img, "twenties");      
}
```

#### Node.JS
Usage for Node.JS varies slightly to the browser. Whereas in-browser Pixels.JS automatically replaces the image on the webpage with the newly filtered one, 
in Node, your environment and canvas libraries can differ, so we've kept usage flexible for Node. 

This example uses node-canvas and get-image-data, two NPM modules that make canvas rendering easier, however, you can choose whatever libraries you like; this example merely illustrates using Pixels.js in tandem with node-canvas. 

```javascript
const get_image_data = require('get-image-data');
const PixelsJS = require("Pixels.JS");
const Canvas = require('canvas')

var canvas = new Canvas(200, 200),
    ctx = canvas.getContext('2d'),

get_image_data('./image.jpg', function(error, info) {
  var imgData = info.data
  
  let newImgData = PixelsJS.filterImgData(imgData, "solange");
  
  ctx.putImageData(newImgData, 0, 0);
  
})
```

## Step-By-Step Guide
You can quickly get started with Pixels.JS using the sample code above, but if you're new to web development or want a guided tour, 
just check out the guides below. 

### Browser
1. Include the image on the webpage. `<img src="path/to/image.PNG">`

2. In your JS, select the image you want to add filters to. `var img = document.getElementById("img")`

3. Pass the image into the filter function, and include the name of the filter you want. 
`var filtered_img = Pixels.JS.filterImg(img, "sepia")`

The method filters the image and replaces the current image with the filtered one, so there's no need to append the new image to the DOM, as this is already
done for you. 

### Node.JS
Simply get the image data of the image and pass it to the filterImgData function. The output will be the new image data. 
You can then place this new image data onto your canvas.

## Contributing Guidelines
Want to contribute? I'm always delighted to work with other developers, so submit a Pull Request if you'd like to add any cool image filters. 
:eyes: 

- Identify which category your filter belongs in. Check the JS files found within the `lib` directory and see where your filter belongs. 
If it doesn't belong in any, choose one or open an Issue and I'll create a new category. 

- Add your filter function, ensuring it returns filtered image data. 

- Add the name of your filter and its associated method to the filter_dict variable in index.js. Make sure to import the category file where the filtering method belongs.

## Featured In
PixelsJS has been featured in some frontend web dev outlets:
- [Best4WebDesign](https://www.best4webdesign.com/pixels-js-an-image-filtering-library/)
- [ByPeople](https://www.bypeople.com/pixels-js-photo-filters-library-node-js/)

PixelsJS has also been showcased in the weekly *Web Design Trends* newsletter:
- [Web Design Trends.io](https://www.webdesigntrends.io/web-design-trends-5/)

# Partners
PixelsJS has also inspired some of the filters found in image processing APIs. 

### Recommended APIs
One such API is [ArcadiaJS](https://arcadia-api.xyz/), which provides an easy-to-use API for applying cool and
intriguing effects to images, whose endpoints are clear and reliable. 

## Building the Project
Firstly, clone this repository:

```bash
git clone https://github.com/silvia-odwyer/pixels.js
```

Next up, install the dependencies:

```bash
cd pixels.js
npm install
```

To build the library for the browser, run:

```bash
npm run build:browser
```

## Future Plans
- This library currently contains 70 image filters, but I'd like to bring this to 100 in the next few weeks or so. 
- Publish on NPM.