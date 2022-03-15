import svg from 'rollup-plugin-svg-import';

export default {
	input: './input.js',
	output: {
		file: './output.js',
		format: 'cjs'
	},
	plugins: [
		svg({
			// process SVG to DOM Node or String. Default: false
			stringify: false
		})
	]
};
