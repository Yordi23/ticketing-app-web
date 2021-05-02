import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
	return (
		<div>
			<Header currentUser={currentUser} />
			<Component {...pageProps} />
		</div>
	);
};

AppComponent.getInitialProps = async ({ Component, ctx }) => {
	const client = buildClient(ctx);
	const { data } = await client.get('/api/users/currentuser');

	let pageProps = {};
	if (Component.getInitialProps) {
		//Manually executes getInitialProps function from the page being rendered, this is because it does not
		//executes automatically after setting a getInitialProps function inside of a custom AppComponent like this
		pageProps = await Component.getInitialProps(ctx);
	}

	return {
		pageProps,
		currentUser: data.currentUser,
	};
};

export default AppComponent;
