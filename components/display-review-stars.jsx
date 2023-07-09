import { FaStar } from 'react-icons/fa';

const DisplayReviewStars = ({ rating }) => {
	/* round rating prop to the nearest whole integer */
	const reviewStars = Math.round(rating);

	/* render star icons */
	const renderStars = (index) => {
		if (index <= reviewStars) {
			return <FaStar key={index} className="text-primary" />;
		} else {
			return <FaStar key={index} className="text-content-light" />;
		}
	};

	return (
		<div className="flex items-center">
			{[1, 2, 3, 4, 5].map((index) => renderStars(index))}
		</div>
	);
};

export default DisplayReviewStars;
