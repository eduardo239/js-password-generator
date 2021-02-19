const inpPassword = document.getElementById('result');
const btnCopy = document.getElementById('copy');
const pgMessageAlert = document.getElementById('pg-message-alert');

const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = inpPassword.value;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  pgMessageAlert.classList.remove('is-hidden');
  setTimeout((i) => {
    pgMessageAlert.classList.add('is-hidden');
  }, 2000);
};

btnCopy.addEventListener('click', copyToClipboard);
