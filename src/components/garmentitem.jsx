import React, {useState} from 'react'
import styled from 'styled-components'

const MenuItem = (props) => {
	// console.log('In GarmentItem', props.name);
	const [ caption ] = useState(props.caption);
    const [active] = useState(props.active) 
	
	return (
		<Item onClick={(e) => props.onClick(caption, active, e)} active={active} >
			<CaptionStyle>{caption}</CaptionStyle>
			<QtyStyle> Styles ({props.qty})</QtyStyle>
		</Item>
	);
};

const Item = styled.div`
display:flex;
width:100%;
padding-bottom:.5em;
padding-left:.5em;

    /* @media(min-width: 1030px){
    display: flex;
    max-width: 20em;
    width: 100%;
    padding: 0 1em;
    border-radius: .5em;
    &:hover{
        color: white;
        background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    };
    &:active{
        ${props => props.active ? `color:green` : `color:red`} ; 
        ${props => props.active ? `background-image :linear-gradient(to top #09203f 0% #537895 100%)` : `background-image:linear-gradient(to top #09203f 0% #537895 50%)`}; 
    } */
/* } */


       

   
`;

const CaptionStyle = styled.span`
    width:70%;
    text-align:left;
    padding-left:1em;
	`;

    const QtyStyle = styled.span`
    width:30%;
    text-align:right;
    padding-right:1em;
	`;

   




export default MenuItem