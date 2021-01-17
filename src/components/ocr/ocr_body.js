import React from 'react';
import styled from 'styled-components';
import SharedComponents from '../reuseable_components';
import { AppButton } from '../../components';
import { min_devices, max_devices } from '../devices.js';
import checkMark from '../../assests/icons/greencheck.svg';
import * as api from '../../api';

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 5%;
`;

const Blurb = styled.span`
	opacity: 0.8;
	font-size: 16px;
	font-weight: 300;
	margin-bottom: 48px;

	@media ${max_devices.laptopM} {
		font-size: 95%;
	}

	@media (max-width: 1100px) {
		font-size: 110%;
		& > .break {
			display: none;
		}
	}

	@media (max-width: 400px) {
		font-size: 100%;
	}
`;

const Container = styled.div`
	width: 70%;
	border-left: ${(props) => (props.left ? '1px solid rgba(145,150,158,0.21)' : 'none')};
`;

const Content = styled.div`
	margin-left: ${(props) => props.margin.marginLeft};
	margin-top: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
	min-width: ${(props) => props.width.width};
	max-width: ${(props) => props.width.width};
	height: ${(props) => (props.height ? props.height.height : 'auto')} & > .text-highlight {
		margin-top: 3%;
		text-align: center;
		color: rgba(26, 26, 26, 0.6);
		font-size: 14px;
	}

	& > .ocr-blurb {
		color: rgba(26, 26, 26, 0.6);
		font-size: 14px;

		@media ${max_devices.tablet} {
			text-align: center;
		}
	}

	& > .text-center {
		text-align: center;
		display: flex;
		justify-content: center;
		align-item: center;
		align-content: center;
		color: rgba(26, 26, 26, 0.6);
		font-size: 14px;
	}
`;

const ImageContainer = styled.div`width: 100%;`;

const Image = styled.img`
	width: 100%;
	height: 340px;
`;

const HighlightColorContainer = styled.div`
	margin-top: 3%;
	margin-bottom: 10%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const ColorImage = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    background: ${(props) => props.background.color}
    margin-right: 2%; 
    display: flex;

    @media ${max_devices.tablet}{
        width: 20px;
        height: 20px;
        border-radius: 10px;
    }
`;

const GeneratedTextContainer = styled.div`
	height: auto;
	width: 100%;
	margin-top: 2%;
	display: flex;
	flex-direction: column;
	margin-bottom: 4%;
`;

const MainOcrTextContainer = styled.div`
	height: auto;
	display: flex;
	flex-direction: row;
	float: left;
	position: relative;
`;

const OcrTextContainer = styled.textarea`
	padding-left: 2%;
	padding-right: 2%;
	color: #1a1a1a;
	font-size: 78%;
	font-weight: 300;
	border: 1px solid rgba(145, 150, 158, 0.21);
	border-radius: 2px;
	height: 100px;
	min-width: 90%;
	max-width: 90%;

	@media ${max_devices.tablet} {
		max-height: 25vh;
		overflow-y: auto;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

const DragButton = styled.div`
    margin-left: 1%;
    border-radius: 2px;
    width: 20%;
    height: 30px;
    background-color: #F4F4F4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div{
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #91969E
        margin-top: 12%;
    }
`;

const ConfidenceText = styled.span`
	display: flex;
	justify-content: flex-end;
	margin-top: 2%;
	margin-right: 5%;
	color: rgba(26, 26, 26, 0.6);
	font-size: 78%;
	font-weight: 900;

	@media ${max_devices.tablet} {
		font-size: 12px;
		margin-right: 10%;
	}

	& > span {
		font-size: 14px;
		font-weight: 900;
		color: #55cc43;

		@media ${max_devices.tablet} {
			font-size: 12px;
		}
	}
`;

const ocrTextSelectedStyle = {
	backgroundColor: '#F6F9FF',
	border: '1px solid #417AFF'
};

const highlightButtonSelectedStyle = {
	border: '1px solid #295C10'
};

export default class OcrBody extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			highlightColor: [
				{ selected: false, color: '#9AF96B' },
				{ selected: true, color: '#F6EF72' },
				{ selected: false, color: '#F86B6B' },
				{ selected: false, color: '#F8AD6B' },
				{ selected: false, color: '#F86BE6' }
			],
			isFinalOcrTextVisible: false,
			ocrGeneratedText: [],
			isLoading: false
		};
		this.handleOcrTextPressed = this.handleOcrTextPressed.bind(this);
		this.handleHighlightColorClick = this.handleHighlightColorClick.bind(this);
	}

	//   handleInput(e) {
	//     // Reset field height
	//     e.target.style.height = "inherit";

	//     // Get the computed styles for the element
	//     const computed = window.getComputedStyle(e.target);

	//     // Calculate the height
	//     const height =
	//       parseInt(computed.getPropertyValue("border-top-width"), 10) +
	//       parseInt(computed.getPropertyValue("padding-top"), 10) +
	//       e.target.scrollHeight +
	//       parseInt(computed.getPropertyValue("padding-bottom"), 10) +
	//       parseInt(computed.getPropertyValue("border-bottom-width"), 10);

	//     e.target.style.height = `${height}px`;
	//   }

	handleOcrTextPressed = (i) => {
		let ocrText = [ ...this.state.ocrGeneratedText ];
		for (let i = 0; i < ocrText.length; i++) {
			if (ocrText[i].selected === false) {
				continue;
			} else {
				ocrText[i].selected = false;
				break;
			}
		}
		ocrText[i].selected = !ocrText[i].selected;
		this.setState({
			ocrGeneratedText: ocrText,
			displayDragButton: !this.state.displayDragButton,
			displayConfidenceLevel: !this.state.displayConfidenceLevel
		});
	};

	handleHighlightColorClick = (i) => {
		let hcolor = [ ...this.state.highlightColor ];
		for (let i = 0; i < hcolor.length; i++) {
			if (hcolor[i].selected === false) {
				continue;
			} else {
				hcolor[i].selected = false;
				break;
			}
		}
		hcolor[i].selected = !hcolor[i].selected;
		this.setState({ highlightColor: hcolor });
	};

	confirmOcr = () => {
		this.setState({
			isFinalOcrTextVisible: true,
			showSaveButton: true
		});
	};

	handleOcrScanning = () => {
		const { imageSrc } = this.props;
		this.setState({
			isFinalOcrTextVisible: false
		});
		const payload = {
			image_url: imageSrc
		};
		this.setState({ isLoading: true, ocrGeneratedText: [] });
		api
			.ocr(payload)
			.then((response) => {
				const { ocrResponse } = response.data;
				if (ocrResponse) {
					let ocrArr = [];
					ocrResponse.forEach((r) => {
						ocrArr.push({
							text: r.text,
							confidence: r.confidence,
							selected: false
						});
					});
					this.setState({ isLoading: false, ocrGeneratedText: ocrArr });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	saveOcr = () => {
		const { imageSrc } = this.props;
		const { ocrGeneratedText } = this.state;

		const lastIndex = imageSrc.lastIndexOf('ocr');
		const sub = imageSrc.substring(lastIndex);
		const subArr = sub.split('/');
		let finalText = '';
		ocrGeneratedText.forEach((ocr) => {
			if (ocr.text.length !== 0) {
				finalText += ocr.text + '/n/n';
			}
		});

		const payload = {
			content: finalText,
			type: 'text',
			bucket_id: subArr[1],
			post_id: subArr[2].split('.')[0]
		};
		this.setState({
			isLoading: true
		});
		api
			.saveOcr(payload)
			.then((res) => {
				alert('Post is saved in bucket.');
				this.setState({
					isLoading: false
				});
				this.componentDidMount();
			})
			.catch((err) => {
				this.setState({
					isLoading: false
				});
			});
	};

	// handleTextChange = (index, text) => {
	// 	const newText = this.state.ocrGeneratedText.filter();
	// 	this.setState({
	// 		ocrGeneratedText
	// 	});
	// };

	render() {
		const { highlightColor, ocrGeneratedText, isLoading, isFinalOcrTextVisible, showSaveButton } = this.state;
		console.log('showSaveButton', showSaveButton);
		return (
			<MainContainer>
				<Container>
					{this.props.imageSrc.length > 0 ? (
						<Content margin={{ marginLeft: '25%' }} width={{ width: '65%' }}>
							<ImageContainer>
								<Image src={this.props.imageSrc} />
							</ImageContainer>
							<SharedComponents.Blurb text={'Choose highlight color to scan'} className="text-highlight" />
							<HighlightColorContainer>
								{highlightColor.map((item, i) => {
									return (
										<ColorImage
											key={i}
											background={{ color: item.color }}
											onClick={() => this.handleHighlightColorClick(i)}
											style={highlightColor[i].selected ? highlightButtonSelectedStyle : null}
										>
											<img
												src={checkMark}
												style={{
													display: highlightColor[i].selected ? 'block' : 'none',
													width: 15,
													margin: 'auto'
												}}
											/>
										</ColorImage>
									);
								})}
							</HighlightColorContainer>
							<AppButton
								isLoading={isLoading}
								clickAction={this.handleOcrScanning}
								className="export-btn"
								color="#ffffff"
								fontSize="16px"
								background="#3E2689"
								text="Start Scanning"
								width="169px"
								height="50px"
								margin="0 auto"
								bold
							/>
						</Content>
					) : (
						<Content margin={{ marginLeft: '25%' }} width={{ width: '65%' }} height={{ height: '70vh' }}>
							<SharedComponents.Blurb
								text={'Test with an image to start scanning the content for your favorite text.'}
								className="text-center"
							/>
						</Content>
					)}
				</Container>
				<Container>
					{ocrGeneratedText.length > 0 && !isFinalOcrTextVisible ? (
						<Content margin={{ marginLeft: '5%' }} width={{ width: '80%' }}>
							<SharedComponents.Blurb onChange={"Here's what the OCR got from the image:"} className="ocr-blurb" />

							{ocrGeneratedText.map((item, i) => {
								return (
									<GeneratedTextContainer>
										<MainOcrTextContainer>
											<OcrTextContainer
												onChange={(e) => (item.text = e.target.value)}
												onClick={() => this.handleOcrTextPressed(i)}
												style={ocrGeneratedText[i].selected ? ocrTextSelectedStyle : null}
											>
												{item.text}
											</OcrTextContainer>
											{/* {ocrGeneratedText[i].selected ? (
                        <DragButton>
                          <div></div>
                          <div></div>
                          <div></div>
                        </DragButton>
                      ) : null} */}
										</MainOcrTextContainer>
										<ConfidenceText>
											{' '}
											Confidence Level - &nbsp; <span>{item.confidence} %</span>{' '}
										</ConfidenceText>

										{/* {ocrGeneratedText[i].selected ? (
                      <ConfidenceText>
                        {" "}
                        Confidence Level - <span>{item.confidence}</span>{" "}
                      </ConfidenceText>
                    ) : null} */}
									</GeneratedTextContainer>
								);
							})}
							<AppButton
								isLoading={isLoading}
								clickAction={this.confirmOcr}
								className="export-btn"
								color="#ffffff"
								fontSize="16px"
								background="#3E2689"
								text="Confirm"
								width="169px"
								height="50px"
								margin="0 auto"
								bold
							/>

							{/* <AppButton
                clickAction={e => this.handleClick(e)}
                className="export-btn"
                color="#ffffff"
                background="#3E2689"
                text="Export"
                width="208px"
                height="50px"
                margin="0 auto"
              /> */}
						</Content>
					) : (
						<Content margin={{ marginLeft: '5%' }} width={{ width: '80%' }} height={{ height: '70vh' }}>
							<SharedComponents.Blurb text={'Your scanned text will appear here'} className="text-center" />
						</Content>
					)}

					{isFinalOcrTextVisible ? (
						<div>
							{ocrGeneratedText.map((item, i) => {
								return (
									<span>
										<Blurb>{item.text}</Blurb> <br /> <br />
									</span>
								);
							})}
						</div>
					) : (
						<div />
					)}

					{showSaveButton ? (
						<AppButton
							isLoading={isLoading}
							clickAction={this.saveOcr}
							className="export-btn"
							color="#ffffff"
							fontSize="16px"
							background="#3E2689"
							text="Save"
							width="169px"
							height="50px"
							margin="0 auto"
							bold
						/>
					) : null}
				</Container>
			</MainContainer>
		);
	}
}
