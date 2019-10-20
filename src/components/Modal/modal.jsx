import React from 'react'
import Testimonial from "../../container/pages/Testimonial/testimonial"
import styles from   './modal.module.css'
const Modal = (props) => {	

// let show = true;
// let modalStyle = 'modal';
// if (show) {
// 	modalStyle = 'modalOpen';
// }
return (
		<div className = {styles.modal} onClick={props.onClick}>
		 <Testimonial product= {props.product} />
		 {/* <p className = {style} >Here</p> */}
		</div>
	);
};


export default Modal;