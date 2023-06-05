import Link from 'next/link';

import { DisplayImage } from './';

const NavFooter = ({
	logo: { url: lUrl },
	name,
	navFooterAction: {
		navigation: { title: nfanTitle, link: nfanLink },
	},
	navFooterBusiness: {
		navigation: { title: nfbnTitle, link: nfbnLink },
	},
	navFooterInformation: {
		navigation: { title: nfinTitle, link: nfinLink },
	},
	navFooterLegal: {
		navigation: { title: nflnTitle, link: nflnLink },
	},
	socialMedia: { lists },
	tagLine,
	tagLineSubtitle,
}) => {
	/* declare variables */
	const currentYear = new Date().getFullYear();

	return (
		<>
			{/* navigation footer start */}
			<div className="container mx-auto px-4 pt-16 md:px-24 lg:px-8">
				{/* grid container start */}
				<div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-6">
					{/* logo section start */}
					<div className="md:max-w-md lg:col-span-2">
						<div>
							<Link href="/" className="inline-flex items-center">
								<div className="relative h-8 w-8">
									<DisplayImage imgSrc={lUrl} imgAlt={name} />
								</div>

								<span className="ml-2 text-lg tracking-wide text-content-alt md:text-xl">
									{name}
								</span>
							</Link>
						</div>
						<div className="mt-4">
							<p className="text-sm">{tagLine}</p>
							<p className="mt-4 text-sm">{tagLineSubtitle}</p>
						</div>
					</div>
					{/* logo section end */}

					<div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
						{/* navigation footer information section start */}
						<div>
							<p className="font-semibold tracking-wide text-content-alt">{nfinTitle}</p>
							<ul className="mt-2 space-y-2">
								{nfinLink.map((link, index) => (
									<li key={index}>
										<Link href={link.url}>
											<span className="cursor-pointer transition-colors duration-300 hover:text-content-alt">
												{link.text}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* navigation footer information section end */}

						{/* navigation footer business section start */}
						<div>
							<p className="font-semibold tracking-wide text-content-alt">{nfbnTitle}</p>
							<ul className="mt-2 space-y-2">
								{nfbnLink.map((link, index) => (
									<li key={index}>
										<Link href={link.url}>
											<span className="cursor-pointer transition-colors duration-300 hover:text-content-alt">
												{link.text}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* navigation footer business section end */}

						{/* navigation footer action section start */}
						<div>
							<p className="font-semibold tracking-wide text-content-alt">{nfanTitle}</p>
							<ul className="mt-2 space-y-2">
								{nfanLink.map((link, index) => (
									<li key={index}>
										<Link href={link.url}>
											<span className="cursor-pointer transition-colors duration-300 hover:text-content-alt">
												{link.text}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* navigation footer action section end */}

						{/* navigation footer legal section start */}
						<div>
							<p className="font-semibold tracking-wide text-content-alt">{nflnTitle}</p>
							<ul className="mt-2 space-y-2">
								{nflnLink.map((link, index) => (
									<li key={index}>
										<Link href={link.url}>
											<span className="cursor-pointer transition-colors duration-300 hover:text-content-alt">
												{link.text}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* navigation footer legal section end */}
					</div>
				</div>
				{/* grid container end */}

				{/* basement section start */}
				<div className="flex flex-col justify-between border-t pb-10 pt-5 sm:flex-row">
					{/* copyright section start */}
					<p className="text-sm">
						© Copyright {currentYear} {name}.
					</p>
					{/* copyright section end */}

					{/* social media links section start */}
					<div className="mt-4 flex items-center space-x-4 sm:mt-0">
						{/* social media icons start */}
						<ul className="m-2 flex items-center space-x-4">
							{lists.map((platform, index) => (
								<li key={index}>
									<Link href={platform.subtitle}>
										<div className="relative h-6 w-6 cursor-pointer md:h-5 md:w-5">
											<DisplayImage imgSrc={platform.image.url} imgAlt={platform.title} />
										</div>
									</Link>
								</li>
							))}
						</ul>
						{/* social media icons end */}
					</div>
					{/* social media links section end */}
				</div>
				{/* basement section end */}
			</div>
			{/* navigation footer end */}
		</>
	);
};

export default NavFooter;
