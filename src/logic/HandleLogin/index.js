import Cookies from 'js-cookie';
import { Router } from '../../Router';

export const HandleLogin = async function (e) {
  e.preventDefault();
  const [email, password, button] = e.target;
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  const user = data.find((user) => user.email === email.value);
  if (user) {
    if (user.password === password.value) {
      const token = 'jwt wadf#adsg%lk%kj#klj##lj5';
      Cookies.set('token', token),
        history.pushState(null, null, '/home'),
        Router();
    } else {
      email.nextElementSibling.innerHTML = `'<span class="text-red-600">Email or password is wrong</span>`;
      password.nextElementSibling.innerHTML = `'<span class="text-red-600">Email or password is wrong</span>`;
    }
  } else {
    email.nextElementSibling.innerHTML = `'<span class="text-red-600">Email or password is wrong</span>`;
    password.nextElementSibling.innerHTML = `'<span class="text-red-600">Email or password is wrong</span>`;
  }
};

window.HandleLogin = HandleLogin;
