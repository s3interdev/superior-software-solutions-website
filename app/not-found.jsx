import Link from 'next/link';

const NotFound = () => {
	return (
		<>
			<div className="container mx-auto flex min-h-[75%] items-center px-6 py-12">
				<div>
					<p className="text-sm font-medium text-accent">404 error</p>
					<h1 className="mt-3 text-2xl font-semibold text-content-alt md:text-3xl">
						We can't find the page you are looking for
					</h1>
					<p className="mt-4">
						Sorry, the page you are looking for doesn't exist or has been moved.
					</p>
					<div class="mt-6 flex items-center gap-x-3">
						<div className="mt-5 items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
							<Link href="/">
								<span className="inline-flex w-full items-center justify-center rounded bg-accent px-5 py-2 font-semibold uppercase text-highlight-alt duration-300 hover:bg-accent focus:ring focus:ring-accent focus:ring-opacity-80">
									Go To Homepage
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
