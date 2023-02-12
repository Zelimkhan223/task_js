import * as fs from 'node:fs/promises';
export default class Handler {
    excerptBook;
     

    methFunOne(excerptBook) {

        const methodOne = excerptBook;

        return "Number of words in this passage = " + methodOne.length;

    }

    methFunTo(excerptBook) {

        const methodTo = excerptBook;
        let counter = 0;
        for (let i  = 0; i < methodTo.length; i++) {

            if (methodTo[i] == '.' || methodTo[i] == ',' ||  methodTo[i] == '...' ||
                methodTo[i] == '!' || methodTo[i] == ':' || methodTo[i] == '?' || methodTo[i] == ';' ||
                methodTo[i] == '""' || methodTo[i] == '-' || methodTo[i] == '()') {
                counter++;
            }
        }

        return "Number of punctuation marks = " + counter;  
    }

    methFunThree(excerptBook) {

        let  methodThre = excerptBook;

        let chapter = methodThre.split(' ');

        let countItems = {};

        for (let item of chapter) {
            countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
          }

          let result = Object.keys(countItems).filter((item) => countItems[item] > 1);
          return "These are all the words that are repeated: " + result; 
    

    }

    methFunFoo(excerptBook) {
        let methodFoo = excerptBook;

        let arr = methodFoo.split(' ');

        let arr2 = arr.splice



        return arr2;
         

    }

    methFunFive(excerptBook) {
        let methodFave = excerptBook;
        let letter;
        let arr = methodFave.split(letter);
        let arr2 = arr.push(`  Отчего люди не летают?...
        Я говорю, отчего люди не летают так, как птицы? Знаешь, мне
        иногда кажется, что я птица. Когда стоишь на горе, так тебя и тянет лететь.
        В от так бы разбежалась, подняла руки и полетела.`)
        

        return arr;
        
    }
}





















































// export default class Handler {

    

//     methFunOne(excerptBook) {

//         const methodOne = excerptBook;

//         return "Number of words in this passage = " + methodOne.length;

//     }

//     methFunTo(excerptBook) {

//         const methodTo = excerptBook;
//         let counter = 0;
//         for (let i  = 0; i < methodTo.length; i++) {

//             if (methodTo[i] == '.' || methodTo[i] == ',' ||  methodTo[i] == '...' ||
//                 methodTo[i] == '!' || methodTo[i] == ':' || methodTo[i] == '?' || methodTo[i] == ';' ||
//                 methodTo[i] == '""' || methodTo[i] == '-' || methodTo[i] == '()') {
//                 counter++;
//             }
//         }

//         return "Number of punctuation marks = " + counter;  
//     }

//     methFunThree(excerptBook) {

//         let  methodThre = excerptBook;

//         let chapter = methodThre.split(' ');

//         let countItems = {};

//         for (let item of chapter) {
//             countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
//           }

//           let result = Object.keys(countItems).filter((item) => countItems[item] > 1);
//           return "These are all the words that are repeated: " + result; 
    

//     }

//     methFunFoo(excerptBook) {
//         let methodFoo = excerptBook;

//         let arr = methodFoo.split(' ');

//         let arr2 = arr.splice



//         return arr2;
         

//     }

//     methFunFive(excerptBook) {
//         let methodFave = excerptBook;
//         let letter;
//         let arr = methodFave.split(letter);
//         let arr2 = arr.push(`  Отчего люди не летают?...
//         Я говорю, отчего люди не летают так, как птицы? Знаешь, мне
//         иногда кажется, что я птица. Когда стоишь на горе, так тебя и тянет лететь.
//         В от так бы разбежалась, подняла руки и полетела.`)
        

//         return arr;
        
//     }
// }