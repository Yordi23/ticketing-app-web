import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
	console.log(currentUser);

	return <h1>Landing</h1>;
};

//Req is the request object, just like in express
LandingPage.getInitialProps = async (context) => {
	const client = buildClient(context);
	const { data } = client.get('/api/users/currentuser');

	return data;
};

export default LandingPage;
