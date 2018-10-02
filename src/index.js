import './index.css';
import sum from './first';

const a = 'init';
const b = 1;
const c = sum(2, 4);
const root = document.getElementById('root');

root.innerHTML = `
  <div>
    Carambolas quadradas never die
  </di>
`;

export { a, b, c };
