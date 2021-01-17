import React from 'react';
import hazelnut from '../assests/icons/hazelnut.png';
import styled from 'styled-components';
import { max_devices } from './devices.js';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: false
		};
		this.nav_item = React.createRef;
	}

	showMenu = () => {
		this.setState({
			isToggleOn: !this.state.isToggleOn
		});
	};

	// Toggling button ends here.
	Container = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #ffffff;
		padding: 20px 150px;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 100;

		@media (max-width: 1024px) {
			padding: 20px 80px 0 50px;
		}

		@media ${max_devices.tablet} {
			flex-direction: column;
			align-items: flex-start;
		}
	`;

	ImageContainer = styled.a`
		width: 15%;
		height: auto;

		@media ${max_devices.laptop} {
			width: 20%;
		}
	`;

	Logo = styled.img`
		max-width: 100%;
		height: 20px;
		width: 133.33px;
	`;

	NavItemsContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		@media ${max_devices.tablet} {
			flex-direction: column;
			margin-left: 0;
			display: ${(props) => (props.toggle ? 'flex' : 'none')};
			width: 100%;
		}
	`;

	ToggleButton = styled.div`
		display: none;

		@media (max-width: 768px) {
			align-self: flex-end;
			display: initial;
			position: absolute;
			cursor: pointer;
			margin-left: 0;
		}
	`;

	NavItem = styled.span`
		color: #1a1a1a;
		font-size: 90%;
		margin: 0px 20px 0px 10px;

		@media (max-width: 870px) {
			align-self: flex-end;
			margin-top: 10px;
			margin-right: 0px;
		}

		& > a {
			color: #1a1a1a;
		}

		& > .button {
			border: 1px solid #3e2689;
			border-radius: 4px;
			padding: 8px 15px;
		}
	`;

	render() {
		return (
			<this.Container>
				<this.ImageContainer href="/">
					<this.Logo src={hazelnut} alt="Hazelnut logo" onClick={(e) => this.props.history.push('/')} />
				</this.ImageContainer>
				<this.ToggleButton onClick={this.showMenu} ref={this.nav_item}>
					<i className="fas fa-bars" />
				</this.ToggleButton>
				<this.NavItemsContainer toggle={this.state.isToggleOn}>
					<this.NavItem>
						<a href="/books"> Books for You </a>
					</this.NavItem>
					<this.NavItem>
						<a href="/privacy"> Privacy Policy </a>
					</this.NavItem>
					<this.NavItem>
						<a href="/terms"> Terms of Use </a>
					</this.NavItem>

					<this.NavItem>
						<this.NavItem>
							<a href="/ocr"> OCR </a>
						</this.NavItem>

						<this.NavItem>
							<a href="/dashboard"> Priority Access Dashboard </a>
						</this.NavItem>

						{/* <AppButton 
            clickAction = {() => this.router.push('/dashboard')}
            border = '1px solid #3e2689'
            className="button"
            background="#FFFFFF"
            color="#3E2689"
            text="Dashboard"
          /> */}
						{/* <SharedComponents.Button
              className="button"
              background="#FFFFFF"
              color="#3E2689"
              text="Get Early Access"
            /> */}
					</this.NavItem>
				</this.NavItemsContainer>
			</this.Container>
		);
	}
}

export default Nav;
