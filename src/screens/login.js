import React from 'react';
import styled from 'styled-components';
import SharedComponents from '../components/reuseable_components';
import bookPhone from '../assests/images/book_phone.png';
import { max_devices } from '../components/devices.js';
import * as api from '../api';
import { login } from '../auth';
import { AppButton, AppAlert } from '../components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
	widht: 100vw;

	@media ${max_devices.tablet} {
		flex-direction: column-reverse;
		align-items: center;
		height: auto;
	}
`;

const InfoContainer = styled.div`
	flex: 1 1;
	flex-basis: auto;
	width: 45%;
	display: flex;
	flex-direction: column;
	padding: 80px;

	@media ${max_devices.laptopM} {
		padding: 60px;
	}

	@media (max-width: 980px) {
		width: 50%;
	}

	@media ${max_devices.tablet} {
		width: 100%;
	}

	& > .mainTitle {
		font-size: 200%;
		margin-bottom: 40px;
	}
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;

	& > .emailInput {
		width: 50%;
		margin-bottom: 15px;

		:focus {
			border: 1px solid blue;
		}
	}

	& > .button {
		width: 65%;
	}
`;

const ImageContainer = styled.div`
	flex: 1 1;
	flex-basis: auto;
	width: 55%;
	background-color: #3e2689;
	background-image: url(${bookPhone});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 70% auto;

	@media ${max_devices.laptop} {
		background-size: 90% auto;
	}

	@media ${max_devices.tablet} {
		width: 100%;
		min-height: 400px;
		background-size: 50% auto;
	}
`;

const SingupText = styled.span`
	font-size: 70%;
	color: rgb(0, 0, 0, 0.4);
	font-family: "Avenir" & > a {
		font-size: 14px;
	}
`;

const Image = styled.img`
	width: 10%;
	height: auto;
	margin-bottom: 50px;
`;

class LoginAccountDiv extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			isLoading: false,
			error: {
				isError: false,
				msg: ''
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleClick(e) {
		let { email, password } = this.state;
		this.setState({ isLoading: true });
		api
			.login({ email, password })
			.then((res) => {
				console.log('res', res);
				this.setState({
					isLoading: false,
					isError: false,
					error: Object.assign({}, this.state.error, { msg: '' })
				});
				const { token } = res.data;
				login(token);
				this.props.history.push('/ocr');
			})
			.catch((error) => {
				this.setState({
					isError: true,
					isLoading: false,
					error: Object.assign({}, this.state.error, {
						msg: 'Invalid Password'
					})
				});
			});
	}

	render() {
		return (
			<Container>
				<InfoContainer>
					<div>
						<Image src={require('../assests/images/logoImage.png')} />
					</div>

					<SharedComponents.Title className="mainTitle" title="Login" />
					<FormContainer>
						{this.state.error.msg ? <AppAlert msg="Invalid email or password" /> : null}
						<SharedComponents.Input
							changeAction={this.handleChange}
							{...EmailProperties}
							type="email"
							name="email"
							className="emailInput"
						/>
						<SharedComponents.Input
							changeAction={this.handleChange}
							{...PasswordProperties}
							type="password"
							name="password"
							className="emailInput"
						/>
						<SharedComponents.Blurb
							onClick={(e) => this.props.history.push('/resetpassword')}
							text="Forgot password?"
							color="rgb(0,0,0,0.4)"
							size="80%"
							style={{
								marginBottom: '50px',
								marginTop: '-5px',
								cursor: 'pointer'
							}}
						/>

						<AppButton
							clickAction={(e) => this.handleClick(e)}
							isLoading={this.state.isLoading}
							color="#ffffff"
							background="#3E2689"
							text="Login"
							width="280px"
						/>
					</FormContainer>

					<SingupText>
						{' '}
						Don't have an account? <a href="/landing"> Get Early Access </a>
					</SingupText>
				</InfoContainer>
				<ImageContainer />
			</Container>
		);
	}
}

const EmailProperties = {
	placeholderColor: '#91969E',
	placeholderText: 'Enter your email ',
	color: '#F3F4F8'
};

const PasswordProperties = Object.assign({}, EmailProperties, {
	placeholderText: 'Enter your password'
});

export default LoginAccountDiv;
