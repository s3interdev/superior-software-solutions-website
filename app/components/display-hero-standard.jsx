const DisplayHeroStandard = ({ title, subtitle, backgroundColor }) => {
	return (
		<>
			{/* hero start */}
			<div className={`rounded ${backgroundColor}`}>
				<div className="container mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20">
					<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
						<div className="mb-16 flex flex-col sm:mb-0 sm:text-center">
							<div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
								{/* title start */}
								<h2 className="mb-6 max-w-lg text-3xl font-bold uppercase leading-none tracking-tight text-content-alt sm:text-4xl md:mx-auto">
									<span className="relative inline-block">
										<svg
											viewBox="0 0 52 24"
											fill="currentColor"
											className="absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-content-alt sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
										>
											<defs>
												<pattern
													id="700c93bf-0068-4e32-aafe-ef5b6a647708"
													x="0"
													y="0"
													width=".135"
													height=".30"
												>
													<circle cx="1" cy="1" r="0.7" />
												</pattern>
											</defs>
											<rect
												fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
												width="52"
												height="24"
											/>
										</svg>
									</span>{' '}
									{title}
								</h2>
								{/* title end */}

								{/* subtitle start */}
								<p className="text-content-alt md:text-lg">{subtitle}</p>
								{/* subtitle end */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* hero end */}
		</>
	);
};

export default DisplayHeroStandard;
