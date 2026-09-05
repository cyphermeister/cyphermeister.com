/**
 * Facts shared by the Terms & Conditions and Privacy Policy pages.
 * Update a value here and both documents stay in sync.
 *
 * Deliberately limited to public-facing business identifiers: the company name,
 * the contact mailbox, and the GitHub organization. Do not add personal names,
 * street addresses, or the state of organization.
 */
export interface Company {
	legalName: string;
	shortName: string;
	siteUrl: string;
	domain: string;
	contactEmail: string;
	githubUrl: string;
}

export const company: Company = {
	legalName: 'Cyphermeister LLC',
	shortName: 'Cyphermeister',
	siteUrl: 'https://cyphermeister.com',
	domain: 'cyphermeister.com',
	contactEmail: 'contact@cyphermeister.com',
	githubUrl: 'https://github.com/cyphermeister'
};

export interface LegalDocumentMeta {
	title: string;
	path: string;
	/** ISO date (YYYY-MM-DD) of the most recent revision. */
	lastUpdated: string;
}

export const legalDocuments = {
	terms: { title: 'Terms & Conditions', path: '/terms', lastUpdated: '2026-09-05' },
	privacy: { title: 'Privacy Policy', path: '/privacy', lastUpdated: '2026-09-05' }
} satisfies Record<string, LegalDocumentMeta>;

/** Formats an ISO date as, for example, "September 5, 2026". */
export function formatLegalDate(iso: string): string {
	return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(
		new Date(`${iso}T00:00:00Z`)
	);
}
