var looksSame = require('looks-same');

looksSame('./test/imgs/offset.png', './test/imgs/blank.png', function(error, equal) {
    if (equal === false) {
        console.log('turn on that fan!')
    }
});