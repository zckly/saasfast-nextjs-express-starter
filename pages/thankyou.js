//need auth to get to this page
import Link from 'next/link'
import SecureTemplate from '../static/secure-template';
class ThankYou extends React.Component {
	render() {
		return (
			<div className='home-page'>
				<div className="text-section home-text">
				<h1>Thanks for signing up!</h1>
				<h4>If you'd like to start adding items to monitor, head over to your <Link href="/dashboard"><a>dashboard</a></Link></h4>
				</div>
			</div>
		)
	}
}

export default SecureTemplate(ThankYou);