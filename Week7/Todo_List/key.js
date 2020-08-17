
const readlineSync = require("readline-sync")

index = readlineSync.keyInSelect

frameworks = ['Express', 'hapi', 'flatiron', 'MEAN.JS', 'locomotive'];
index = readlineSync.keyInSelect(frameworks, 'Which framework?');
console.log(frameworks[index] + ' is enabled.');


function choose(){
   if(frameworks === 1) {
       console.log(frameworks)
   }
}

choose()