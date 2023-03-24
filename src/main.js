import { GetData } from './logic/GetData';
import { Router } from './Router';
import { HomePage } from './screen/HomePage';
import './styles/style.css';
Router();
window.addEventListener('popstate', () => {
  Router();
});
window.addEventListener('push', () => {
  Router();
});
