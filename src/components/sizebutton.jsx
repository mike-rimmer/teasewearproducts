import React from 'react'
import styled from 'styled-components'

const {useState} =React


const SizeButton = (props) => {
	// TODO: Make this into a basic with no return

	return (
		<BtnWrapper>
		<Item>
		<h4>Size:</h4>
		</Item>
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='XXS'
			checked = {props.select ==='XXS'} 
			onChange = {e => props.handleSelectEvent(e)}
			/>
			<RBLabel>
			XXS
			</RBLabel>
		</Item>
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='XS'
			checked = {props.select ==='XS'} 
			onChange ={e => props.handleSelectEvent(e)}/>
				<RBLabel>
					XS
				</RBLabel>
		</Item>
	
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='S' 
			checked = {props.select === 'S'}
			onChange ={e => props.handleSelectEvent(e)}/>
			<RBLabel>S</RBLabel>
		</Item>
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='M'
			checked ={props.select === 'M'} 
			onChange ={e => props.handleSelectEvent(e)}/>
			<RBLabel>M</RBLabel>
		</Item>
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='L'
			checked ={props.select === 'L'} 
			onChange ={e => props.handleSelectEvent(e)}/>
			
			<RBLabel>L</RBLabel>
		</Item>
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='XL'
			checked = {props.select === 'XL'}  
			onChange ={e => props.handleSelectEvent(e)}/>
			
			<RBLabel>XL</RBLabel>
		</Item>
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='2XL'
			checked = {props.select === '2XL'} 
			onChange ={e => props.handleSelectEvent(e)}/>
			<RBLabel/>
			<RBLabel>2XL</RBLabel>
		</Item>
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='3XL' 
			checked = {props.select === '3XL'}
			onChange ={e => props.handleSelectEvent(e)}/>
			<RBLabel>3XL</RBLabel>
		</Item>
		<Item>
			<RadioButton 
			type='radio' 
			name='size' 
			value='4XL'
			checked = {props.select ==='4XL' }
			onChange ={e => props.handleSelectEvent(e)}/>
			
			<RBLabel>4XL</RBLabel>
		</Item>
		</BtnWrapper>
	);
};

const BtnWrapper = styled.div`
  display:flex;
  height: auto;
  width: 100%;
  padding: .5em .5em .5em 0em;
  box-sizing: border-box;
  @media(max-width:880px){
	  font-size:12px;
  }
  @media(max-width:680px){
	  font-size:9px;
	  flex-wrap:wrap;

  }
  `;
	
  const Item = styled.div`
	display: flex;
	width:auto;
	min-width:5em;
	position: relative;
    /* border: solid 1px black; */
	align-items: center;
	height: 40px;
	@media(max-width:530px){
		:nth-child(7){
			margin-left:6em;
		}
	}
  `;

const RBLabel = styled.label`
  position: absolute;
  top: 30%;
  left: 2.25em;
  max-width:2em;
  height: 2em;
  @media(max-width:880px){
	  font-size:12px;
  }
  @media(max-width:680px){
	  font-size:10px;
  }
  `

const RadioButton =  styled.input`
width:2em;
height:2em;
@media(max-width:880px){
	  font-size:12px;
  }
  @media(max-width:680px){
	  font-size:10px;
	  width:1.5em;
      height:1.5em;
  }
`

export default SizeButton;