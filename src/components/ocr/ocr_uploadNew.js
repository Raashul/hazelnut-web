import React, { Component } from 'react';
import styled from 'styled-components';
import plus from '../../assests/icons/plus.svg';

const MainContainer = styled.div`
	min-width: 80px;
	max-width: 80px;
	margin-top: 2%;
	margin-bottom: 1.5%;
	margin-right: 2%;
	display: flex;
	flex-direction: column;
`;

const Container = styled.div`
	background-color: #fafafa;
	border-radius: 8px;
	border: 0.75px solid rgba(145, 150, 158, 0.2);
	height: 100px;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}
`;

const ImageContainer = styled.div`width: 100%;`;

const Image = styled.img`
	width: 100%;
	height: 60px;
`;

const ImageDescription = styled.span`
	margin-top: 10%;
	font-size: 11px;
	color: rgba(145, 150, 158, 1);
	font-weight: ${(props) => (props.primary ? 900 : 500)};
`;

const cardBorder = {
	border: '1px solid #417AFF',
	boxShadow: '0 2px 8px -2px rgba(0,0,0,0.4)'
};

export class UploadNewOcr extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: {}
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		var files = e.target.files;
		const image = files[0];

		this.props.onImageAdd(image);
	}

	onUploadedOcrSelected(i) {
		if (this.props.onSelect) {
			this.props.onSelect(i);
		}
	}

	handleImageClick = (image_url) => {
		if (this.props.imageSrc) {
			this.props.selectImage(image_url);
		} else {
			this.myInput.click();
		}
	};

	render() {
		return (
			<MainContainer>
				<Container style={this.props.selected ? cardBorder : null}>
					<input
						onChange={this.onChange}
						id="myInput"
						name={this.state.file}
						type="file"
						ref={(ref) => (this.myInput = ref)}
						style={{ display: 'none' }}
					/>

					{this.props.imageSrc ? (
						<ImageContainer onClick={() => this.handleImageClick(this.props.imageSrc)}>
							<Image src={this.props.imageSrc} />
						</ImageContainer>
					) : (
						<img
							onClick={() => this.handleImageClick()}
							align="center"
							valign="center"
							src={require('../../assests/icons/upload_new.svg')}
						/>
					)}
				</Container>

				{this.props.bold ? (
					<ImageDescription primary>Upload New</ImageDescription>
				) : (
					<ImageDescription>{this.props.value}</ImageDescription>
				)}
			</MainContainer>
		);
	}
}

// const UploadNewOcr = (props) => {
//     return(

//     );
// }

// export default UploadNewOcr;
