import { getDataGlobal, getDataPageLegalPolicy } from '../../lib/retrieval';
import { DisplayContent, DisplayHeroStandard } from '../../components';

export async function generateMetadata({ params }) {
	/* fetch application metadata */
	const { name } = await getDataGlobal();
	const { title, metaDescription } = await getDataPageLegalPolicy(params.slug);

	return {
		title: title ? title + ' | ' + name : name,
		description: metaDescription,
	};
}

const LegalPolicyPage = async ({ params }) => {
	/* get global data */
	const { name } = await getDataGlobal();

	/* get legal policy page data */
	const {
		hero: {
			callToAction: { title: hcTitle, subtitle: hcSubtitle },
		},
		content: {
			content: {
				title: ccTitle,
				content: { html: cccHtml },
			},
		},
	} = await getDataPageLegalPolicy(params.slug);

	/* initialize hero section background color */
	const backgroundColor = 'bg-highlight';

	return (
		<article>
			{/* hero section start */}
			<section id="hero-section">
				{/* hero start */}
				<DisplayHeroStandard
					title={hcTitle}
					subtitle={hcSubtitle}
					backgroundColor={backgroundColor}
				/>
				{/* hero end */}
			</section>
			{/* hero section end */}

			{/* content section start */}
			<section id="content-section">
				<div className="container mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20">
					{/* heading start */}
					<h3 className="pb-8 text-2xl font-semibold text-content-alt">
						{name} {ccTitle}
					</h3>
					{/* heading end */}

					{/* content start */}
					<DisplayContent content={cccHtml} />
					{/* content end */}
				</div>
			</section>
			{/* content section end */}
		</article>
	);
};

export default LegalPolicyPage;
