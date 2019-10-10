import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  	display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:30px;
    width:36px;
    background:transparent;
    border:none;
    cursor:pointer;
    /* color:white; */
    box-sizing:boarder-box;
    /* visibility:hidden; */
`

const ButtonLine= styled.div`
    /* Note since the div do not contain any items we need to set
    a width */
    width:30px;;
    height:2px;
    background-color:white;
`

const drawerToggleButton = (props) => (
	<Button onClick={props.click}>
		<ButtonLine/>
		<ButtonLine/>
		<ButtonLine/>
	</Button>
);

export default drawerToggleButton;
