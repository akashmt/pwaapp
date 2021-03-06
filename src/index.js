import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import App from './linksapp/App'
// import App from './leadsapp/App'
import * as serviceWorker from './app/utilities/serviceWorker'

const rootElement = document.getElementById('root')

let render = () => {
	ReactDOM.render(
		<App />,
	rootElement
	)
}

if (module.hot) {
	module.hot.accept('./App', () => {
		setTimeout(render)
	})
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
