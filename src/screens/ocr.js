import FormData from 'form-data';

import React, { Component } from 'react';
import styled from 'styled-components';
import OcrNav from '../components/ocr/ocr_nav';
import { UploadNewOcr } from '../components/ocr/ocr_uploadNew';
import OcrBody from '../components/ocr/ocr_body';
import { Spinner } from 'react-bootstrap';

import * as api from '../api';

const UploadNewContainer = styled.div`
	width: 100%;
	background-color: rgba(145, 150, 158, 0.1);
	border-bottom: 1px solid rgba(145, 150, 158, 0.21);
	border-top: 1px solid rgba(145, 150, 158, 0.21);
`;

const CardContainer = styled.div`
	width: 80%;
	margin-left: 8%;
	margin-right: 8%;
	display: flex;
	flex: 1;
	flex-direction: row;
	overflow: auto;
	justify-content: flex-start;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export default class OCR extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uploadedImageSrc: [],
			selectedImageSrc: '',

			isLoading: false
		};
		this.handleImageAdd = this.handleImageAdd.bind(this);
		this.handleUploadOcrSelect = this.handleUploadOcrSelect.bind(this);
	}

	componentDidMount() {
		api
			.getImagesForUser()
			.then((res) => {
				const imageUrls = [];
				res.data.images.forEach((image) => {
					imageUrls.push({ imageSrc: image.image_url });
				});
				this.setState({
					uploadedImageSrc: imageUrls,
					selectedImageSrc: imageUrls[0].imageSrc
				});
			})
			.catch((err) => {
				console.log('err', err);
			});
	}

	handleImageAdd(image) {
		this.setState({ isLoading: true });

		if (typeof image === 'undefined') {
			this.setState({ isLoading: false });
			return;
		}

		let formData = new FormData();
		formData.append('image', image);

		api
			.addImageToS3(formData)
			.then((response) => {
				this.setState({ isLoading: false });

				let src = response.data.image_url_for_ocr;
				var imageSrc = [ ...this.state.uploadedImageSrc ];
				imageSrc.push({ imageSrc: src, selected: false });
				this.setState({ uploadedImageSrc: imageSrc, selectedImageSrc: src });
			})
			.catch((err) => {
				this.setState({ isLoading: false });

				console.log(err);
			});
	}

	goto = (path) => {
		this.props.history.push(path);
	};

	handleSelectImage = (image_url) => {
		this.setState({
			selectedImageSrc: image_url
		});
	};

	handleUploadOcrSelect(index) {
		console.log('index', index);
		// let imageSrc = [ ...this.state.uploadedImageSrc ];
		// for (let i = 0; i < imageSrc.length; i++) {
		// 	if (imageSrc[i].selected === false) {
		// 		continue;
		// 	} else {
		// 		imageSrc[i].selected = false;
		// 		break;
		// 	}
		// }
		// imageSrc[index].selected = !imageSrc[index].selected;
		// this.setState({ uploadedImageSrc: imageSrc, selectedImageSrc: this.state.uploadedImageSrc[index].imageSrc });
	}

	render() {
		const { isLoading } = this.state;
		return (
			<div>
				<OcrNav goto={this.goto} />

				<UploadNewContainer>
					<CardContainer>
						<UploadNewOcr bold myInput={this.myInput} onImageAdd={this.handleImageAdd} />
						{this.state.uploadedImageSrc.map((image, i) => {
							const index = i + 1;
							return (
								<UploadNewOcr
									key={i}
									imageSrc={image.imageSrc}
									value={`Image ${index}`}
									selected={image.selected}
									index={i}
									selectImage={(image_url) => this.handleSelectImage(image_url)}
									// onSelect={(index) => this.handleUploadOcrSelect(index)}
								/>
							);
						})}
					</CardContainer>
				</UploadNewContainer>
				{isLoading ? (
					<center>
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					</center>
				) : null}

				<OcrBody
					imageSrc={this.state.selectedImageSrc}
					isLoading={isLoading}
					handleOcrScanning={this.handleOcrScanning}
				/>
			</div>
		);
	}
}
