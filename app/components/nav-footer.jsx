import Link from 'next/link';

import { DisplayImage } from './';

const NavFooter = ({
	logo: { url: lUrl },
	name,
	navFooterAction: {
		navigation: {
			title: nfanTitle,
			link: { text: nfanlText, url: nfanlUrl },
		},
	},
	navFooterInformation: {
		navigation: {
			title: nfinTitle,
			link: { text: nfinlText, url: nfinlUrl },
		},
	},
	navFooterLegal: {
		navigation: {
			title: nflnTitle,
			link: { text: nflnlText, url: nflnlUrl },
		},
	},
	socialMedia: { lists },
	tagLine,
}) => {
	/* declare variables */
	const currentYear = new Date().getFullYear();

	return (
		<>
			<div>Navigation Footer</div>
		</>
	);
};

export default NavFooter;
