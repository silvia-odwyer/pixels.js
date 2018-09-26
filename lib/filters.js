let addition1, addition2, addition;

const warmth = function (imgData) {
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] + 10
        imgData.data[i + 1] = imgData.data[i + 1] + 18
    }
    return imgData;
}

const cosmic_imgdata = (imgData) => {
    let randomNumber = 0;
    for (let i = 0; i < imgData.data.length; i += 4) {
        randomNumber = getRandomNumber(0, 200);
        if (randomNumber > 0 && randomNumber < 50) {
            addition1 = 0;
            addition2 = 30;
        }
        else if (randomNumber > 49 && randomNumber < 100) {
            addition1 = 100;
            addition2 = 90;
        }

        else {
            addition1 = 70;
            addition2 = 10;
        }

        if (imgData.data[i] - addition > 255) {
            imgData.data[i] -= addition
        }
        else {
            imgData.data[i] += addition
        }

        if (imgData.data[i + 1] + addition > 255) {
            imgData.data[i + 1] -= addition2;
        } else {
            imgData.data[i + 2] += addition2;
        }
    }
    return imgData;
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { warmth, cosmic_imgdata };