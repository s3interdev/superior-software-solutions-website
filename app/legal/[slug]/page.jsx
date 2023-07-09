import { getDataGlobal, getDataPageLegalPolicy } from '@/lib/services';
import {
	DisplayContent,
	DisplayHeroStandard,
	DisplayUnderlineStandard,
} from '@/components';

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
			callToAction: { title: hecTitle, subtitle: hecSubtitle },
		},
		content: {
			content: {
				title: cocTitle,
				content: { html: coccHtml },
			},
		},
	} = await getDataPageLegalPolicy(params.slug);

	/* initialize hero section background color */
	const colorPri = 'from-primary-alt';
	const colorSec = 'to-primary';

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
						{name} {cocTitle}
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
		</article>
	);
};

export default LegalPolicyPage;
