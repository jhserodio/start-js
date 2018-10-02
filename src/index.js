import sum from './first';
import './index.css';

const a = 'init';
const b = 1;
const c = sum(2, 4);
const root = document.getElementById('root');

root.innerHTML = `
  <div class="carambolas">
    Carambolas quadradas never DIE
  </di>
`;

export { a, b, c };
