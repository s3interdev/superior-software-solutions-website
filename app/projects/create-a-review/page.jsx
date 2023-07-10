import { getDataGlobal, getDataPageCreateReview } from '@/lib/services';
import {
	DisplayCallToAction,
	DisplayContent,
	DisplayHeroStandard,
	DisplayReviewCreateForm,
	DisplayUnderlineStandard,
} from '@/components';

export async function generateMetadata() {
	/* fetch application metadata */
	const { name } = await getDataGlobal();
	const { title, metaDescription } = await getDataPageCreateReview();

	return {
		title: title ? title + ' | ' + name : name,
		description: metaDescription,
	};
}

const CreateReviewPage = async () => {
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
	} = await getDataPageCreateReview();

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

			{/* create review form section start */}
			<section id="form-display-section" className="container mx-auto my-8 px-1">
				<DisplayReviewCreateForm />
			</section>
			{/* create review form section end */}

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

export default CreateReviewPage;
