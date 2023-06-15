import Link from 'next/link';

import { format, parseISO } from 'date-fns';

import { getDataSimilarBlogPosts } from '@/lib/services';
import { DisplayImage } from '@/components';

const DisplayBlogsWidget = async ({ slug, categories }) => {
	const similarBlogPosts = await getDataSimilarBlogPosts(slug, categories);

	return (
		<>
			{similarBlogPosts.map((blog, index) => {
				return (
					<div key={index} className="mb-3 flex items-center">
						{/* blog featured image start */}
						<div className="relative h-20 w-20 flex-none">
							<DisplayImage imgSrc={blog.image.url} imgAlt={blog.title} />
						</div>
						{/* blog featured image end */}

						{/* blog title link start */}
						<div className="ml-3 flex-grow">
							<p className="font-xs font-semibold text-content-alt">
								{format(parseISO(blog.date), 'MMMM do, yyyy')}
							</p>

							<Link href={`/blogs/${blog.slug}`}>
								<span className="cursor-pointer transition duration-300 hover:text-accent">
									{blog.title}
								</span>
							</Link>
						</div>
						{/* blog title link start */}
					</div>
				);
			})}
		</>
	);
};

export default DisplayBlogsWidget;
