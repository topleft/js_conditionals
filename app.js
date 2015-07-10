
// birth date (xx/xx/xx)
// postal code (xxxxx OR xxxxx-xxxx)
// state abbreviation (XX)
// married ("yes" or "no" or "YES" or "NO" or "Yes" or "No")


alert("ready");
function validatePhoneNumber(num) {
  if (num.charAt(3) === "-" &&
      num.charAt(7) === "-") {
        return alert("Thats a real phone number, thanks!");
      }
      else {return alert("Not a valid phone number.")}
};

var phoneNumber  = prompt("What is your phone number? Please enter in common format using dashes.");
validatePhoneNumber(phoneNumber);

function validateBirthDate(num) {
  if (num.charAt(2) === "/" &&
      num.charAt(5) === "/") {
        return alert("Thats a real birthdate, thanks!");
      }
      else {return alert("Not a valid birthdate.")}
};

var birthDate  = prompt("What is your birthday? Please use: xx/xx/xx");
validateBirthDate(birthDate);

function validatePostalCode(num) {
  if (num.length === 5) {
        return alert("Thats a real zip code, thanks!");
      }
  else if (num.charAt(5)=== "-" && num.length == 10) {
    return alert("Thats a real zip code, thanks!");
  }
      else {return alert("Not a valid zip code.")}
};

var zipCode = prompt("What is your zip code?");
validatePostalCode(zipCode);


function validateState(abv) {
  var test = /^[A-Z]{2}$/.test(abv);
  if (test) {
        return alert("Thats a real state, thanks!");
      }
  else {return alert("Not a valid state.")}
};

var state = prompt("What is your state abbreviation?");
validateState(state);

function validateStatus(answer) {
  answer = answer.toLowerCase()
  if (answer === "yes") {
        return alert("You're married! How's it going?");
      }
  else if (answer === "no") {
    return alert("You're not married! On the hunt?");
  }
      else {return alert("Not a valid answer. Too personal?")}
};

var answer = prompt("Are you married?");
validateStatus(answer);
