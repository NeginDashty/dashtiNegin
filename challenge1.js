// // function for showing  welcome message with gender
// function showGender(name) {
//     //defining the gender
//     const gender = 'Miss';
//     // Return the welcome message 
//     return `You are so welcome ${gender} ${name}`;
// };

// //Calling the function
// const outPut = showGender('negin');
// console.log(outPut);




// function showMessage(hour) {
//     switch (true) {
//         case (hour >= 0 && hour < 12):
//             console.log('Good morning');
//             break;
//         case (hour >= 12 && hour < 17):
//             console.log('Good afternoon');
//             break;
//         case (hour >= 17 && hour < 20):
//             console.log('Good evining');
//             break;
//         case (hour >= 20 && hour <= 23):
//             console.log(' Good night');
//             break;
//         default:
//             console.log('Input not valid!');
//     }
// }

// let currentHour = 12;
// showMessage(currentHour);




// function numberCheck() {
//     for (let i = 0; i <= 10; i++) {
//         if (i % 2 == 0) {
//             console.log(`The number ${i} is even`);
//         } else {
//             console.log(`The number${i} is odd`);
//         }
//     };


// };
// numberCheck();


// function oddOrEven(start, end) {
//     for (let num = start; num <= end; num++) {
//         if (num % 2 === 0) {
//             console.log(num + ' is Even');
//         } else {
//             console.log(num + ' is Odd');
//         }
//     }
// }

// oddOrEven(1, 5);



// for (let i = 0; i < 6; i++) {
//     let row = ' ';
//     for (let j = 0; j < 6; j++) {
//         row += "*";

//     }
//     console.log(row);

// };


for (let i = 0; i < 7; i++) { //    ردیف‌ها
    let row = ''; //   رشته خالی برای هر فاصله

    for (let j = 0; j < 12; j++) { //   ستون‌ها

        if (
            (i === 0 && j >= 3 && j <= 7) || //ردیف اول
            (i === 6 && j >= 3 && j <= 7) || //ردیف اخر

            (j === 0 && i >= 1 && i <= 5) || // شرط برای چاپ ستاره در اولین ستون  ردیف ۲تا۵
            (j === 10 && i >= 1 && i <= 5) || // شرط برای چاپ ستاره در آخرین ستون ردیف ۲تا ۵

            (i === 2 && (j === 3 || j === 5 || j === 7)) || // شرط برای چاپ ستاره‌های ردیف سوم 3,5,7 چون فاصله دارن بینشون
            (i === 3 && j === 5) || // شرط برای چاپ ستاره در ردیف چهارم (در ستون ۶)
            (i === 4 && j >= 4 && j <= 6) // شرط برای چاپ ستاره‌های ردیف پنجم (در ستون‌های ۴، ۵، ۶)
        ) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}



// const testing = ['first', 'second', 'third'];
// console.log(testing.join('*'));

// const secondArray = ['a,b,c'];
// console.log(secondArray.split(','));



// "Hello" after 2 seconds
function Hello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello');
        }, 2000);
    });
}

//   "Goodbye" after 1 second
function Goodbye() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Goodbye');
        }, 1000);
    });
}

//  "End of message" after 3 seconds
function EndMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('End of message');
        }, 3000);
    });
}

// Chain the promises together
Hello().then((message1) => {
    console.log(message1);
    return Goodbye();
}).then((message2) => {
    console.log(message2);
    return EndMessage();
}).then((message3) => {
    console.log(message3);
}).catch(() => {
    console.log('Error');
});