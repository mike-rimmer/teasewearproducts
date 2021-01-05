import React from 'react';
import Styled from 'styled-components'

const Dropdown = ({clickHandler, sampleData})=>{
const list = sampleData.map( ele =>  <li key={ele.styleName} onClick = {e=>clickHandler(ele, e)}>{ele.styleName}</li>)
    return(
      <div>

    <Ul>
        {list}
    </Ul>
    </div>
)}

export default Dropdown;

Dropdown.defaultProps={
  data:['Sample1','Sample2','Sample3', 'Sample4' ]  
}
const Ul = Styled.ul`
  margin-top:.5em;
  list-style-type:none;
  margin-left:1.2em;
  line-height:1.5em;
  border: solid 1px black;
  background:#eee;
  padding:.5em;
  box-shadow: .5em .5em .5em #444;
  margin-bottom:.5em;
  :hover{
    cursor: pointer;
  }
  li{
    padding: 0em .5em;
    border:solid lightgrey 1px;
    :hover{
      background-color:lightblue;
      color:black;
      }
    }

  
`