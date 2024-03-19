const wrapper = document.querySelector('[data-wrapper]');

function handleAlignContent(event) {
  const targetBtn = event.target.closest('[data-direction]');
  if (!targetBtn) return;

  const direction = targetBtn.dataset.direction;

  if (direction === 'right') {
    wrapper.classList.add('aligned');
  } else if (direction === 'left') {
    wrapper.classList.remove('aligned');
  }
}

document.body.addEventListener('click', handleAlignContent);

