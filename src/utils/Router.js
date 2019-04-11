import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import RecoverScreen from '../screens/Auth/RecoverScreen';

const Router = {
	home: {
		name: 'home',
		component: HomeScreen,
		path: '/',
		exact: true
	},
	login: {
		name: 'login',
		component: LoginScreen,
		path: '/auth/login'
	},
	register: {
		name: 'register',
		component: RegisterScreen,
		path: '/auth/register'
	},
	recover: {
		name: 'recover',
		component: RecoverScreen,
		path: '/auth/login'
	}
};

export const getBaseRoute = () => process.env.PUBLIC_URL;

export const getNames = () => Object.keys(Router);

export const mappingRoutes = (callback) => getNames().map((index, key) => callback(Router[index], key));

export const getItems = () => mappingRoutes(item => item);