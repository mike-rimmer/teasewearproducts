import React from 'react';
import styles from './construct.module.css';
import styled from 'styled-components'

const Wrapper = styled.div`
    margin:0px;
    height: 1000px; 
    background-image: url( 'http://www.teasewearproducts.com/images/nohome/wipweb.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const construct = (props) => {
	//console.log("Props from Home", props.id)
	return <Wrapper />;
};

export default construct;
