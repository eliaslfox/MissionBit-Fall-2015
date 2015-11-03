var fs = require("fs");
var path = require("path");

module.exports = function(callback) {
    fs.readFile(path.join(__dirname,"/../Data/nouns.txt"), function(err, nouns) {
        nouns = nouns+"";
        nouns = nouns.split("\n");
       fs.readFile(path.join(__dirname,"/../Data/adjectives.txt"), function(err, adjectives) {
           adjectives = adjectives+"";
           adjectives = adjectives.split("\n");
           noun1 = nouns[Math.floor( Math.random() * nouns.length )];
           adjective1 = adjectives[Math.floor( Math.random() * adjectives.length )];
           adjective2 = adjectives[Math.floor( Math.random() * adjectives.length )];
           callback(adjective1 + "-" + adjective2 + "-" + noun1);
       });
    });
};
