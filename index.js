
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';


import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {

	title: __("Gutenberg Custom Post Blog"),
	icon: {
		src: 'admin-plugins',
		background: '#120A8F',
		foreground:"#FFF"
	},
	keywords: [
		__("custom"),
		__("blog")
	],
	category: 'common',
	supports: {
		html:false
	},

	edit: Edit,
	save,
} );


/*
* Child block import
*/

import './blocks';