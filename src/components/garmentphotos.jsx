import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const GarmentPhotos = (props) => {
	const	list = props.data.map((ele) => (
			<div key={ele.id}>
				<img key={ele.id} src={ele.url} alt={ele.caption} />
				<Link style={{ textDecoration: 'none' }} to={`${ele.dir}/${ele.id}`}>
					{' '}
					{ele.caption} Item #: {ele.id}
				</Link>
			</div>
		));
	
	return (
		<PhotoCollection>
			{list}
		</PhotoCollection>
	);
};


const PhotoCollection = styled.div`
	display:flex;
	flex-direction:column;
	margin:auto;
	border-radius:10px;
	text-align:center;
	margin-bottom:1em
	img{
		width:90%;
		margin-top:1em;
		margin-left:5%;
		margin-right:5%;
		text-align:center;
		border-radius:2.5%;
	}
	`;
  
	export default GarmentPhotos;