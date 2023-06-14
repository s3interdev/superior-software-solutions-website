import { format, parseISO } from 'date-fns';

import { getDataGlobal, getDataPageBlogPost } from '@/lib/services';
import {
	DisplayBlogFeaturedImage,
	DisplayCallToAction,
	DisplayContent,
	DisplayImage,
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
		image: { url: iUrl },
		team: {
			name: tName,
			image: { url: tiUrl },
			bio: { html: tbHtml },
		},
		date,
		content: { html: cHtml },
		callToAction: {
			title: cTitle,
			content: { html: ccHtml },
			link: { text: clText, url: clUrl },
		},
	} = await getDataPageBlogPost(params.slug);

	return (
		<article>
			{/* hero section start */}
			<section id="hero-section">
				{/* hero start */}
				<DisplayBlogFeaturedImage imgSrc={iUrl} imgAlt={title} />
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

							{/* content start */}
							<DisplayContent content={cHtml} />
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
							className="container mx-auto max-w-full rounded-lg bg-highlight-alt p-5 shadow-lg"
						>
							<div className="flex items-center">
								{/* author image start */}
								<div className="relative h-20 w-20">
									<DisplayImage imgSrc={tiUrl} imgAlt={tName} />
								</div>
								{/* author image end */}

								{/* miscellaneous start */}
								<div className="ml-3">
									<p className="font-semibold">{tName}</p>
									<p className="mt-1">{format(parseISO(date), 'MMMM do, yyyy')}</p>
								</div>
								{/* miscellaneous end */}
							</div>
						</section>
						{/* miscellaneous information end */}

						<section>
							<h1>Post Widget</h1>
						</section>

						<section>
							<h1>Categories</h1>
						</section>
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
					buttonText={clText}
					content={ccHtml}
					title={cTitle}
					url={clUrl}
				/>
				{/* call to action end */}
			</section>
			{/* call to action section end */}
		</article>
	);
};

export default PostPage;
