import { HomePage } from '../screen/HomePage';
import { LoginPage } from '../screen/LoginPage';
import { RegisterPage } from '../screen/RegisterPage';

export const Router = () => {
  let body = document.body;
  body.innerHTML = '';
  switch (location.pathname) {
    case '/':
      body.innerHTML = LoginPage();
      break;
    case '/home':
      body.innerHTML = HomePage();
      break;

    case '/register':
      body.innerHTML = RegisterPage();
      break;
  }
};
