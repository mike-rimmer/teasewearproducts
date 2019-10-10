import React from 'react';

import styled from 'styled-components'

const Backdrop = styled.div`
width:100%;
height:100%;
position:fixed;
top:0px;
left:0px;
background:rgba(0,0,0, .3);
z-index: 90;
`

const backDrop = props =>(
    <Backdrop onClick ={props.clickHandler}/>
)

export default backDrop
