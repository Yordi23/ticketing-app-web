import axios from 'axios';

const LandingPage = ({ currentUser }) => {
	console.log(currentUser);

	return <h1>Landing</h1>;
};

//Req is the request object, just like in express
LandingPage.getInitialProps = async ({ req }) => {
	let res;

	if (typeof window === 'undefined') {
		//Server
		res = await axios.get(
			'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
			{
				headers: req.headers,
			}
		);
	} else {
		//Browser
		res = await axios.get('/api/users/currentuser');
	}

	return res.data;
};

export default LandingPage;
