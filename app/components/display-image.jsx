import Image from 'next/image';

const DisplayImage = ({ imgSrc, imgAlt }) => {
	return (
		<Image
			src={imgSrc}
			alt={imgAlt}
			priority
			fill
			quality={89}
			sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
			style={{ borderRadius: '4px', objectFit: 'cover', objectPosition: 'center' }}
		/>
	);
};

export default DisplayImage;
