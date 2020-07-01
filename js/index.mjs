const h = require('preact').h;
const render = require('preact').render;
import './style';
import 'preact-material-components/Button/style.css';
import App from './components/app';

const root = document.getElementById("app");
render(<App />, root);
