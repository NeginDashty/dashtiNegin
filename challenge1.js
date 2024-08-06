//function for showing  welcome message with gender
function showGender(name) {
    //defining the gender
    const gender = 'Miss';
    // Return the welcome message 
    return `You are so welcome ${gender} ${name}`;
};
//Calling the function
const outPut = showGender('negin');
console.log(outPut);