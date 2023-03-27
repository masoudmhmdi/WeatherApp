import { Router } from './Router';
import { Chart } from 'chart.js/auto';
import './styles/style.css';
Router();
window.addEventListener('popstate', () => {
  Router();
});
window.addEventListener('push', () => {
  Router();
});
