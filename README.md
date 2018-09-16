# FilterMagic: Hundreds of photo filters for your JS projects

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
![GitHub top language](https://img.shields.io/github/languages/top/badges/shields.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg)
![Image Filters]()

FilterMagic is a powerful image processing library with over 100 photo filters for use in the browser or with Node.JS.

Image filtering comprises vintage filters, solarizers, inverters, and over ninety more. You can explore these in the Flashback web app, 
which makes use of the library.

## Importing FilterMagic
### In The Browser
Include the following script tag in your page's head tag: `<script src="unpkg.com/FilterMagic.js"></script>`

### Node.JS
`npm install filtermagic`


### Using FilterMagic
#### Browser
!["Usage code for the browser"](https://github.com/silvia-odwyer/FilterMagic/blob/master/browser_code.png "Usage code for the browser")

1. Include the image on the webpage. `<img src="path/to/image.PNG">`

2. In your JS, select the image you want to add filters to. `var img = document.getElementById("img")`

3. Pass the image into the filter function, and include the name of the filter you want. 
`var filtered_img = FilterMagic.filterImg(img, "sepia")`

The method filters the image and replaces the current image with the filtered one, so there's no need to append the new image to the DOM, as this is already
done for you.

#### Node.JS
Usage for Node.JS varies slightly to the browser. Whereas in-browser FilterMagic automatically replaces the image on the webpage with the newly filtered one, 
in Node, your environment and canvas libraries can differ, so we've kept usage flexible for Node. 

Simple get the image data of the image and pass it to the filterImgData function. The output will be the new image data. 
You can then place this new image data onto your canvas.