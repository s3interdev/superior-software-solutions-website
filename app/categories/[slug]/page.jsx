import Link from 'next/link';

import { format, parseISO } from 'date-fns';

import {
	getDataGlobal,
	getDataCategorySummaryBlogPosts,
	getDataPageBlogPostCategories,
} from '@/lib/services';
import { DisplayCallToAction, DisplayHeroStandard, DisplayImage } from '@/components';

export async function generateMetadata() {
	/* fetch application metadata */
	const { name } = await getDataGlobal();
	const { title, metaDescription } = await getDataPageBlogPostCategories();

	return {
		title: title ? title + ' | ' + name : name,
		description: metaDescription,
	};
}

/* initialize hero section background color */
const colorPri = 'from-accent';
const colorSec = 'to-accent';

const BlogCategoriesPage = async ({ params }) => {
	/* get categories page data */
	const {
		hero: {
			callToAction: { title: hecTitle, subtitle: hecSubtitle },
		},
		callToAction: {
			title: ctTitle,
			image: { url: ctiUrl },
			content: { html: ctcHtml },
			link: { text: ctlText, url: ctlUrl },
		},
	} = await getDataPageBlogPostCategories();

	/* get blog post category summary data  */
	const categorySummary = await getDataCategorySummaryBlogPosts(params.slug);

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

			{/* blog card display section start */}
			<section id="card-display-section" className="container mx-auto my-8 px-1">
				{/* cards start */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{categorySummary.length === 0 ? (
						<p className="text-lg tracking-wide text-content-alt">
							There are no posts in this category.
						</p>
					) : (
						categorySummary.map((post) => {
							return (
								<div
									key={post.slug}
									className="overflow-hidden rounded border bg-highlight-alt shadow-lg"
								>
									{/* image start */}
									<div className="relative h-64 w-full rounded md:h-80">
										<DisplayImage imgSrc={post.image.url} imgAlt={post.title} />
									</div>
									{/* image end */}

									{/* content start */}
									<div className="p-5">
										{/* post title start */}
										<Link href={`/blogs/${post.slug}`}>
											<span className="mt-2 inline-block text-lg font-medium text-content-alt hover:cursor-pointer hover:text-accent">
												{post.title}
											</span>
										</Link>
										{/* post title end */}

										{/* post author and publish date start */}
										<div className="mt-3">
											<p className="font-semibold">
												{post.team.name} | {format(parseISO(post.date), 'MMMM do, yyyy')}
											</p>
										</div>
										{/* post author and publish date end */}

										{/* post excerpt start */}
										<div className="mt-3">
											<p className="">{post.excerpt}</p>
										</div>
										{/* post excerpt end */}
									</div>
									{/* content start */}
								</div>
							);
						})
					)}
				</div>
				{/* cards end */}
			</section>
			{/* blog card display section end */}

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

export default BlogCategoriesPage;
