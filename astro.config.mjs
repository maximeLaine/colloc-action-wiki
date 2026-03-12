// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '🐉 Colloc-Action',
			description: 'Le wiki officiel de la campagne DnD Colloc-Action',
			defaultLocale: 'fr',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/maximeLaine/colloc-action-wiki' }],
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap',
					},
				},
			],
			sidebar: [
				{
					label: '🏠 Accueil',
					link: '/',
				},
				{
					label: '🧙 Personnages',
					items: [
						{ label: "Vue d'ensemble", slug: 'personnages' },
						{
							label: '⚔️ Joueurs (PJ)',
							items: [
								{ label: 'Kova', slug: 'personnages/kova' },
								{ label: 'Upick', slug: 'personnages/upick' },
							],
						},
						{
							label: '🎭 PNJ',
							items: [
								{ label: 'Tous les PNJ', slug: 'personnages/pnj-importants' },
							],
						},
					],
				},
				{
					label: '📜 Sessions',
					autogenerate: { directory: 'sessions' },
				},
				{
					label: '🗺️ Lieux',
					autogenerate: { directory: 'lieux' },
				},
				{
					label: '📚 Lore',
					autogenerate: { directory: 'lore' },
				},
				{
					label: '⚔️ Factions',
					autogenerate: { directory: 'factions' },
				},
			],
			pagination: false,
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
