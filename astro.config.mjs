// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Guia de Usuario - Company',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/force-light-theme.js',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/x-icon',
						href: '/favicon.ico',
					},
				},
			],
			components: {
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
			},
			sidebar: [
				{
				label: 'Creación De Cuenta',
				items: [
					{ label: 'Registro De La Compañía', slug: 'guides-company/company-registration' },
					{ label: 'Verificación del Codigo', slug: 'guides-company/code-verification' },
					{ label: 'Completar el Perfil de la Compañía', slug: 'guides-company/complete-company-profile' },
				],
			},
			{
				label: 'Publicar Un Empleo (Post A Job)',
				items: [
					{ label: '¿Cómo Publico Un Empleo En Inglés?', slug: 'guides-company/post-job-english' },
					{ label: '¿Cómo Publico Un Empleo En Español?', slug: 'guides-company/post-job-spanish' },
				],
			},
			{
				label: 'Trabajos (Jobs)',
				items: [
					{ label: 'Conociendo La Sección De Trabajos (Knowing The Jobs Section)', slug: 'guides-company/knowing-jobs-section' },
					{ label: 'Detalles Del Trabajo (Job Details)', slug: 'guides-company/job-details' },
					{ label: '¿Cómo Edito Mi Oferta De Trabajo? (How Do I Edit My Job Offer?)', slug: 'guides-company/edit-job-offer' },
				],
			},
			{
				label: 'Candidatos (Candidates)',
				items: [
					{ label: '¿Cómo Busco Un Candidato?', slug: 'guides-company/search-candidate' },
					{ label: '¿Cómo Uso Los Filtros?', slug: 'guides-company/use-filters' },
					{ label: '¿Cómo Creo Un Chat Con Un Candidato?', slug: 'guides-company/create-candidate-chat' },
					{ label: '¿Cómo Creo Una Entrevista Con Un Candidato?', slug: 'guides-company/create-candidate-interview' },
					{ label: '¿Cómo Veo Los Detalles De Los Candidatos?', slug: 'guides-company/view-candidate-details' },
				],
			},
			{
				label: 'Entrevistas (Interviews)',
				items: [
					{ label: '¿Cómo Veo Los Detalles De Las Entrevistas Próximas?', slug: 'guides-company/upcoming-interviews' },
					{ label: '¿Cómo Veo Los Detalles De Las Entrevistas Pasadas?', slug: 'guides-company/past-interviews' },
				],
			},
			{
				label: 'Funciones Premium (Premium Features)',
				items: [
					{ label: '¿Cómo Comprar Un Turbo Recruiter?', slug: 'guides-company/buy-turbo-recruiter' },
					{ label: '¿Cómo Comprar Un Post Booster?', slug: 'guides-company/buy-post-booster' },
					{ label: '¿Cómo Comprar Un Yearly Full Feature?', slug: 'guides-company/buy-yearly-full-feature' },
					{ label: '¿Cómo Comprar Un Lifetime Full Feature?', slug: 'guides-company/buy-lifetime-full-feature' },				{ label: '¿Cómo Activo Un NFT?', slug: 'guides-company/activate-nft' },				],
			},
			{
				label: 'Analítica (Analytics)',
				items: [
					{ label: 'Conociendo Las Analíticas', slug: 'guides-company/understanding-analytics' },
				],
			},
			{
				label: 'Chat (Chat)',
				items: [
					{ label: '¿Cómo Busco Un Candidato?', slug: 'guides-company/chat-search-candidate' },
					{ label: '¿Cómo Envío Mensajes?', slug: 'guides-company/chat-send-messages' },
				],
			},
			{
				label: 'Ayuda (Help)',
				items: [
					{ label: 'Centro De Ayuda', slug: 'guides-company/help-center' },
					{ label: 'Contactar Soporte', slug: 'guides-company/contact-support' },
				],
			},
			{
				label: 'Configuración De Cuenta (Account Settings)',
				items: [
					{ label: 'Seguridad Y Acceso', slug: 'guides-company/security-login' },
					{ label: 'Notificaciones', slug: 'guides-company/notifications' },
					{ label: 'Privacidad Y Datos', slug: 'guides-company/privacy-data' },
				],
			},
			{
				label: 'Configuración De Empresa (Company Settings)',
				items: [
					{ label: '¿Cómo Edito Mi Perfil De Compañía?', slug: 'guides-company/edit-company-profile' },
					{ label: '¿Cómo Agrego Usuarios A Mi Compañía?', slug: 'guides-company/add-company-users' },
				],
			},
			{
				label: 'Facturación Y Facturas (Billing and Invoices)',
				items: [
					{ label: 'Conociendo Facturación Y Facturas', slug: 'guides-company/knowing-billing-invoices' },
				],
			},
			{
				label: 'Billetera (Wallet)',
				items: [
					{ label: 'NFTs Y Activos Transferibles (NFT & Transferable Assets)', slug: 'guides-company/nft-transferable-assets' },
					{ label: 'Tokens (Tokens)', slug: 'guides-company/tokens' },
					{ label: 'Actividad (Activity)', slug: 'guides-company/wallet-activity' },
					{ label: '¿Cómo Activo la Autenticación de Dos Factores (Two-Factor Authentication - 2FA)?', slug: 'guides-company/enable-2fa' },
					{ label: '¿Cómo Envío Assets (Activos)?', slug: 'guides-company/send-assets' },
					{ label: '¿Cómo Recibo Assets (Activos)?', slug: 'guides-company/receive-tokens' },
				],
			},
		],
	}),
],
});
