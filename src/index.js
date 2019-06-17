import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MOUNT = document.getElementById('root') // or document.querySelector('#root')
// ReactDOM.render(<App />, document.getElementById('root'));
const renderApp = Comp => ReactDOM.render(Comp, MOUNT)

if (module.hot) {
  module.hot.accept('./Container', () => {
    // accept hot change request
    const NextApp = require('./Container').default
    renderApp(<NextApp />)
  })
}

renderApp(<Container />)

registerServiceWorker();
