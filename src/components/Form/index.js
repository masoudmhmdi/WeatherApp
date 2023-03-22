import { stringify } from 'postcss';

export const Form = (styles, id, submit, child) => {
  const form = document.createElement('form');
  form.id = id;
  form.classList = styles;
  form.innerHTML = child;
  form.addEventListener('submit', submit);
  console.log(toString(form));
  return toString(form);
};
