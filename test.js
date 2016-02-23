var fs = require('fs');
fs.open(__dirname + '/assets/wordlist.js', 'r', function(err, fd) {
    fs.fstat(fd, function(err, stats) {
        var bufferSize=stats.size,
            chunkSize=512,
            buffer=new Buffer(512),
            bytesRead = 0;

        console.log(stats);
        longestLine = 22;

        var min = 0;
        var max = 662270;

        fs.read(fd, buffer, 0, longestLine, getRandomArbitrary(min, max));

//662277,
        words = buffer.toString('utf8', 0, longestLine);
        console.log(words.split(''));
        console.log(words.indexOf('\n'));
        //console.log(words.split("\n"));

        fs.close(fd);
    });
});


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
