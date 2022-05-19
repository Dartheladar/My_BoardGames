const data = require('./My_Boardgames.json');
console.log(data);

data.push("Borderlands");  //add as last
console.log(data);

const fs = require('fs');

fs.writeFile ("./My_Boardgames.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
