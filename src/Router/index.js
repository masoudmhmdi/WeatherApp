import Cookies from 'js-cookie';
import { Result } from 'postcss';
import { HandleMood } from '../logic/HandleMood';
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
      HandleMood();
      break;
    case '/home':
      HomePage();

      break;

    case '/register':
      body.innerHTML = RegisterPage();
      HandleMood();
      break;
    default: {
      body.innerHTML = 'page not found | 404';
    }
  }
};
