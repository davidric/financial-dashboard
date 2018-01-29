import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main'; 
import Home from './components/Home'; 
import MyTasks from './components/MyTasks';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="/mytasks" component={MyTasks}></Route>
		</Route>
	</Router>
)

render(router, document.getElementById('root'));