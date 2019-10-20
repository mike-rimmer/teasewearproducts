import React from 'react'
import styled from 'styled-components' 




const InputType = (props) =>{

 
    return(
    <Wrapper>
        <P>{props.label}</P>
        <Input type ='text'  onChange ={props.onchange} onKeyDown = {props.keyDown} value = {props.qty}/>
    </Wrapper>

)

}
export default InputType;

const Wrapper  = styled.div`
display:flex;
width:100px;
height:60px;
`
const Input = styled.input`
width:40px;
font-size:1em;
margin-left:.5em;
// `
const P = styled.h4`
 width:40px;
 
 `