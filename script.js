// const lowercase = 'abcdefghijklmnopqrstuvwxyz';
// const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const digits = '0123456789';
// const punctuation = '!@#$%^&*()_+[]{}|;:,.<>?';

// const passwordLengthInput = document.getElementById('len');
// const generateButton = document.getElementById('generateButton');
// const generatedPasswordSpan = document.getElementById('generatedPassword');

// function generatePassword() {
//   const passwordLength = parseInt(passwordLengthInput.value);

//   let characters = [];
//   characters = characters.concat(Array.from(lowercase));
//   characters = characters.concat(Array.from(uppercase));
//   characters = characters.concat(Array.from(digits));
//   characters = characters.concat(Array.from(punctuation));

//   for (let i = characters.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [characters[i], characters[j]] = [characters[j], characters[i]];
//   }

//   const generatedPassword = characters.slice(0, passwordLength).join('');
//   generatedPasswordSpan.textContent = generatedPassword;
// }

// generateButton.addEventListener('click', generatePassword);


// document.querySelector('form').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent form submission
//   generatePassword();
// });


const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';
const punctuation = '!@#$%^&*()_+[]{}|;:,.<>?';

const passwordLengthInput = document.getElementById('len');
const generateButton = document.getElementById('generateButton');
const generatedPasswordSpan = document.getElementById('generatedPassword');

function generatePassword() {
  const passwordLength = parseInt(passwordLengthInput.value);

  // Check if passwordLength is a valid number
  if (isNaN(passwordLength) || passwordLength <= 0) {
    alert('Please enter a valid positive number for the password length.');
    return;
  }

  let characters = [];
  characters = characters.concat(Array.from(lowercase));
  characters = characters.concat(Array.from(uppercase));
  characters = characters.concat(Array.from(digits));
  characters = characters.concat(Array.from(punctuation));

  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  const generatedPassword = characters.slice(0, passwordLength).join('');
  generatedPasswordSpan.textContent = generatedPassword;
}

generateButton.addEventListener('click', generatePassword);

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  generatePassword();
});


function copyPassword() {
  const passwordSpan = document.getElementById('generatedPassword');
  const generatedPassword = passwordSpan.textContent;

  if (generatedPassword) {
    // Use the newer Clipboard API if available, otherwise fallback to document.execCommand
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generatedPassword)
        .then(() => alert('Password copied to clipboard!'))
        .catch(err => console.error('Unable to copy to clipboard', err));
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = generatedPassword;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Password copied to clipboard!');
    }
  } else {
    alert('Generate a password first before copying!');
  }
}