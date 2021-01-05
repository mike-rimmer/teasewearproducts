import React, {useState, useEffect} from 'react';
import Dropdown from '../components/dropDown'
import Styled from 'styled-components'
import arrow from '../../src/arrow16.png';
import PhotoCard from '../container/PhotoCard'

// {/* https://blog.logrocket.com building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/   */}
const LookupWindow = (props)=>{
    const [input, setInput]=useState('Select Style from List')
    const[styleDescription, setStyleDescription] = useState('')
    const[styleName, setStyleName]= useState('');
const[styleList, setStyleList] = useState(<ul><li>text</li></ul>);

    function getStyleImages(data){
        const list = data.map(ele => <li>{ele}</li>)
        return(<ul>{list}</ul>)
    }

    const LI_ClickHandler = (id, e)=>{
        setStyleDescription(id.StyleDesc)
        setStyleName(id.styleName)
        setStyleList(getStyleImages(id.styleIDs))
        // setInput(id)
        // console.log('Event selected is:', e)
}

    const {dropDown, setdropDown} = useState(false)
    return(
        <Container>
        <div className = 'dropsect'>
          <h5>List Selector</h5>
          <label>{input}</label>
          <Dropdown clickHandler={LI_ClickHandler} sampleData={props.data}/>
        </div>
  
        <div className = 'infosect'>
           <h5>{styleName}</h5>
            <p>{styleDescription}</p>  
        </div>
        <div className ='imagesect'>
            <p>{styleList}</p>
        </div>
        </Container>
    )
    }
    export default LookupWindow;

const Container = Styled.div`
  display:grid;
  grid-template-columns: 1fr 3fr ;
  grid-template-rows:auto;
  grid-gap:2em;
  grid-template-areas:
  'drop info info';
  '. photoarea';
  padding:2em;
  margin-top:100px;
 background-color:lightcyan;
 .dropsect{
     grid-area:drop;
 }

.infosect{
    grid-area:info;
    /* background-color:white;
    border: solid 1px black; */
} 

.imagesect{
    grid-area:photoarea;
}

 h5{
     margin-bottom:.5em;
 }

 label{
  box-sizing:border-box;
  box-shadow: .5em 0em .5em #444;
  background-color:lightgrey;
  padding:1em;
  border:solid black 1px;
  width:auto;
  padding:.5em 1em;
  ::after{
      content: "    "  url(${arrow});
      margin : auto;
  }
 }
`

