// let excerptBook = `Она несла в руках отвратительные, тревожные желтые цветы.
// Черт их знает, как их зовут, но они первые почему-то появляются в Москве.
// И эти цветы очень отчетливо выделялись на черном ее весеннем пальто.
// Она несла желтые цветы! Нехороший цвет.
// Она повернула с Тверской в переулок и тут обернулась. Ну, Тверскую вы знаете? По Тверской шли тысячи людей,
//  но я вам ручаюсь, что увидела она меня одного и поглядела не то что тревожно, а даже как будто болезненно.
// И меня поразила не столько ее красота, сколько необыкновенное, никем не виданное одиночество в глазах!
// Повинуясь этому желтому знаку, я тоже свернул в переулок и пошел по ее следам.
// Мы шли по кривому, скучному переулку безмолвно, я по одной стороне, а она по другой. И не было, вообразите, в переулке ни души.
// Я мучился, потому что мне показалось, что с нею необходимо говорить, и тревожился, что я не вымолвлю ни одного слова, а она уйдет,
//  и я никогда ее более не увижу...
// И, вообразите, внезапно заговорила она:
// - Нравятся ли вам мои цветы?
// Я отчетливо помню, как прозвучал ее голос, низкий довольно-таки, но со срывами, и, как это ни глупо, показалось, что эхо ударило в переулке
// и отразилось от желтой грязной стены.
// Я быстро перешел на ее сторону и, подходя к ней, ответил:
// - Нет.
// Она поглядела на меня удивленно, а я вдруг, и совершенно неожиданно, понял, что я всю жизнь любил именно эту женщину!`;

// class Handler {

//     excerptBook;

//     constructor(excerptBook) {
//         this.excerptBook = excerptBook;
//     }
    

//     methFunOne(excerptBook) {

//         const methodOne = this.excerptBook;

//         return "Number of words in this passage = " + methodOne.length;

//     }

//     methFunTo(excerptBook) {

//         const methodTo = this.excerptBook;
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

//         let  methodThre = this.excerptBook;

//         let chapter = methodThre.split(' ');

//         let countItems = {};

//         for (let item of chapter) {
//             countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
//           }

//           let result = Object.keys(countItems).filter((item) => countItems[item] > 1);
//           return "These are all the words that are repeated: " + result; 
    

//     }

//     methFunFoo(excerptBook) {
//         let methodFoo = this.excerptBook;

//         let arr = methodFoo.split(' ');

//         let arr2 = arr.splice



//         return arr2;
         

//     }

//     methFunFive(excerptBook) {
//         let methodFave = this.excerptBook;
//         let letter;
//         let arr = methodFave.split(letter);
//         let arr2 = arr.push(`  Отчего люди не летают?...
//         Я говорю, отчего люди не летают так, как птицы? Знаешь, мне
//         иногда кажется, что я птица. Когда стоишь на горе, так тебя и тянет лететь.
//         В от так бы разбежалась, подняла руки и полетела.`)
        

//         return arr;
        
//     }
// }

// const handlerss = new Handler() ;

// console.log()

const excerptBook = `Она несла в руках отвратительные, тревожные желтые цветы.
Черт их знает, как их зовут, но они первые почему-то появляются в Москве.
И эти цветы очень отчетливо выделялись на черном ее весеннем пальто.
Она несла желтые цветы! Нехороший цвет.
Она повернула с Тверской в переулок и тут обернулась. Ну, Тверскую вы знаете? По Тверской шли тысячи людей,
 но я вам ручаюсь, что увидела она меня одного и поглядела не то что тревожно, а даже как будто болезненно.
И меня поразила не столько ее красота, сколько необыкновенное, никем не виданное одиночество в глазах!
Повинуясь этому желтому знаку, я тоже свернул в переулок и пошел по ее следам.
Мы шли по кривому, скучному переулку безмолвно, я по одной стороне, а она по другой. И не было, вообразите, в переулке ни души.
Я мучился, потому что мне показалось, что с нею необходимо говорить, и тревожился, что я не вымолвлю ни одного слова, а она уйдет,
 и я никогда ее более не увижу...
И, вообразите, внезапно заговорила она:
- Нравятся ли вам мои цветы?
Я отчетливо помню, как прозвучал ее голос, низкий довольно-таки, но со срывами, и, как это ни глупо, показалось, что эхо ударило в переулке
и отразилось от желтой грязной стены.
Я быстро перешел на ее сторону и, подходя к ней, ответил:
- Нет.
Она поглядела на меня удивленно, а я вдруг, и совершенно неожиданно, понял, что я всю жизнь любил именно эту женщину!`;



 class Methods {

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

let method = new Methods();

console.log(method.methFunOne(excerptBook));
console.log(method.methFunTo(excerptBook));
console.log(method.methFunThree(excerptBook));
console.log(method.methFunFoo(excerptBook));
console.log(method.methFunFive(excerptBook));