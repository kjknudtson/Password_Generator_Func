// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  
  password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate password
function generatePassword() {
  // Get variable for password length
  var passwordLength = prompt("How long does your password need to be? (Minimum: 8 Maximum 128)");

  // If/else statement to guarantee that number chosen is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {

      alert("Password must be at least 8 characters and at most 128!");

      return password = "Try Again!";

  } else {
      
      
  
    // Getting boolean variable to determine if user wants to include lower case letters
      var wantLowerCase = confirm("Do you want to use lower case letters?");

    

    // Getting boolean variable to determine if user wants to include upper case letters
      var wantUpperCase = confirm("Do you want to use upper case letters?");

   

    // Getting boolean variable to determine if user wants to include numbers
      var wantNumbers = confirm("Do you want to use numbers?");

    

    // Getting boolean variable to determine if user wants to include symbols
      var wantSymbols = confirm("Do you want to use Symbols?");

    
    // Array of all lower case letters
      var choicesJustLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Array of all upper case letters
      var choicesJustUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // Array of all numbers
      var choicesJustNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // Array of symbols
      var choicesJustSymbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '`', '{', '|', '}', '~'];

    // Variable for random number from 1 to 5  
      var randomAmount = (Math.floor(Math.random() * 5));

    // Variable for max length for password
      var maxLength = 130;
    
    // Variable for empty array that will house randomly picked items from the other previous four array
      var password = [];
      
    
    // Function description to add random amount of user desired criteria
    function addRandomItem(randomAmount, wantItem, choicesArray, password) {
        for (i = 0; i < randomAmount; i++){

           
                if (wantItem){
                    var randomItem = [choicesArray[Math.floor(Math.random() * choicesArray.length)]];
                    password = password.concat(randomItem);
    
                }
    
            }

    } 


    
    // Process to add random amounts of lower/upper/numbers/symbols to empty array depending on users preferences
    
    while (password.length < maxLength){

        addRandomItem(randomAmount, wantLowerCase, choicesJustLower, password);

        addRandomItem(randomAmount, wantUpperCase, choicesJustUpper, password);

        addRandomItem(randomAmount, wantNumbers, choicesJustNumbers, password);
        
        addRandomItem(randomAmount, wantSymbols, choicesJustSymbols, password);    

        

      

    }
    
    
    function checkforItem(wantItem, password, choicesArray) {

        if (wantItem){

            var foundItem = password.some(r=> choicesArray.includes(r));

            if (foundItem) {

                password = password;

            } else {

                var randomItem = [choicesArray[Math.floor(Math.random() * choicesArray.length)]];

                password = password.concat(randomItem);

            }
        }


    }
       
      
      // Function to trim final array to user's desired length while checking to make sure it contains at least one of each category the user requested
    while (password.length > passwordLength) {

        // Removes one random item from the final array
        password.splice(Math.floor(Math.random()*password.length), 1);

        
        checkforItem(wantLowerCase, password, choicesJustLower);

        checkforItem(wantUpperCase, password, choicesJustUpper);

        checkforItem(wantNumbers, password, choicesJustNumbers);

        checkforItem(wantSymbols, password, choicesJustSymbols);  
        
        

       
       
      } 
      
        


      // Function to shuffle final array after having verified that length is correct and at least one of each category chosen is present
      // Fisher-Yates shuffle algorithm
      for (let i = password.length - 1; i > 10; i--) {

        let j = Math.floor(Math.random() * (i + 1));
    
        [password[i], password[j]] = [password[j], password[i]];
    
      }

      

      console.log(password);


      // Convert array to string
      password = password.join('');

      console.log(password);

      //
      return password;
    }
}
























// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
