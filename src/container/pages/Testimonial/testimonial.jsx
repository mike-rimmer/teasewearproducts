import React from 'react';
import { testimonialData as data } from './testimonial.data';
import { ReferralCard } from '../../../components/components';
import styles from './testimonial.module.css';
const Testimonial = (props) => {
	const dataList = data
		.filter((ele) => {
			return ele.product === props.product;
		})
		.map((ele) => {
			return (
				<ReferralCard
					key={ele.id}
					person={ele.person}
					date={ele.date}
					comment={ele.comment}
					imgUrl={ele.imgUrl}
				/>
			);
		});

	if (dataList.length > 0) {
		return (
			<div className ={styles.testimonial}>
				<h5>Testimonials for TeaseWear</h5>
				<div className={styles.testimonialContainer}>
				{dataList}
				</div>
			</div>
		);
	} else {
		return (
			<div className ={styles.testimonial}>
				<h5>Testimonial for TeaseWear</h5>
				<div className={styles.testimonialContainer}>
					<h6>
						Sorry Referrals not available <br /> for this product!
					</h6>
				</div>
			</div>
		);
	}
};

export default Testimonial;
