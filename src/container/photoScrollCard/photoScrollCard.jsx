import React from 'react';
import Styled from 'styled-components'
import PhotoCard from '.././PhotoCard'

const PhotoScrollCard = (props) =>{
    return(
   <ScrollCard>
      <div className='head'>
        <h3>{props.caption}</h3>
        <h5>{props.data[0].styleName}</h5>
        <p>{props.desc}</p>
      </div>
      <ImageViewPort size={props.imageSize}>
        {props.images}
      </ImageViewPort>
   </ScrollCard >
  
    )
};


PhotoScrollCard.defaultProps={
  caption:'Test Caption',
  style: 'Test Style',
  desc: 'Bacon ipsum dolor amet tongue jerky ball tip, short loin chislic leberkas t-bone short ribs. Brisket landjaeger cupim drumstick short ribs sirloin rump. Kevin short ribs chicken, beef bacon pig chuck pork belly salami turkey picanha swine ham hock. Ground round drumstick doner meatball. Turkey tenderloin prosciutto, hamburger jerky bacon biltong beef ribs strip steak fatback corned beef burgdoggen pork'

};

const ScrollCard = Styled.div`
    background:grey;
    padding:2em;
    display:grid;
    width:80%;
    margin:0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:auto;
    grid-gap:2em;
    grid-template-areas:
    'details details details'
    ' . image .';
    border:solid 1px black;
    .head{
        h3{
          text-align:center;
        }
        
        grid-area:details;

        h3, h5{
          color:white;
          margin-bottom:1em;
        }

        p{
          color:white;
          margin:0 4em;
          line-height:2em;
        }
    }

    border-radius: 10px;
    box-shadow: .5em .5em 1em rgba(12, 12, 12, .5);

    @media(min-width:1030px){
      grid-template-columns: 2fr 1fr;
      grid-gap:2em;
      grid-template-areas:
      'details image';
    }
`
const ImageViewPort = Styled.div`
  grid-area:image;
  box-sizing:border-box;
  border-radius:10px;
  display:flex;
  background:yellow;
  width:${props =>  (`${props.size}px`  )};
  height:${props => (`${props.size * 1.1}px`) };
  min-width:100px;
  overflow-x:scroll;
  scroll-snap-type:x mandatory;
  /* scroll-padding: 30%; */
  /* scroll-margin:8em; */
  img{
    scroll-snap-align:center;
  }
`


export default PhotoScrollCard;