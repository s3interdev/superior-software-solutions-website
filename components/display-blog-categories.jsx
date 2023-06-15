import Link from 'next/link';

import { getDataBlogPostCategories } from '@/lib/services';

const DisplayBlogCategories = async () => {
	const categories = await getDataBlogPostCategories();

	return (
		<>
			{/* blog categories start */}
			{categories.map((category, index) => {
				return (
					<Link key={index} href={`/categories/${category.slug}`}>
						<span
							className={`block cursor-pointer ${
								index === categories.length - 1 ? 'border-b-0' : 'border-b'
							} mb-3 pb-3 transition duration-300 hover:text-accent`}
						>
							{category.title}
						</span>
					</Link>
				);
			})}
			{/* blog categories end */}
		</>
	);
};

export default DisplayBlogCategories;
