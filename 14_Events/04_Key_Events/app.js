const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
  console.log('Key Down');
});

input.addEventListener('keyup', function (e) {
  console.log('Key Up');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (!this.value) return;
    // add new item to list
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.append(newItem);
    this.value = '';
  }
});
