import { Analytics } from '@vercel/analytics/react';

import { GoogleRecaptcha, NavFooter, NavHeader } from './components/';
import { getDataGlobal } from './lib/retrieval';

import './globals.css';

export const metadata = {
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
	},
	title: 'S3 | Superior Software Solutions',
	description:
		'Superior Software Solutions: Ignite innovation with dynamic websites, web apps, and Linux cloud solutions. Transform businesses with cutting-edge technology.',
};

const RootLayout = async ({ children }) => {
	/* fetch global data */
	const {
		logo,
		name,
		navFooterAction,
		navFooterInformation,
		navFooterLegal,
		navHeader,
		socialMedia,
		tagLine,
	} = await getDataGlobal();

	return (
		<html lang="en">
			<body className="scroll-smooth font-sans text-content antialiased">
				<header>
					<NavHeader logo={logo} name={name} navHeader={navHeader} />
				</header>

				<main>
					<GoogleRecaptcha>
						{children}
						<Analytics />
					</GoogleRecaptcha>
				</main>

				<footer>
					<NavFooter
						logo={logo}
						name={name}
						navFooterAction={navFooterAction}
						navFooterInformation={navFooterInformation}
						navFooterLegal={navFooterLegal}
						socialMedia={socialMedia}
						tagLine={tagLine}
					/>
				</footer>
			</body>
		</html>
	);
};

export default RootLayout;
