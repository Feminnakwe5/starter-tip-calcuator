// TODO: Handle user input of initial bill value
// TODO: Handle user selection of the gratuity, both default and custom values
// TODO: Handle user input of number of people to split the bill between
// TODO: Handle calculation of tip per person and total bill per person
// TODO: Handle resetting the calculator
// TODO: Handle appropriate styling for gratuities
// -> If a pre-set gratuity is selected, it should appear active.
// -> If no a pre-set gratuity is selected, or the user is providing a custom tip,
//    the buttons should NOT have appear active
// TODO: Handle appropriate styling for reset btn
// -> If there has been no value calculated, the reset btn should not work
// -> If the tips have been calculated, the reset btn should work

// Note: The elements needed have been queried for you here
// ** Query elements
const bill = document.getElementById('bill');
const gratuityBtns = document.querySelectorAll('.gratuity');
const customGratuity = document.getElementById('custom-gratuity');
const people = document.getElementById('people');
const splitTip = document.getElementById('split-tip');
const splitTotal = document.getElementById('split-total');
const resetBtn = document.getElementById('reset');

// // ** Your work goes below here
let submitBtn = document.getElementById('submitBtn');
function getValue() {
  var billValue = document.getElementById('bill').value;
  if (billValue === '') {
    console.log('Invalid input, please enter a number');
  } else {
    console.log('The initial bill value is: $' + billValue);
  }

  const gratuityOption = document.querySelector(
    'input[name="gratuity"]:checked'
  ).value;

  const customGratuity = document.getElementById('customGratuity').value;

  let gratuityAmount;
  if (gratuityOption) {
    gratuityAmount = gratuityOption;
  } else {
    gratuityAmount = customGratuity;
  }

  const billAmount = 100;

  const peopleCount = document.getElementById('people-count').value;

  const splitTotal = document.getElementById('split-total');

  splitTotal.textContent = '$' + (billAmount / peopleCount).toFixed(2);
}

function calculateTipPerPerson(bill, tipPercent, numPeople) {
  return (bill * tipPercent) / numPeople;
}

function calculateTotalBillPerPerson(bill, tipPerPerson, numPeople) {
  return (bill + tipPerPerson) / numPeople;
}

let bill = 100;
let tipPercent = 0.15;
let numPeople = 4;

let tipPerPerson = calculateTipPerPerson(bill, tipPercent, numPeople);
console.log('Tip per person: ' + tipPerPerson);

let totalBillPerPerson = calculateTotalBillPerPerson(
  bill,
  tipPerPerson,
  numPeople
);
console.log('Total bill per person: ' + totalBillPerPerson);

let input = document.getElementById('input-field');
input.addEventListener('input', function () {
  resetButton.disabled = false;
});
resetButton.addEventListener('click', function () {
  resetButton.disabled = true;
});

const presetGratuities = [10, 15, 20];
let selectedGratuity = null;
let customGratuity = null;

const gratuityButtons = document.querySelectorAll('.gratuity-button');
const customGratuityInput = document.querySelector('.custom-gratuity-input');

const handleGratuitySelection = (e) => {
  selectedGratuity = e.target.innerText;
  customGratuity = null;
  gratuityButtons.forEach((button) => {
    if (button.innerText === selectedGratuity) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  customGratuityInput.classList.remove('active');
};

const handleCustomGratuity = (e) => {
  customGratuity = e.target.value;
  selectedGratuity = null;
  gratuityButtons.forEach((button) => {
    button.classList.remove('active');
  });
  customGratuityInput.classList.add('active');
};

gratuityButtons.forEach((button) => {
  button.addEventListener('click', handleGratuitySelection);
});
customGratuityInput.addEventListener('input', handleCustomGratuity);

let calculated = false;
const resetBtn = document.querySelector('.reset-btn');

const handleReset = () => {
  if (!calculated) {
    return;
  }

  calculated = false;
};

resetBtn.addEventListener('click', handleReset);
