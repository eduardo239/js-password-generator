const btn_generate = document.getElementById('generate');
const chk_upper = document.getElementById('upper');
const chk_lower = document.getElementById('lower');
const chk_number = document.getElementById('number');
const chk_punctuation = document.getElementById('punctuation');
const length_value = document.getElementById('length_value');
const length_input = document.getElementById('length_input');
let result = document.getElementById('result');

const update_range_value = () => {
  generate_password();
  length_value.innerHTML = length_input.value;
};
length_input.addEventListener('click', update_range_value);

const update_options = () => {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const number = '0123456789';
  const punctuation = '!@#$%&*-_';

  return `${chk_lower.checked ? lower : ''}${chk_number.checked ? number : ''}${
    chk_punctuation.checked ? punctuation : ''
  }${chk_upper.checked ? upper : ''}`;
};

const generate_password = () => {
  const length = length_input.value || 8;
  const charset = update_options();

  let password = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  result.value = password;
  return password;
};

btn_generate.addEventListener('click', generate_password);

update_range_value();
generate_password();
