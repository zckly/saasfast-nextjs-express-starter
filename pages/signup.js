import Router from 'next/router'
import Link from 'next/link';
import template from '../static/template';
import Swal from 'sweetalert2/dist/sweetalert2.js'

class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			v_password: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.submitSignup = this.submitSignup.bind(this)

	}
	handleChange (evt) {
	  this.setState({ [evt.target.name]: evt.target.value });
	}
	submitSignup (evt) {
		evt.preventDefault()
		//Send form data to server
		//Copy of state
		const stateCopy = {...this.state}
		if (~stateCopy.username.length || ~stateCopy.password.length || ~stateCopy.v_password.length ) {
			Swal({
			  title: 'Darn',
			  text: 'Please fill out all the fields',
			  type: 'error',
			  confirmButtonText: 'Cool'
			})
		}

		if (stateCopy.password === stateCopy.v_password) {
			fetch(this.props.origin + '/register', {
			    headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
			    },
			    method: "POST",
			    body: JSON.stringify(stateCopy)
			})
			.then(response => response.json())
			.then((json) => json['success'] ? 
					Router.push({pathname: '/thankyou'}) : 
					Swal({
					  title: 'Shit',
					  text: json['message'],
					  type: 'error',
					  confirmButtonText: 'Cool'
					})
				)
		} else {
			Swal({
			  title: 'Darn',
			  text: 'Passwords dont match',
			  type: 'error',
			  confirmButtonText: 'Cool'
			})
		}
		
	}
	render() {
		return (
			<div className="signup-page">
			  <div className="form">
			  	  <div className="form-text">
				  Sign Up
				  </div>
				  <div className='marginBottomFive'>
				  </div>
				  <div>
				    <input className="input-field" onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="Email" /> 
				  </div>
				  <div>
				    <input className="input-field" onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Password"/>
				  </div>
				  <div>
				    <input className="input-field" onChange={this.handleChange} type="password" name="v_password" value={this.state.v_password} placeholder="Confirm password"/> 
				  </div>
				  <div className='checkbox-div'>
				    <label htmlFor="checkid"  style={{wordWrap:'break-word'}}>
			        	<input id='checkid' className="checkbox"  type="checkbox" value="test" />Only send emails about clothing alerts
			        </label>
				  </div>
				  <div className='marginBottomFive'>
				  </div>
				  <div className="button" onClick={this.submitSignup}>
		            <span className="button__mask" />
		            <span className="button__text">Sign Up</span>
		            <span className="button__text button__text--bis">Go</span>
		          </div>
			  </div>
			</div>
		)
	}
}

export default template(Signup)