import React from 'react';
import Styled from 'styled-components'

const PhotoCard = (props) => {
		// //console.log(`Just before render in PhotoCard ${props.withBalloon}`)
	// const [showBalloon ] = useState(props.withBalloon);
	if (props.url === 'Url Required')
	{
	return (
		<ImageContainer>
		<p className ='errortext'>PhotoCard requires 
		props:url</p>
		</ImageContainer>
	)
	}
	
	return(
	
	<ImageContainer>
			<img className = 'imageClass' src={props.url} alt={props.url}  width = {props.width} height= {props.height}/>  
	</ImageContainer>
		
		
	);
};

PhotoCard.defaultProps ={
 width:'200px',
 height:'200px',
//  caption: `Error!!! /n require props: caption, url, desc`,
 url:'Url Required',
//  desc:'desc required!'
}

const ImageContainer = Styled.div`
		/* display: flex;
		align-items: center;
		flex-direction: column;
		margin: auto;
		padding:1em;
		margin: 1em;
		background:lightblue; */

		.imageClass img{
			border-radius:15px;
		}
		
	    .imageClass{
			border-radius: 10px;
			box-shadow: .5em .5em 1em rgba(12, 12, 12, .5);
			/* margin-bottom: 1em; */
			 padding:10%;
			background:white;
			margin: 0 1em;

		}

		.errortext{
			text-align:center;
			font-size:2em;
			color:red;
		}
	`;

	export default PhotoCard;
	
