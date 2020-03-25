import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SliderStyle.css';
import styled from "styled-components"

const fadeProperties = {
	duration: 3000,
	transitionDuration: 500,
	indicators: true,
	arrows: false
};

const Slideshow = props => {
	return (
		<Container screensize={props.screensize}>
			<Fade {...fadeProperties}>
				{props.images.map(image => (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
						className='each-fade'
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
							className='image-container'
						>
							<img src={image}/>
						</div>
					</div>
				))}
			</Fade>
		</Container>
	);
};

const Container = styled.div`
	width: ${props => props.screensize === "MobilePortrait" ? "80%" : "50%"};
	padding: 5% 0;
	align-items: center;
	margin: 0;
`

export default Slideshow;
