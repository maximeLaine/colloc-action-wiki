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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/maxlaine/colloc-action-wiki' }],
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
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
