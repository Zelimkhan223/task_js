import * as fs from 'node:fs'

fs.readFile('text.txt', 'utf8', function(err, data){
      
    console.log(data);
});
  
console.log('readFile called');