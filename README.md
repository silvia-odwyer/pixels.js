# FilterMagic: Hundreds of photo filters for your JS projects
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
![GitHub top language](https://img.shields.io/github/languages/top/badges/shields.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg)
![Image Filters]()
FilterMagic is a powerful image processing library with over 100 photo filters for use in the browser or with Node.JS.

Image filtering comprises vintage filters, solarizers, inverters, and over ninety more. You can explore these in the Flashback web app, 
which makes use of the library.

# Importing FilterMagic
## In The Browser
Include the following script tag in your page's head tag:

## Node.JS
Node.JS support is coming soon!

## Using FilterMagic
1. Select the image you want to add filters to. 
2. Pass the image into the filter function. 
`var img = document.getElementById("img")`
`var filtered_img = FilterMagic.sepia(img)`

The method returns a canvas object with the filtered image painted onto it. 
You can then append the canvas object wherever you want to place it in the DOM. 

`body.appendElement(filtered_img)`