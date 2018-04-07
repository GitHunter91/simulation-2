import React from 'react'
import { Switch as S, Route as R } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

const routes = 
<S>
    <R exact path= '/' component = { Dashboard }/>
    <R path= '/wizard' component = { Wizard }/>
</S>


export default routes;
