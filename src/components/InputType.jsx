import React from 'react'
import styled from 'styled-components' 




const InputType = (props) =>{

    return(
    <Wrapper>
        <p>{props.label}</p>
        <input type ='text'  onChange ={props.onchange} onKeyDown = {props.keyDown} value = {props.qty}/>
    </Wrapper>

)

}
export default InputType;

const Wrapper  = styled.div`
display:flex;
width:100px;
height:60px;
position:relative;

p{
 position:absolute;
 top:.5em;
 left:.5em;
 width:40px;
 font-weight:bold;
}

input{
position:absolute;
top:-.25em;
left:2.5em;
height:1.5em;
width:auto;
font-size:1em;
margin-left:.5em;  
}
`