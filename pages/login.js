import Router from 'next/router'
import Link from 'next/link';
import template from '../static/template';
import { saveToken } from '../static/auth';
import {domain} from '../settings';
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.submitLogin = this.submitLogin.bind(this)

	}
	handleChange (evt) {
	  this.setState({ [evt.target.name]: evt.target.value });
	}
	submitLogin (evt) {
		//1. make sure no error
		//2. save user id to cookie
		evt.preventDefault()
		//Send form data to server
		//Copy of state
		const stateCopy = {...this.state}
		fetch(domain + '/login', {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify(stateCopy)
		})
		.then(response => response.json())
		.then((json) => {
			if (json['success']) {
				saveToken(JSON.stringify(json['token']['_id']))
				Router.push({pathname: '/dashboard'})
			} else {
				console.log(json['message'])
			}
		})

	}
	render() {
		return (
			<div className="signup-page">
			  <div className="form">
			  	  <div className="form-text">
				  Log in or sign up
				  </div>
				  <div className='marginBottomFive'>
				  </div>
				  <div>
				    <input className="input-field" onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="Email" /> 
				  </div>
				  <div>
				    <input className="input-field" onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Password"/>
				  </div>
				  <div className='marginBottomFive'>
				  </div>
				  <div className="button" onClick={this.submitLogin}>
		            <span className="button__mask" />
		            <span className="button__text">Log In</span>
		            <span className="button__text button__text--bis">Go</span>
		          </div>
			  </div>
			</div>
		)
	}
}

export default template(Login)