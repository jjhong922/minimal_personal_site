const h = require('preact').h;
const render = require('preact').render;
require('./style');
require('preact-material-components/Button/style.css');
const App = require('./components/app').default;

const root = document.getElementById("app");
render(<App />, root);
