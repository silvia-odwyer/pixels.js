!function(a,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pixelsJS=t():a.pixelsJS=t()}(this,(function(){return function(a){var t={};function e(d){if(t[d])return t[d].exports;var n=t[d]={i:d,l:!1,exports:{}};return a[d].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=a,e.c=t,e.d=function(a,t,d){e.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:d})},e.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,t){if(1&t&&(a=e(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(e.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)e.d(d,n,function(t){return a[t]}.bind(null,n));return d},e.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(t,"a",t),t},e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},e.p="",e(e.s=1)}([function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getRandomNumber=function(a,t){return Math.floor(Math.random()*(t-a+1))+a}},function(a,t,e){"use strict";(function(d){Object.defineProperty(t,"__esModule",{value:!0});var n,r=f(e(3)),o=f(e(4)),i=f(e(5)),g=f(e(6)),_=f(e(7)),l=f(e(8)),m=f(e(9)),u=f(e(10));function f(a){if(a&&a.__esModule)return a;var t={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);return t.default=a,t}function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var c=void 0;var h=function(){var a;return s(a={horizontal_lines:g.add_horizontal_line_imgdata,extreme_offset_blue:m.extreme_offset_blue,ocean:o.ocean_imgdata,extreme_offset_green:m.extreme_offset_green,offset_green:m.offset_green_imgdata,extra_offset_blue:m.extra_offset_blue,extra_offset_red:m.extra_offset_red,extra_offset_green:m.extra_offset_green,extreme_offset_red:m.extreme_offset_red,specks_redscale:u.specksredscale_imgdata,vintage:o.vintage_imgdata,perfume:o.perfume_imgdata,serenity:o.serenity_imgdata,eclectic:u.eclectic_imgdata,diagonal_lines:g.add_diagonal_lines_imgdata,green_specks:u.green_specks_imgdata,warmth:o.warmth,casino:u.casino_imgdata,green_diagonal_lines:g.add_green_diagonal_lines_imgdata,offset:m.offset,offset_blue:m.offset_blue_imgdata,neue:o.neue_imgdata,sunset:o.sunset,specks:u.specks_imgdata,wood:o.wood,lix:o.lix_conv,ryo:o.ryo_conv,bluescale:o.blue_greyscale_imgdata,solange:o.solange_imgdata,evening:o.evening_imgdata,crimson:o.crimson,teal_min_noise:l.teal_min_noise_imgdata,phase:o.phase,dark_purple_min_noise:l.dark_purple_min_noise_imgdata,coral:o.coral_imgdata,darkify:r.darkify_imgdata,incbrightness:r.incbrightness_imgdata,incbrightness2:r.incbrightness_two_imgdata,yellow_casino:u.yellow_casino_imgdata,invert:r.invert_imgdata,sat_adj:r.sat_adj_imgdata,lemon:o.lemon_imgdata,pink_min_noise:l.pink_min_noise_imgdata,frontward:o.frontward_imgdata,pink_aura:o.pink_aura_imgdata,haze:o.haze_imgdata,cool_twilight:o.cool_twilight_imgdata,blues:o.blues_imgdata,horizon:o.horizon_imgdata,mellow:o.mellow_imgdata,solange_dark:o.solange_dark_imgdata,solange_grey:o.solange_grey_imgdata,zapt:o.zapt_imgdata,eon:o.eon_imgdata,aeon:o.aeon_imgdata,matrix:l.matrix_imgdata,cosmic:l.cosmic_imgdata,min_noise:l.min_noise_imgdata,red_min_noise:l.red_min_noise_imgdata,matrix2:l.matrix2,purplescale:o.purplescale_imgdata,radio:o.radio_imgdata,twenties:o.twenties_imgdata,a:r.a,pixel_blue:r.pixel_blue_imgdata,greyscale:o.greyscale_imgdata,grime:o.grime,redgreyscale:o.redgreyscale_imgdata,retroviolet:u.retroviolet_imgdata,greengreyscale:o.greengreyscale_imgdata},"crimson",o.crimson),s(a,"green_med_noise",l.green_med_noise_imgdata),s(a,"green_min_noise",l.green_min_noise_imgdata),s(a,"blue_min_noise",l.blue_min_noise_imgdata),s(a,"rosetint",o.rosetint_imgdata),s(a,"purple_min_noise",l.purple_min_noise_imgdata),s(a,"red_effect",o.red_effect),s(a,"gamma",i.gamma),s(a,"teal_gamma",i.teal_gamma),s(a,"purple_gamma",i.purple_gamma),s(a,"yellow_gamma",i.yellow_gamma),s(a,"bluered_gamma",i.bluered_gamma),s(a,"green_gamma",i.green_gamma),s(a,"red_gamma",i.red_gamma),s(a,"black_specks",u.black_specks),s(a,"white_specks",u.white_specks),s(a,"salt_and_pepper",u.salt_and_pepper),s(a,"rgbSplit",m.rgbSplit),s(a,"threshold",_.threshold),s(a,"threshold75",_.threshold75),s(a,"threshold125",_.threshold125),s(a,"pixelate",_.pixelate),s(a,"pixelate16",_.pixelate16),a},p=function(a){var t=h();return!!Object.keys(t).includes(a)},v=function(a){var t=document.createElement("canvas"),e=a.width||a.naturalWidth,d=a.height||a.naturalHeight;t.height=d,t.width=e;var n=t.getContext("2d"),r=n.createPattern(a,"no-repeat");return n.fillStyle=r,n.fillRect(0,0,t.width,t.height),[t,n]};t.default={filterImg:function(a,t){if(p(t)){var e=h(),d=v(a),r=d[0],o=d[1];n=o.getImageData(0,0,r.width,r.height),e[t](n),o.putImageData(n,0,0),a.parentNode.replaceChild(r,a)}else console.log("PixelsJS ERROR: Filter "+t+" does not exist")},replaceImgElement:function(a,t){console.log("r"),t.parentNode.replaceChild(a,t)},filterImgData:function(a,t){if(p(t)){var e=h();return n=a,e[t](n)}console.log("PixelsJS Error: Filter "+t+" does not exist")},getFilterList:function(){var a=h();return Object.keys(a)},adjBrightness:function(a,t){var e=v(a),d=e[0],n=e[1],r=n.getImageData(0,0,d.width,d.height);for(c=0;c<r.data.length;c+=4)r.data[c]-=t,r.data[c+1]-=t,r.data[c+2]-=t;n.putImageData(r,0,0),a.parentNode.replaceChild(d,a)},convertToJpg:function(a){return new Promise((function(t,e){var d=new FileReader;d.readAsDataURL(a),d.onload=function(){var e=new Image;e.src=d.result,e.onload=function(){var d=document.createElement("canvas");d.width=e.width,d.height=e.height,d.getContext("2d").drawImage(e,0,0),d.toBlob((function(e){e.name=a.name,t(e)}),"image/jpeg",1)},console.log("completed")}}))}},a.exports=t.default}).call(this,e(2))},function(a,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(a){"object"==typeof window&&(e=window)}a.exports=e},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pixel_blue_imgdata=t.invert_imgdata=t.darkify_imgdata=t.incbrightness_two_imgdata=t.incbrightness_imgdata=t.sat_adj_imgdata=void 0;var d=e(0),n=void 0,r=void 0;t.sat_adj_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]-=150,a.data[n+1]-=150,a.data[n+2]-=150;return a},t.incbrightness_imgdata=function(a,t){for(n=0;n<a.data.length;n+=4)a.data[n]+=20,a.data[n+1]+=20,a.data[n+2]+=20;return a},t.incbrightness_two_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=80,a.data[n+1]+=80,a.data[n+2]+=80;return a},t.darkify_imgdata=function(a,t){var e=t;for(n=0;n<a.data.length;n+=4)a.data[n]-e>=0&&(a.data[n]-=e),a.data[n+1]-e>=0&&(a.data[n+1]-=e),a.data[n+2]-e>=0&&(a.data[n+2]-=e);return a},t.invert_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=255-a.data[n],a.data[n+1]=255-a.data[n+1],a.data[n+2]=255-a.data[n+2];return a},t.pixel_blue_imgdata=function(a){var t=0;for(n=0;n<a.data.length;n+=4){(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(0,r=30):t>49&&t<100?(100,r=90):(70,r=10),a.data[n]-0>255?a.data[n]-=0:a.data[n]+=0,a.data[n+1]+0>255?a.data[n+1]-=r:a.data[n+2]+=r}return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.red_effect=t.purplescale_imgdata=t.rosetint_imgdata=t.twenties_imgdata=t.evening_imgdata=t.mellow_imgdata=t.haze_imgdata=t.pink_aura_imgdata=t.solange_dark_imgdata=t.zapt_imgdata=t.eon_imgdata=t.neue_imgdata=t.radio_imgdata=t.ocean_imgdata=t.greengreyscale_imgdata=t.crimson=t.phase=t.grime=t.redgreyscale_imgdata=t.warmth=t.slate_imgdata=t.serenity_imgdata=t.vintage_imgdata=t.perfume_imgdata=t.greyscale_imgdata=t.frontward_imgdata=t.coral_imgdata=t.lemon_imgdata=t.sunset=t.wood=t.lix_conv=t.ryo_conv=t.solange_imgdata=t.solange_grey_imgdata=t.aeon_imgdata=t.blue_greyscale_imgdata=t.cool_twilight_imgdata=t.blues_imgdata=void 0;var d=e(0),n=void 0;t.blues_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+2]=255-a.data[n+2];return a},t.cool_twilight_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=255-a.data[n+1],a.data[n+2]=a.data[n+2]+70;return a},t.blue_greyscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+20,a.data[n+1]=t+30,a.data[n+2]=t+60}return a},t.aeon_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=60-a.data[n+1],a.data[n+2]=100-a.data[n+2];return a},t.solange_grey_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n+2],a.data[n+1]=a.data[n+1],a.data[n+2]=a.data[n];return a},t.solange_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=255-a.data[n];return a},t.ryo_conv=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=255-a.data[n],a.data[n+2]=255-a.data[n+2];return a},t.lix_conv=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=255-a.data[n],a.data[n+1]=255-a.data[n+1];return a},t.wood=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+30,a.data[n+1]=a.data[n+1]+12;return a},t.sunset=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=a.data[n]+50,a.data[n+2]=a.data[n+2]+12;return a},t.lemon_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=a.data[n]+50;return a},t.coral_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+2]=a.data[n+1]+50;return a},t.frontward_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n+2],a.data[n+2]=a.data[n+1]+50;return a},t.greyscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t,a.data[n+1]=t,a.data[n+2]=t}return a},t.perfume_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=80,a.data[n+1]+=40,a.data[n+2]+=120;return a},t.vintage_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=120,a.data[n+1]+=70,a.data[n+2]+=13;return a},t.serenity_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=10,a.data[n+1]+=40,a.data[n+2]+=90;return a},t.slate_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+4,a.data[n+1]=t+3,a.data[n+2]=t+12}return a},t.warmth=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+10,a.data[n+1]=a.data[n+1]+18;return a},t.redgreyscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+100,a.data[n+1]=t+40,a.data[n+2]=t+20}return a},t.grime=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=a.data[n]+5,a.data[n]=a.data[n]+1;return a},t.phase=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+(0,d.getRandomNumber)(10,20),a.data[n+1]=a.data[n+2]+(0,d.getRandomNumber)(10,20),a.data[n+2]=a.data[n+2]+(0,d.getRandomNumber)(10,20);return a},t.crimson=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+20,a.data[n+1]=a.data[n+2]+20;return a},t.greengreyscale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+20,a.data[n+1]=t+70,a.data[n+2]=t+20}return a},t.ocean_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=10,a.data[n+1]+=20,a.data[n+2]+=90;return a},t.radio_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+5,a.data[n+1]=t+40,a.data[n+2]=t+20}return a},t.neue_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+2]=255-a.data[n+2],a.data[n]=a.data[n]+20;return a},t.eon_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=120-a.data[n+1],a.data[n+2]=100-a.data[n+2];return a},t.zapt_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+1]=255-a.data[n+1];return a},t.solange_dark_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=200-a.data[n];return a},t.pink_aura_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=90,a.data[n+1]+=10,a.data[n+2]+=90;return a},t.haze_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]+=90,a.data[n+1]+=90,a.data[n+2]+=10;return a},t.mellow_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n+2]=120-a.data[n+2];return a},t.evening_imgdata=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]-=60,a.data[n+1]-=60,a.data[n+2]-=60;return a},t.twenties_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+18,a.data[n+1]=t+12,a.data[n+2]=t+20}return a},t.rosetint_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+80,a.data[n+1]=t+20,a.data[n+2]=t+31}return a},t.purplescale_imgdata=function(a){for(n=0;n<a.data.length;n+=4){var t=(a.data[n]+a.data[n+1]+a.data[n+2])/3;a.data[n]=t+90,a.data[n+1]=t+40,a.data[n+2]=t+80}return a},t.red_effect=function(a){for(n=0;n<a.data.length;n+=4)a.data[n]=a.data[n]+200,a.data[n+1]=a.data[n+1]-50,a.data[n+2]=.5*a.data[n+2];return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=void 0;t.gamma=function(a){for(d=0;d<a.data.length;d+=4)a.data[d]=255*Math.pow(a.data[d]/255,5),a.data[d+1]=255*Math.pow(a.data[d+1]/255,5),a.data[d+2]=255*Math.pow(a.data[d+2]/255,5);return a},t.teal_gamma=function(a){for(d=0;d<a.data.length;d+=4)a.data[d]=255*Math.pow(a.data[d]/255,5);return a},t.purple_gamma=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+1]=255*Math.pow(a.data[d+1]/255,5);return a},t.yellow_gamma=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+2]=255*Math.pow(a.data[d+2]/255,5);return a},t.bluered_gamma=function(a){for(d=0;d<a.data.length;d+=4)a.data[d]=255*Math.pow(a.data[d]/255,5),a.data[d+1]=255*Math.pow(a.data[d+1]/255,5);return a},t.green_gamma=function(a){for(d=0;d<a.data.length;d+=4)a.data[d]=255*Math.pow(a.data[d]/255,5),a.data[d+2]=255*Math.pow(a.data[d+2]/255,5);return a},t.red_gamma=function(a){for(d=0;d<a.data.length;d+=4)a.data[d+1]=255*Math.pow(a.data[d+1]/255,5),a.data[d+2]=255*Math.pow(a.data[d+2]/255,5);return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.add_horizontal_line_imgdata=t.add_green_diagonal_lines_imgdata=t.add_diagonal_lines_imgdata=void 0;e(0);var d=void 0;t.add_diagonal_lines_imgdata=function(a){var t=0;for(d=0;d<a.data.length;d+=4){(t+=20)>255&&(t=0);var e=(a.data[d]+a.data[d+1]+a.data[d+2])/3;a.data[d]=e+t,a.data[d+1]=e+70,a.data[d+2]=e+20}return a},t.add_green_diagonal_lines_imgdata=function(a){var t=0;for(d=0;d<a.data.length;d+=4){(t+=20)>255&&(t=0);var e=(a.data[d]+a.data[d+1]+a.data[d+2])/3;a.data[d]=e+5,a.data[d+1]=e+t,a.data[d+2]=e+20}return a},t.add_horizontal_line_imgdata=function(a){var t=0;for(d=0;d<a.data.length;d+=4){(t+=1)>255&&(t=0);var e=(a.data[d]+a.data[d+1]+a.data[d+2])/3;a.data[d]=e+t,a.data[d+1]=e+70,a.data[d+2]=e+20}return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=function(a){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,e=0;e<a.data.length;e+=4){var d=a.data[e],n=a.data[e+1],r=a.data[e+2],o=.2126*d+.7152*n+.0722*r>=t?255:0;a.data[e]=a.data[e+1]=a.data[e+2]=o}return a},n=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=a.width,d=a.height,n=void 0,r=void 0,o=void 0;t%2!=0&&(t+=1);for(var i=0;i<d;i+=t)for(var g=0;g<e;g+=t){var _=g+t/2,l=i+t/2,m=4*(_+l*e);void 0!==a.data[m]&&(n=a.data[m],r=a.data[m+1],o=a.data[m+2]);for(var u=g+t,f=i+t,s=i;s<f&&!(s>d);s++)for(var c=g;c<u&&!(c>e);c++){var h=4*(c+s*e);a.data[h]=n,a.data[h+1]=r,a.data[h+2]=o}}return a};t.threshold=d,t.threshold75=function(a){return d(a,75)},t.threshold125=function(a){return d(a,125)},t.pixelate=n,t.pixelate16=function(a){return n(a,16)}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pink_min_noise_imgdata=t.matrix_imgdata=t.min_noise_imgdata=t.matrix2=t.blue_min_noise_imgdata=t.cosmic_imgdata=t.teal_min_noise_imgdata=t.dark_purple_min_noise_imgdata=t.purple_min_noise_imgdata=t.green_min_noise_imgdata=t.green_med_noise_imgdata=t.red_min_noise_imgdata=void 0;var d=e(0),n=void 0,r=void 0;t.red_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.6*Math.random(),e=.6+.4*Math.random(),d=.6+.4*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.green_med_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.5*Math.random(),e=.6+.5*Math.random(),d=.6+.5*Math.random();a.data[n]=.5*a.data[n+1]*t,a.data[n+1]=.99*a.data[n+2]*e,a.data[n+2]=.99*a.data[n]*d}return a},t.green_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.1*Math.random(),e=.6+.5*Math.random(),d=.6+.4*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.purple_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.5*Math.random(),e=.6+.2*Math.random(),d=.6+.8*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.dark_purple_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.5*Math.random(),e=.6+.5*Math.random(),d=.6+.5*Math.random();a.data[n]=.5*a.data[n]*t,a.data[n+1]=.3*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.teal_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.1*Math.random(),e=.6+.5*Math.random(),d=.6+.5*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.cosmic_imgdata=function(a){var t=0;for(n=0;n<a.data.length;n+=4)(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(0,r=30):t>49&&t<100?(100,r=90):(70,r=10),a.data[n]-void 0>255?a.data[n]-=void 0:a.data[n]+=void 0,a.data[n+1]+void 0>255?a.data[n+1]-=r:a.data[n+2]+=r;return a},t.blue_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.1*Math.random(),e=.6+.2*Math.random(),d=.6+.7*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.matrix2=function(a){var t;for(n=0;n<a.data.length;n+=4){(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(20,r=30):t>49&&t<100?(10,r=90):(70,r=10),a.data[n]-0>255?a.data[n]-=0:a.data[n]+=0,a.data[n+1]+0>255?a.data[n+1]-=r:a.data[n+1]+=r}return a},t.min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.4*Math.random(),e=.6+.4*Math.random(),d=.6+.4*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a},t.matrix_imgdata=function(a){var t;for(n=0;n<a.data.length;n+=4){(t=(0,d.getRandomNumber)(0,200))>0&&t<50?(20,r=30):t>49&&t<100?(10,r=90):(30,r=10),a.data[n]-void 0>255?a.data[n]-=void 0:a.data[n]+=void 0,a.data[n+1]+void 0>255?a.data[n+1]-=r:a.data[n+1]+=r}return a},t.pink_min_noise_imgdata=function(a){Math.random();for(n=0;n<a.data.length;n+=4){var t=.6+.6*Math.random(),e=.6+.1*Math.random(),d=.6+.4*Math.random();a.data[n]=.99*a.data[n]*t,a.data[n+1]=.99*a.data[n+1]*e,a.data[n+2]=.99*a.data[n+2]*d}return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rgbSplit=t.offset_blue_imgdata=t.offset_green_imgdata=t.extreme_offset_red=t.extreme_offset_green=t.extreme_offset_blue=t.extra_offset_red=t.extra_offset_green=t.extra_offset_blue=t.offset=void 0;e(0);var d=void 0;t.offset=function(a){for(var t=0;t<a.data.length;t+=4){a.data[t]=null==a.data[t+100]?0:a.data[t+20]}return a},t.extra_offset_blue=function(a){for(d=0;d<a.data.length;d+=4){a.data[d+2]=null==a.data[d+900]?0:a.data[d+60]}return a},t.extra_offset_green=function(a){for(d=0;d<a.data.length;d+=4){a.data[d+1]=null==a.data[d+900]?0:a.data[d+60]}return a},t.extra_offset_red=function(a){for(d=0;d<a.data.length;d+=4){a.data[d]=null==a.data[d+900]?0:a.data[d+60]}return a},t.extreme_offset_blue=function(a){for(d=0;d<a.data.length;d+=4){a.data[d+2]=null==a.data[d+4900]?0:a.data[d+140]}return a},t.extreme_offset_green=function(a){for(d=0;d<a.data.length;d+=4){a.data[d+1]=null==a.data[d+4900]?0:a.data[d+140]}return a},t.extreme_offset_red=function(a){for(d=0;d<a.data.length;d+=4){a.data[d]=null==a.data[d+4900]?0:a.data[d+140]}return a},t.offset_green_imgdata=function(a){for(d=0;d<a.data.length;d+=4){a.data[d+1]=null==a.data[d+100]?0:a.data[d+20]}return a},t.offset_blue_imgdata=function(a){for(d=0;d<a.data.length;d+=4){a.data[d+2]=null==a.data[d+100]?0:a.data[d+20]}return a},t.rgbSplit=function(a){for(d=0;d<a.data.length;d+=4)a.data[d-150]=a.data[d+0],a.data[d+500]=a.data[d+1],a.data[d-300]=a.data[d+2];return a}},function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.salt_and_pepper=t.white_specks=t.black_specks=t.specksredscale_imgdata=t.specks_imgdata=t.green_specks_imgdata=t.eclectic_imgdata=t.retroviolet_imgdata=t.yellow_casino_imgdata=t.casino_imgdata=void 0;var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n=e(0),r=void 0,o=void 0,i=void 0,g=function(a,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,o=void 0,i=void 0,g=void 0;if("object"===(void 0===t?"undefined":d(t)))t.hasOwnProperty("R")&&t.hasOwnProperty("G")&&t.hasOwnProperty("B")&&(o=t.R,i=t.G,g=t.B);else if("string"==typeof t){var _=t.replace("#","").trim();if(3===_.length){var l=/([a-f\d])([a-f\d])([a-f\d])$/i;_=_.replace(l,(function(a,t,e,d){return t+t+e+e+d+d}))}if(6===_.length){var m=/([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_);m&&(o=parseInt(m[1],16),i=parseInt(m[2],16),g=parseInt(m[3],16))}}if(void 0!==o&&void 0!==i&&void 0!==g){for(r=0;r<a.data.length;r+=4){var u=(0,n.getRandomNumber)(0,100);u>10&&u<e&&(a.data[r]=o,a.data[r+1]=i,a.data[r+2]=g)}return a}};t.casino_imgdata=function(a){var t=0;for(r=0;r<a.data.length;r+=4){(t=(0,n.getRandomNumber)(0,255))>255&&(t=0);var e=(a.data[r]+a.data[r+1]+a.data[r+2])/3;a.data[r]=e+t,a.data[r+1]=e+2,a.data[r+2]=e+5}return a},t.yellow_casino_imgdata=function(a){var t=0,e=0;for(r=0;r<a.data.length;r+=4){t=(0,n.getRandomNumber)(0,255),e=(0,n.getRandomNumber)(0,255),t>255&&(t=0);var d=(a.data[r]+a.data[r+1]+a.data[r+2])/3;a.data[r]=d+t,a.data[r+1]=d+e,a.data[r+2]=d+5}return a},t.retroviolet_imgdata=function(a){var t=0;for(r=0;r<a.data.length;r+=4){var e=0,d=0;(t=(0,n.getRandomNumber)(0,200))>0&&t<50?(e=20,d=30):t>49&&t<100?(e=20,d=90):(e=10,d=50),a.data[r]-e>255?a.data[r]-=e:a.data[r]+=e,a.data[r+2]+d>255?a.data[r+2]-=d:a.data[r+2]+=d}return a},t.eclectic_imgdata=function(a){var t=0;for(r=0;r<a.data.length;r+=4){(t=(0,n.getRandomNumber)(0,200))>0&&t<50?(o=20,i=30):t>49&&t<100?(o=10,i=90):(o=30,i=10),a.data[r]+0>255?a.data[r]-=0:a.data[r]+=0,a.data[r+1]+0>255?a.data[r+1]-=i:a.data[r]+=i}return a},t.green_specks_imgdata=function(a){var t;for(r=0;r<a.data.length;r+=4){(t=(0,n.getRandomNumber)(0,200))>0&&t<50?(o=20,i=30):t>49&&t<100?(o=10,i=90):(o=30,i=10),a.data[r]+=o,a.data[r+1]+=i,a.data[r+2]+=o}return a},t.specks_imgdata=function(a){var t=0,e=0;for(r=0;r<a.data.length;r+=4){r=(0,n.getRandomNumber)(0,a.data.length),t=(0,n.getRandomNumber)(0,255),e=(0,n.getRandomNumber)(0,255),(0,n.getRandomNumber)(0,255),t>255&&(t=0);var d=(a.data[r]+a.data[r+1]+a.data[r+2])/3;a.data[r]=d+t,a.data[r+1]=d+e,a.data[r+2]=d+5}return a},t.specksredscale_imgdata=function(a){for(r=0;r<a.data.length;r+=4){var t=(0,n.getRandomNumber)(0,100);t>10&&t<13&&(a.data[r]=120,a.data[r+1]=120,a.data[r+2]=120);var e=(a.data[r]+a.data[r+1]+a.data[r+2])/3;a.data[r]=e+100,a.data[r+1]=e+40,a.data[r+2]=e+20}return a},t.black_specks=function(a){return g(a,{R:0,G:0,B:0})},t.white_specks=function(a){return g(a,{R:255,G:255,B:255})},t.salt_and_pepper=function(a){return a=g(a,{R:255,G:255,B:255},30),a=g(a,{R:0,G:0,B:0},25)}}])}));