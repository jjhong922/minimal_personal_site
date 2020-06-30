import { h, render } from 'preact';
import './style';
import 'preact-material-components/Button/style.css';
import App from './components/app';

const root = document.getElementById("app");
render(<App />, root);
