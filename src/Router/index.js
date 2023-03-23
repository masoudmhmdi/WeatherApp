import Cookies from 'js-cookie';
import { HomePage } from '../screen/HomePage';
import { LoginPage } from '../screen/LoginPage';
import { RegisterPage } from '../screen/RegisterPage';

export const Router = () => {
  const isPrivate = (callBack) => {
    if (Cookies.get('token')) {
      return callBack();
    } else {
      return "you don't have access to this page!";
    }
  };

  let body = document.body;
  body.innerHTML = '';
  switch (location.pathname) {
    case '/':
      body.innerHTML = LoginPage();
      break;
    case '/home':
      body.innerHTML = isPrivate(HomePage);
      break;

    case '/register':
      body.innerHTML = RegisterPage();
      break;
    default: {
      body.innerHTML = 'page not found | 404';
    }
  }
};
