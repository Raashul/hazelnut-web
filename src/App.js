import React from 'react';
import './App.css';
import screen from './screens';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './auth';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={screen.Home} />
			<Route path="/landing" component={screen.Landing} />
			<Route path="/login" component={screen.Login} />
			<Route path="/resetpassword/:code" component={screen.NewPassword} />
			<Route path="/resetpassword" component={screen.ResetPassword} />
			<Route path="/referral/:email/:referCode" component={screen.ReferralLanding} />
			<Route path="/signup/:signupID" component={screen.Signup} />
			<PrivateRoute path="/dashboard" component={screen.Dashboard} />
			<PrivateRoute path="/setting" component={screen.Settings} />
			<Route path="/terms" component={screen.Terms} />
			<Route path="/privacy" component={screen.Privacy} />
			<Route path="/test" component={screen.Test} />
			<PrivateRoute path="/ocr" component={screen.OCR} />
			<Route path="*" component={screen.NotFound} />
		</Switch>
	);
}

export default App;
