import { HandleMood } from './logic/HandleMood';
import { Router } from './Router';
import './styles/style.css';
Router();
window.addEventListener('popstate', () => {
  Router();
});
window.addEventListener('push', () => {
  Router();
});
HandleMood();
