import React from 'react'
import { SizeButton } from '../components'
import styled from 'styled-components'

 function InfoSheet(props) {
    const Wrapper = styled.div`
    h3, h4, p{
        margin:.2em;
        padding:0em;
    }
    `

     const Inline = styled.div`
     display:flex;
     width:auto;
     justify-item:center;
     margin:0px;
     padding:0px;
     `
	// console.log("Info Sheet Props", props);
	let data;
	if (props.id) {
		data = props.data.find((ele) => ele.id.toString() === props.id);
		// console.log('In InfoSheet Data... heres the data to play with', data)
		return (
			<Wrapper>
					<h3>Info Sheet</h3>
					<h4>Order Code: {data.id}</h4>
					<h4>Description {data.caption} </h4>
					<p>{data.desc}</p>
					<h4>Price: ${data.price}.00</h4>
					<h4>Material:</h4>
					<p>{data.material}</p>
					<h4>Style: {data.style} </h4>
                <Inline>
				<h4>Size:</h4>
                <SizeButton/>
                </Inline>
			</Wrapper>
		);
	} else {
		return (
			<div >
				<div >
					<h1>Info Sheet</h1>
					<h4>Order Code: </h4>
					<h4>Description </h4>
					{/* <p>{data.desc}</p> */}
					<h4>Price: </h4>
					<h4>Material</h4>
					<h4>Measurements</h4>
				</div>
                <Inline>
				<h4>size:</h4>
                <SizeButton/>
                </Inline>
			</div>
		);
	}
}

export default InfoSheet;