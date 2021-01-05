import React, { useState } from 'react';
import PhotoCard from './container/PhotoCard'
import {InventoryData} from './Data/inventorydata.js'
import PhotoScrollCard from './container/photoScrollCard'
import LookupWindow from './components/lookupWindow'
import Styled from 'styled-components'

function TestApp(){

    console.log(InventoryData)
    const photos = InventoryData.reduce((accum, ele)=>{
        const header = {id:ele.id, caption: ele.caption, desc:ele.desc}
        const Urls= ele.styleImages.map(iele => ({imageId: iele.id, url: iele.url}))
        const styles = ele.styles.map(sele => ({styleName:sele.name, StyleDesc:sele.Desc, styleIDs:sele.id}))
        accum.push({head:header, images:Urls, garmentStyles: styles})
        return accum;
    },[])
    
    // Using an array of objects and arrays
    console.log('Here are photos', photos)
    const {head, images, garmentStyles} = photos[1];
    const {id, caption, desc} = head;
    console.log("Looking at the head", id, caption, desc)
    console.log('Here is Head' , head)
    console.log('Here are images' , images)
    console.log('Here are GarmentStyles' , garmentStyles)

    
    // console.log(photos[0].caption, photos[0].desc, photos[1][0].url)
    // console.log(`Here is the img for ${photos[0].caption} -> ${photos[1][0].url}`)
    
    // Using an array of objects
    
    const size = 250;
    const productImage = images.map((ele)=>{
          return <PhotoCard key = {ele.imageId}
                  width={size}
                  height={size}
                  url={ele.url}
                    />
        })
        return(
        
        <Container>
            <div className='photos'>
                <h1>PhotoScroll Card </h1>
                <PhotoScrollCard images = {productImage} caption ={caption}  desc= {desc} imageSize = {size} data={garmentStyles}/>
            </div>

            <div className='lookup'>
            <LookupWindow data={garmentStyles}/>
            </div>
      
        </Container>
            
        )
        }export default TestApp;

const Container = Styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows:auto;
grid-template-areas:
'photo'
'lookups';

.photos{
    grid-area:photo;
}

.lookup{
    grid-area:lookups;
}

.
`