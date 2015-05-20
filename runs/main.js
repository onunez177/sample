module.exports = () => {
	let loader = window.loader;

	const setProgress = loader.setProgress;
	loader.setProgress = (text, progress) => {
		setProgress(';)', progress);
	};

	const incProgress = loader.incProgress;
	loader.incProgress = (text, progress) => {
		incProgress('o_O', progress);
	};
};