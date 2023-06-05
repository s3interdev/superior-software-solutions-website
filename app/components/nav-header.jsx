'use client';

import Link from 'next/link';
import { useState } from 'react';

import { DisplayImage } from '.';

const NavHeader = ({ logo: { url }, name, navHeader: { navigation } }) => {
	/* declare variables */
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		/* navigation header start */
		<nav className="container mx-auto border-b px-4 py-5 md:px-24 lg:px-8">
			<div className="relative flex items-center justify-between">
				{/* logo area start */}
				<div>
					<Link href="/" className="inline-flex items-center">
						<div className="relative h-8 w-8">
							<DisplayImage imgSrc={url} imgAlt={name} />
						</div>

						<span className="ml-2 text-lg tracking-wide text-content-alt md:text-xl">
							{name}
						</span>
					</Link>
				</div>
				{/* logo area end */}

				{/* menu area start */}
				<ul className="hidden items-center space-x-8 lg:flex">
					{navigation.map((item) => (
						<li key={item.title}>
							<Link href={item.link.url}>
								<span className="tracking-wide transition-colors duration-300 hover:text-content-alt">
									{item.link.text}
								</span>
							</Link>
						</li>
					))}
				</ul>
				{/* menu area end */}

				{/* call to action button start */}
				<ul className="hidden items-center space-x-8 lg:flex">
					<li>
						<Link href="/services/request-a-consult">
							<span className="transform rounded-lg bg-highlight-alt px-5 py-2 font-medium tracking-wide text-accent transition-colors duration-300 hover:bg-accent-alt focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-80">
								Request a consult
							</span>
						</Link>
					</li>
				</ul>
				{/* call to action button end */}

				{/* mobile menu items start */}
				<div className="lg:hidden">
					{/* hamburger menu start */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="-mr-1 rounded p-2 transition duration-200 hover:bg-content focus:bg-content focus:shadow focus:outline-none"
						onClick={() => setIsMenuOpen(true)}
					>
						<svg className="w-5 text-content" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							/>
							<path
								fill="currentColor"
								d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
							/>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							/>
						</svg>
					</button>
					{/* hamburger menu end */}

					{/* mobile area start */}
					{isMenuOpen && (
						<div className="absolute left-0 top-0 w-full">
							<div className="rounded border bg-highlight-alt p-5 shadow">
								<div className="mb-4 flex items-center justify-between">
									{/* logo area start */}
									<div>
										<Link href="/" className="inline-flex items-center">
											<div className="relative h-8 w-8">
												<DisplayImage imgSrc={url} imgAlt={name} />
											</div>

											<span className="ml-2 tracking-wide text-content-alt">{name}</span>
										</Link>
									</div>
									{/* logo area end */}

									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className="-mr-2 -mt-2 rounded p-2 transition duration-300 hover:bg-content focus:bg-content focus:shadow focus:outline-none"
											onClick={() => setIsMenuOpen(false)}
										>
											<svg className="w-5 text-content-alt" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>

								{/* menu area end */}
								<nav>
									<ul className="space-y-4">
										{navigation.map((item) => (
											<li key={item.title}>
												<Link href={item.link.url}>
													<span
														onClick={() => setIsMenuOpen(false)}
														className="tracking-wide transition-colors duration-300 hover:text-content-alt"
													>
														{item.link.text}
													</span>
												</Link>
											</li>
										))}

										<Link href="/services/request-a-consult">
											<span
												onClick={() => setIsMenuOpen(false)}
												className="mt-5 inline-flex h-10 w-full items-center justify-center rounded bg-accent px-6 font-medium tracking-wide text-highlight-alt shadow-md transition duration-300 hover:bg-accent-alt focus:shadow focus:outline-none"
											>
												Request a consult
											</span>
										</Link>
									</ul>
								</nav>
								{/* menu area end */}
							</div>
						</div>
					)}
					{/* mobile area end */}
				</div>
				{/* mobile menu items end */}
			</div>
		</nav>
		/* navigation header end */
	);
};

export default NavHeader;
