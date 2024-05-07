const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

checkBtn.addEventListener('click', function () {
  const phoneNumber = userInput.value.trim();
  const phoneNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  const addResult = document.createElement('p');
  if (!phoneNumber) {
    alert('Please provide a phone number');
  } else if (phoneNumber.match(phoneNumberPattern)) {
    addResult.classList.add('result');
    addResult.textContent = `Valid US number: ${phoneNumber}`;
  } else {
    addResult.textContent = `Invalid US number: ${phoneNumber}`;
    addResult.classList.add('result');
    addResult.classList.add('red');
  }
  result.insertBefore(addResult, result.firstChild);
  result.classList.remove('hide');
  userInput.value = '';
});

clearBtn.addEventListener('click', () => {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
  result.classList.add('hide');
});
