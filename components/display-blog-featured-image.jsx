import { DisplayImage } from '@/components';

function DisplayBlogFeaturedImage({ imgSrc, imgAlt }) {
	return (
		/* display start */
		<div className="h-80 w-full">
			{/* image display container start */}
			<div className="relative h-full w-full">
				{/* image display start */}
				<DisplayImage imgSrc={imgSrc} imgAlt={imgAlt} />
				{/* image display end */}
			</div>
			{/* image display container end */}
		</div>
		/* display end */
	);
}

export default DisplayBlogFeaturedImage;
