function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector('#player');

window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown' || e.key === 'Down' || e.key === 's') {
    const currentTop = extractPos(avatar.style.top);
    avatar.style.top = `${currentTop + 50}px`;
  } else if (e.key === 'ArrowUp' || e.key === 'Up' || e.key === 'w') {
    const currentTop = extractPos(avatar.style.top);
    avatar.style.top = `${currentTop - 50}px`;
  } else if (e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'd') {
    const currentLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currentLeft + 50}px`;
    avatar.style.transform = 'scale(1, 1)';
  } else if (e.key === 'ArrowLeft' || e.key === 'Left' || e.key === 'a') {
    const currentLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currentLeft - 50}px`;
    avatar.style.transform = 'scale(-1, 1)';
  }
});

const extractPos = pos => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};
