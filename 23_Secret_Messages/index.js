const { hash } = window.location;
console.log(atob(hash.replace('#', '')));

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const messageInput = document.querySelector('#message-input');
  const encrypted = btoa(messageInput.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');
});
