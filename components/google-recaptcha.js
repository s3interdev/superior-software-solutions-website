'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const GoogleRecaptcha = ({ children }) => (
	<GoogleReCaptchaProvider
		reCaptchaKey={sitekey}
		scriptProps={{
			async: false,
			defer: false,
			appendTo: 'head',
			nonce: undefined,
		}}
	>
		{children}
	</GoogleReCaptchaProvider>
);

export default GoogleRecaptcha;
