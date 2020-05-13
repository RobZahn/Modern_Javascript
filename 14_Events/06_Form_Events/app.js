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
  console.log('terms', termsCheckbox.value);
  console.log('veggieSelect', veggieSelect.value);
  console.log(e);
});
