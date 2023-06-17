import { format, parseISO } from 'date-fns';

import { getDataGlobal, getDataPageBlogPost } from '@/lib/services';
import {
	DisplayBlogCategories,
	DisplayBlogFeaturedImage,
	DisplayBlogWidget,
	DisplayCallToAction,
	DisplayContent,
	DisplayImage,
	DisplayUnderlineStandard,
} from '@/components/';

export async function generateMetadata({ params }) {
	/* fetch application metadata */
	const { name } = await getDataGlobal();
	const { title, excerpt } = await getDataPageBlogPost(params.slug);

	return {
		title: title ? title + ' | ' + name : name,
		description: excerpt,
	};
}

const PostPage = async ({ params }) => {
	/* get blog page data */
	const {
		title,
		slug,
		image: { url: imUrl },
		team: {
			name: teName,
			image: { url: teiUrl },
			bio: { html: tebHtml },
		},
		categories,
		date,
		content: { html: coHtml },
		callToAction: {
			title: ctTitle,
			image: { url: ctiUrl },
			content: { html: ctcHtml },
			link: { text: ctlText, url: ctlUrl },
		},
	} = await getDataPageBlogPost(params.slug);

	return (
		<article>
			{/* hero section start */}
			<section id="hero-section">
				{/* hero start */}
				<DisplayBlogFeaturedImage imgSrc={imUrl} imgAlt={title} />
				{/* hero end */}
			</section>
			{/* hero section end */}

			{/* content section start */}
			<section id="content-section" className="container mx-auto my-8 px-1">
				{/* content container start */}
				<div className="flex flex-col md:flex-row">
					{/* content container primary start */}
					<div className="md:w-3/4 md:px-3">
						<section id="blog-content-section">
							{/* header start */}
							<h2 className="mb-5 text-xl font-semibold text-content-alt md:text-2xl">
								{title}
							</h2>
							{/* header end */}

							{/* underline start */}
							<DisplayUnderlineStandard />
							{/* underline end */}

							{/* content start */}
							<DisplayContent content={coHtml} />
							{/* content end */}
						</section>

						<section>
							<h1>Author Bio</h1>
						</section>

						<section>
							<h1>Comment Form</h1>
						</section>

						<section>
							<h1>Comments</h1>
						</section>
					</div>
					{/* content container primary end */}

					{/* content container secondary start */}
					<div className="mt-8 md:mt-0 md:w-1/4 md:px-3">
						{/* miscellaneous information start */}
						<section
							id="misc-info-section"
							className="container mx-auto mb-3 max-w-full rounded-lg border bg-highlight-alt p-5 shadow-lg"
						>
							<div className="flex items-center">
								{/* author image start */}
								<div className="relative h-20 w-20 flex-none">
									<DisplayImage imgSrc={teiUrl} imgAlt={teName} />
								</div>
								{/* author image end */}

								{/* miscellaneous start */}
								<div className="ml-3 flex-grow">
									<p className="font-semibold text-content-alt">{teName}</p>
									<p className="mt-1">{format(parseISO(date), 'MMMM do, yyyy')}</p>
								</div>
								{/* miscellaneous end */}
							</div>
						</section>
						{/* miscellaneous information end */}

						{/* similar posts widget start */}
						<section
							id="similar-posts-widget-section"
							className="container mx-auto mb-3 max-w-full rounded-lg border bg-highlight-alt p-5 shadow-lg"
						>
							{/* header start */}
							<h3 className="mb-3 border-b border-b-content-alt pb-3 text-lg font-semibold uppercase text-content-alt">
								Similar Posts
							</h3>
							{/* header end */}

							{/* similar blog widget start */}
							<DisplayBlogWidget
								slug={slug}
								categories={categories.map((category) => category.slug)}
							/>
							{/* similar blog widget end */}
						</section>
						{/* similar posts widget end */}

						{/* blog categories start */}
						<section
							id="blog-categories-section"
							className="container mx-auto mb-3 max-w-full rounded-lg border bg-highlight-alt p-5 shadow-lg"
						>
							{/* header start */}
							<h3 className="mb-3 border-b border-b-content-alt pb-3 text-lg font-semibold uppercase text-content-alt">
								Categories
							</h3>
							{/* header end */}

							{/* post categories start */}
							<DisplayBlogCategories />
							{/* post categories end */}
						</section>
						{/* blog categories end */}
					</div>
					{/* content container secondary end */}
				</div>
				{/* content container end */}
			</section>
			{/* content section end */}

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

export default PostPage;
