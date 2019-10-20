import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display:flex;
padding:0em;
padding-left:.4em;
height:auto;
width:100px;
flex-direction:column;
background: white;
color: white;
font-family:roboto;
p{
  text-align:left;
  font-size:12px;
  color:black;
  margin:0em;
  padding:0em;
  padding-left:.2em;
  z-index: 0;	
}
`

const DisplayWindowSize = (props) => {
	const [ width, setWidth ] = useState();
	const [ height, setHeight ] = useState();

	const updateWindowsDimensions = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', updateWindowsDimensions);
		return () => {
			window.removeEventListener('resize', updateWindowsDimensions);
		};
	});

    

	return (
		<Wrapper>
			<p>Height: {height} </p>
			<p>Width: {width} </p>
		</Wrapper>
	);
};

export default DisplayWindowSize; 
