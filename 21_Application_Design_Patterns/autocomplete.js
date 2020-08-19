// *******************
// Autocomplete Widget
// *******************

const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData
}) => {
  root.innerHTML = `
  <label><b>Search</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');

  const onInput = async event => {
    const items = await fetchData(event.target.value);

    if (!items.length) {
      deactivateDropdown();
      return;
    }

    resultsWrapper.innerHTML = '';
    activateDropdown();
    for (let item of items) {
      const option = document.createElement('a');

      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(item);
      option.addEventListener('click', () => {
        deactivateDropdown();
        input.value = inputValue(item);
        onOptionSelect(item);
      });

      resultsWrapper.appendChild(option);
    }
  };

  input.addEventListener('input', debounce(onInput, 500));

  document.addEventListener('click', event => {
    if (!root.contains(event.target)) {
      deactivateDropdown();
    }
  });

  const activateDropdown = () => dropdown.classList.add('is-active');
  const deactivateDropdown = () => dropdown.classList.remove('is-active');
};
