const DisplayContent = ({ content }) => {
	return (
		<>
			{/* content start */}
			<div
				dangerouslySetInnerHTML={{ __html: content }}
				className="prose max-w-none prose-headings:text-content-alt prose-h3:text-lg prose-a:text-accent prose-strong:text-content-alt"
			/>
			{/* content start */}
		</>
	);
};

export default DisplayContent;
