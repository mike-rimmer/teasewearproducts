import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const SmallPhotos = (props) => {
	// console.log('In SmallPhotos Value of Props', props);
	// let temp = props.data.map((ele) => `show/${ele.dir}`);
	// console.log('Value of Temp', temp);

	let noId = props.garmentStyle === 'Show' || props.garmentStyle === 'Regular' ? true : false;
	let list;
	// TODO:Check the logic for noId
	if (noId) {
		list = props.data.map((ele) => (
			<PhotoWithLink key={ele.id}>
			{/* <div key={ele.id} className={styles.smallPhoto}> */}
				{/* <img key={ele.id} className={styles.smallImage} src={ele.url} alt={ele.caption} /> */}
				<Image key={ele.id} scr = {ele.url} alt = {ele.caption}/>
				<Link style={{ textDecoration: 'none' }} to={`${ele.dir}`}>
					{' '}
					{ele.caption}
				</Link>
			</PhotoWithLink>
		));
	} else {
		list = props.data.map((ele) => (
			<PhotoWithLink key={ele.id}>
				<Image key={ele.id} src={ele.url} alt={ele.caption} />
				<Link style={{ textDecoration: 'none' }} to={`${ele.dir}/${ele.id}`}>
					{' '}
					{ele.caption}
				</Link>
			</PhotoWithLink>
		));
	}

	return (
		<PhotoCollection>
			{list}
		</PhotoCollection>
	);
};

export default SmallPhotos;

const PhotoCollection = styled.div`
    display:flex;
    margin:0em;
	width:90%;
	justify-content: space-between;
    flex-wrap:nowrap;
   
`
   const PhotoWithLink = styled.div`
    position:relative;
    display:flex;
	flex-direction:column;
    border:solid 1px black;
	padding: 10;
    margin-top:20px;
    height:280px;
    width:250px;
    border-radius:10px;
    text-align: center;
	@media(max-width:1030px){
		/* border:solid 1px red; */
	}
 `

    const Image = styled.img`
    border:solid 1px black;
    height:200px;
    width:200px;
    border-radius:10px;
    box-shadow: 7px 16px 16px rgba(12,12,12,.5);
    margin:20px;
    @media(max-width:1030px){
        margin:0em;
    }

	@media(max-width:400px){
		height:125px;
        width:125px;
	}
`