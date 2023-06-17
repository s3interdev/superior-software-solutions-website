import Link from 'next/link';

import { DisplayContent, DisplayImage } from '@/components/';

const DisplayCallToAction = ({ buttonText, content, image, title, url }) => {
	return (
		<>
			{/* call to action start */}
			<section className="bg-highlight-alt lg:flex lg:justify-center lg:py-12">
				<div className="overflow-hidden rounded border bg-highlight-alt shadow-lg lg:mx-8 lg:flex lg:w-full lg:max-w-6xl">
					{/* image start */}
					<div className="relative h-80 w-full lg:w-1/2">
						<DisplayImage imgSrc={image} imgAlt={title} />
					</div>
					{/* image end */}

					{/* content area start */}
					<div className="max-w-xl px-6 py-12 lg:w-1/2 lg:max-w-5xl">
						{/* heading start */}
						<h3 className="text-2xl font-semibold text-content-alt">{title}</h3>
						{/* heading end */}

						{/* content start */}
						<div className="mt-5">
							<DisplayContent content={content} />
						</div>
						{/* content end */}

						{/* button link start */}
						<div className="mt-8">
							<Link href={url}>
								<span className="inline-flex w-full transform items-center justify-center rounded-lg bg-accent px-5 py-2 font-semibold uppercase tracking-wide text-highlight-alt duration-300 hover:bg-accent focus:ring focus:ring-accent focus:ring-opacity-80">
									{buttonText}
								</span>
							</Link>
						</div>
						{/* button link end */}
					</div>
					{/* content area end */}
				</div>
			</section>
			{/* call to action end */}
		</>
	);
};

export default DisplayCallToAction;
