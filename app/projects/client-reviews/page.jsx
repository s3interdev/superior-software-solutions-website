import { getDataGlobal, getDataPageReviews, getDataReviews } from '@/lib/services';
import {
	DisplayCallToAction,
	DisplayContent,
	DisplayHeroStandard,
	DisplayImage,
	DisplayReviewStars,
	DisplayUnderlineStandard,
} from '@/components';

export async function generateMetadata() {
	/* fetch application metadata */
	const { name } = await getDataGlobal();
	const { title, metaDescription } = await getDataPageReviews();

	return {
		title: title ? title + ' | ' + name : name,
		description: metaDescription,
	};
}

const ClientReviewsPage = async () => {
	/* get blogs page data */
	const {
		hero: {
			callToAction: { title: hecTitle, subtitle: hecSubtitle },
		},
		content: {
			content: {
				title: cocTitle,
				content: { html: coccHtml },
			},
		},
		callToAction: {
			title: ctTitle,
			image: { url: ctiUrl },
			content: { html: ctcHtml },
			link: { text: ctlText, url: ctlUrl },
		},
	} = await getDataPageReviews();

	/* get reveiews data */
	const clientReviews = await getDataReviews();

	/* initialize hero section background color */
	const colorPri = 'from-accent';
	const colorSec = 'to-accent';

	return (
		<article>
			{/* hero section start */}
			<section id="hero-section">
				{/* hero start */}
				<DisplayHeroStandard
					title={hecTitle}
					subtitle={hecSubtitle}
					colorPri={colorPri}
					colorSec={colorSec}
				/>
				{/* hero end */}
			</section>
			{/* hero section end */}

			{/* content section start */}
			<section id="content-section">
				<div className="container mx-auto my-8 px-1">
					{/* heading start */}
					<h3 className="mb-5 text-2xl font-semibold uppercase text-content-alt">
						{cocTitle}
					</h3>
					{/* heading end */}

					{/* underline start */}
					<DisplayUnderlineStandard />
					{/* underline end */}

					{/* content start */}
					<DisplayContent content={coccHtml} />
					{/* content end */}
				</div>
			</section>
			{/* content section end */}

			{/* review card display section start */}
			<section id="card-display-section" className="container mx-auto my-8 px-1">
				{/* cards start */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{clientReviews.map((review, index) => {
						return (
							<div
								key={index}
								className="overflow-hidden rounded border bg-highlight-alt p-5 shadow-lg"
							>
								{/* review start */}
								<p className="leading-loose">{review.review}</p>
								{/* review end */}

								{/* reviewer information start */}
								<div className="mt-8 flex items-center">
									{/* reviewer image start */}
									<div className="relative h-10 w-10 flex-none">
										<DisplayImage
											imgSrc={review.reviewerImage.url}
											imgAlt={review.reviewerName}
										/>
									</div>
									{/* reviewer image end */}

									<div className="ml-3 flex-grow">
										{/* reviewer name and business start */}
										<p className="text-sm font-semibold text-content-alt md:text-base">
											{review.reviewerName}
											<span className="text-xs font-normal md:text-sm">
												, {review.reviewerBusinessName}
											</span>
										</p>
										{/* reviewer name and business end */}

										{/* reviewer rating start */}
										<DisplayReviewStars rating={review.reviewRating} />
										{/* reviewer rating end */}
									</div>
								</div>
								{/* reviewer information end */}
							</div>
						);
					})}
				</div>
				{/* cards start */}
			</section>
			{/* review card display section end */}

			{/* call to action section start */}
			<section id="call-to-action-section" className="container mx-auto my-5 px-1">
				{/* call to action start */}
				<DisplayCallToAction
					buttonText={ctlText}
					content={ctcHtml}
					image={ctiUrl}
					title={ctTitle}
					url={ctlUrl}
				/>
				{/* call to action end */}
			</section>
			{/* call to action section end */}
		</article>
	);
};

export default ClientReviewsPage;
