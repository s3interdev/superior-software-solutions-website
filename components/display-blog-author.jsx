import { DisplayContent, DisplayImage } from '@/components';

const DisplayBlogAuthor = ({ authorName, authorImage, authorBio }) => {
	return (
		<>
			{/* blog author start */}
			<div className="relative rounded border bg-highlight-alt p-12 text-center shadow-lg">
				<div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
					{/* blog author image start */}
					<div className="relative h-24 w-24 align-middle">
						<DisplayImage imgSrc={authorImage} imgAlt={authorName} />
					</div>
					{/* blog author image end */}
				</div>

				{/* blog author name start */}
				<div className="mt-3">
					<p className="text-lg font-semibold text-content-alt">{authorName}</p>
				</div>
				{/* blog author name end */}

				{/* blog author bio start */}
				<div className="mt-5">
					<DisplayContent content={authorBio} />
				</div>
				{/* blog author bio end */}
			</div>
			{/* blog author end */}
		</>
	);
};

export default DisplayBlogAuthor;
