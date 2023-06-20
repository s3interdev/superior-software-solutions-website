import { formatDistanceToNow } from 'date-fns';

import { getDataCommentsBlogPost } from '@/lib/services';

const DisplayBlogComments = async ({ slug }) => {
	const comments = await getDataCommentsBlogPost(slug);

	return (
		<>
			{comments.length > 0 && (
				<div className="container mx-auto my-8 rounded-lg border bg-highlight-alt p-5 shadow-lg">
					{/* header start */}
					<h3 className="mb-3 border-b border-b-content-alt pb-3 text-lg font-semibold uppercase text-content-alt">
						{comments.length} Comments
					</h3>
					{/* header end */}

					{/* comments start */}
					{comments.map((comment, index) => (
						<div
							key={index}
							className={`container mx-auto mb-3 max-w-full p-3 ${
								index === comments.length - 1 ? 'border-b-0' : 'border-b'
							}`}
						>
							{/* comment start */}
							<p className="mb-3">
								<span className="font-semibold">{comment.name}</span>{' '}
								{formatDistanceToNow(new Date(comment.createdAt), {
									addSuffix: true,
								})}
							</p>
							<p className="w-full whitespace-pre-line">{comment.comment}</p>
							{/* comment end */}
						</div>
					))}
					{/* comments end */}
				</div>
			)}
		</>
	);
};

export default DisplayBlogComments;
