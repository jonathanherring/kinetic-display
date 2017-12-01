const fs = require ('fs')
const test = require ('ava')
const looksSame = require ('looks-same')
const sharp = require ('sharp')

    test.cb('should return true for similar images', (t) => {
        sharp()
        looksSame( './test/imgs/blank.png',  './test/imgs/blank.png', (error, equal) => {
            t.truthy(!error)
            t.truthy(equal)
            t.end();
        });
    });

    test.cb('should return true for different images', (t) => {
        looksSame(__dirname + '/test/imgs/offset.png', __dirname + '/test/imgs/blank.png', (error, equal) => {
            t.truthy(!error)
            t.falsy(equal)
            t.end();
        });
    });

    test.cb('should return true for similar images 100', (t) => {
        looksSame(__dirname + '/test/imgs/blank-100.png', __dirname + '/test/imgs/blank-100.png', (error, equal) => {
            t.truthy(!error)
            t.truthy(equal)
            t.end();
        });
    });

    test.cb('should return true for different images 100', (t) => {
        looksSame(__dirname + '/test/imgs/offset-100.png', __dirname + '/test/imgs/blank-100.png', (error, equal) => {
            t.truthy(!error)
            t.falsy(equal)
            t.end();
        });
    });

    test.cb('should return true for similar images 100 5t', (t) => {
        looksSame(__dirname + '/test/imgs/blank-100.png', __dirname + '/test/imgs/blank-100.png', {tolerance: 5}, (error, equal) => {
            t.truthy(!error)
            t.truthy(equal)
            t.end();
        });
    });

    test.cb('should return true for different images 100 5t', (t) => {
        looksSame(__dirname + '/test/imgs/offset-100.png', __dirname + '/test/imgs/blank-100.png', {tolerance: 5}, (error, equal) => {
            t.truthy(!error)
            t.falsy(equal)
            t.end();
        });
    });
    test.cb('should return true for similar images 100 10t', (t) => {
        looksSame(__dirname + '/test/imgs/blank-100.png', __dirname + '/test/imgs/blank-100.png', {tolerance: 10}, (error, equal) => {
            t.truthy(!error)
            t.truthy(equal)
            t.end();
        });
    });

    test.cb('should return true for different images 100 10t', (t) => {
        looksSame(__dirname + '/test/imgs/offset-100.png', __dirname + '/test/imgs/blank-100.png', {tolerance: 10}, (error, equal) => {
            t.truthy(!error)
            t.falsy(equal)
            t.end();
        });
    });

    // function sharpen(img){
    //     const srcStream = fs.createReadStream(img, 'utf8')
    //     const outStream = fs.createWriteStream(img.replace('.jpg', '.png'), 'utf8')
    //     const resizeStream = sharp()
    //         .resize(108,72)
    //         // .png()
    //     return srcStream
    //         .pipe(resizeStream)
    //         .pipe(outStream)
    // }

    // test.cb('resize image #1', (t) => {
    //     sharpen(__dirname + '/test/imgs/offset-100.png')
    //     .on('finish', () => {
    //         t.end()
    //     })
    // });
