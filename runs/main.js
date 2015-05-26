module.exports = ($translate) => {
	let loader = window.loader;

	const setProgress = loader.setProgress;
	loader.setProgress = (text, progress) => {
		setProgress($translate.instant('PLUGIN.SAMPLE.TEXT'), progress);
	};

	const incProgress = loader.incProgress;
	loader.incProgress = (text, progress) => {
		incProgress($translate.instant('PLUGIN.SAMPLE.TEXT'), progress);
	};
};