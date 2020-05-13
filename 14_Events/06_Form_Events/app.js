// ****************
// preventDefault()
// ****************

// preventDefault() is a method on the event object that prevents the default
// behavior of the event. In the case of a form, it will prevent the form from
// sending a get request and refreshing the page.

const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function (e) {
  alert('Submitted Form');
  e.preventDefault();
  console.log('cc', creditCardInput.value);
  console.log('terms', termsCheckbox.checked);
  console.log('veggieSelect', veggieSelect.value);
});

// ***********
// Input Event
// ***********

// The input event type fires when the value of an input, select, or textarea
// element has been changed. This happens in real time and does not depend on
// a request being sent.

const formData = {};

creditCardInput.addEventListener('input', e => {
  console.log('CC Changed');
  formData['cc'] = e.target.value;
});

creditCardInput.addEventListener('input', e => {
  console.log('Veggie Changed');
  formData['veggie'] = e.target.value;
});
