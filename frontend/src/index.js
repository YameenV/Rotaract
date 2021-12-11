import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Router from './routes'
import Layout from './layout'
const App = () =>{
 return(
<div>
  <Layout>
  <BrowserRouter>
  <Router/>
  </BrowserRouter>
  </Layout>
</div>
 )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

