import Link from 'next/link';

import { DisplayContent } from '@/components/';

const DisplayCallToAction = ({ buttonText, content, title, url }) => {
	return (
		<>
			{/* call to action start */}
			<div className="w-full rounded border border-highlight bg-highlight-alt p-4 text-center shadow-lg sm:p-8">
				{/* header start */}
				<h4 className="mb-5 text-2xl font-semibold text-content-alt">{title}</h4>
				{/* header end */}

				{/* content start */}
				<DisplayContent content={content} />
				{/* content end */}

				{/* button link start */}
				<div className="mt-5 items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
					<Link href={url}>
						<span className="inline-flex w-full transform items-center justify-center rounded-lg bg-accent px-5 py-2 font-semibold uppercase tracking-wide text-highlight-alt duration-300 hover:bg-accent focus:ring focus:ring-accent focus:ring-opacity-80">
							{buttonText}
						</span>
					</Link>
				</div>
				{/* button link end */}
			</div>
			{/* call to action end */}
		</>
	);
};

export default DisplayCallToAction;
