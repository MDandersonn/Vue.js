module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:vue/recommended',//essential
		'standard'
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'vuetify'// 'vue'
	],
	rules: {
		'vue/multi-word-component-names': ['error', {
			ignores: ['Home']
		}],
        'eslint-disable-next-line': "off",
        'eslint-disable': "off"
	}
}