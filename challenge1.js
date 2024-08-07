// function for showing  welcome message with gender
function showGender(name) {
    //defining the gender
    const gender = 'Miss';
    // Return the welcome message 
    return `You are so welcome ${gender} ${name}`;
};

//Calling the function
const outPut = showGender('negin');
console.log(outPut);




function showMessage(hour) {
    switch (true) {
        case (hour >= 0 && hour < 12):
            console.log('Good morning');
            break;
        case (hour >= 12 && hour < 17):
            console.log('Good afternoon');
            break;
        case (hour >= 17 && hour < 20):
            console.log('Good evining');
            break;
        case (hour >= 20 && hour <= 23):
            console.log(" Good night");
            break;
        default:
            console.log('Input not valid!');
    }
}

let currentHour = 12;
showMessage(currentHour);