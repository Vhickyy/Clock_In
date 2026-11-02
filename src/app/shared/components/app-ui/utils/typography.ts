import { TextVariantConfig } from '../app_types/text_types';

export const textVariants = {
  // GLOBAL / PUBLIC PAGES
  hero: {
    classes:
      'font-heading font-extrabold leading-tight tracking-tight text-[clamp(40px,5.4vw,72px)]',
  },

  heading: {
    classes:
      'font-heading font-semibold leading-tight tracking-tight text-[clamp(30px,3.6vw,44px)]',
  },

  subheading: {
    classes: 'font-heading font-semibold text-base leading-snug md:text-xl lg:text-2xl',
  },

  body: {
    classes: 'font-body text-base leading-7 text-muted',
  },

  eyebrow: {
    classes: 'font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary',
  },

  // DASHBOARD LAYOUT
  pageTitle: {
    classes: 'font-heading font-bold text-2xl tracking-tight text-text md:text-3xl',
  },

  pageSubtitle: {
    classes: 'font-body text-sm leading-6 text-muted md:text-base',
  },

  sectionTitle: {
    classes: 'font-heading font-semibold text-base text-text md:text-lg',
  },

  sectionAction: {
    classes:
      'font-body cursor-pointer text-xs font-semibold text-primary hover:underline md:text-sm',
  },

  // CARDS
  cardTitle: {
    classes: 'font-body font-semibold text-[14px] text-text',
  },

  cardValue: {
    classes: 'font-heading text-2xl font-bold leading-none tracking-tight text-text md:text-3xl',
  },

  cardTrend: {
    classes: 'font-body text-xs font-medium',
  },

  // TABLES
  tableHeader: {
    classes: 'font-body text-[11px] font-semibold uppercase tracking-wider text-muted',
  },

  tableCellMuted: {
    classes: 'font-body text-sm text-muted',
  },

  // LISTS
  listMeta: {
    classes: 'font-body text-[11px] text-muted',
  },

  // BADGES AND TAGS
  badge: {
    classes: 'font-body text-[11px] font-semibold',
  },

  tag: {
    classes: 'font-body text-[10px] font-bold uppercase tracking-wider',
  },

  // FORMS
  formLabel: {
    classes: 'font-body text-sm font-medium text-text',
  },

  formError: {
    classes: 'font-body text-xs font-medium text-error',
  },

  // INVITATIONS
  invitationTitle: {
    classes:
      'font-heading text-3xl font-semibold leading-tight tracking-tight text-text md:text-5xl',
  },

  // MISC
  timestamp: {
    classes: 'font-body text-[10px] text-muted',
  },

  emptyState: {
    classes: 'font-body text-sm leading-6 text-center text-muted',
  },
} satisfies Record<string, TextVariantConfig>;

export type TextVariant = keyof typeof textVariants;
