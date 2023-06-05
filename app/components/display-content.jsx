const DisplayContent = ({ content }) => {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: content }}
			className="prose max-w-none prose-headings:text-content-alt prose-h3:text-lg prose-a:text-accent prose-strong:text-content-alt"
		/>
	);
};

export default DisplayContent;
