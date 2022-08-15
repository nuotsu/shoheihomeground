export default {
	widgets: [
		{ name: 'project-info' },
		{ name: 'project-users' },
		{
			name: 'netlify',
			options: {
				title: 'Netlify',
				sites: [
					{
						title: 'Production — live ',
						apiId: '6d4dadeb-ad63-4df4-bebd-e97ea0ba49a5',
						buildHookId: '62f9d0fa928db275f28fc6d9',
						name: 'Shohei Home Ground',
						// TODO: update URL
						url: 'https://shoheihomeground.netlify.app',
					},
				]
			}
		}
	]
}
