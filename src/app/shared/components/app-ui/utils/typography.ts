import { TextVariant, TextVariantConfig } from '../app_types/text_types';

export const textVariants: Record<string, TextVariantConfig> = {
  // GLOBAL / PUBLIC PAGES
  hero: {
    tag: 'h1',
    classes:
      'font-heading font-extrabold text-4xl leading-tight tracking-tight md:text-6xl lg:text-7xl',
  },

  heading: {
    tag: 'h2',
    classes: 'font-heading font-semibold text-3xl leading-tight tracking-tight md:text-4xl',
  },

  subheading: {
    tag: 'h3',
    classes: 'font-heading font-semibold text-base leading-snug md:text-xl lg:text-2xl',
  },

  body: {
    tag: 'p',
    classes: 'font-body text-base leading-7 text-muted',
  },

  lead: {
    tag: 'p',
    classes: 'font-body text-lg leading-8 text-muted',
  },

  eyebrow: {
    tag: 'span',
    classes: 'font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary',
  },

  // DASHBOARD LAYOUT
  pageTitle: {
    tag: 'h1',
    classes: 'font-heading font-bold text-2xl tracking-tight text-text md:text-3xl',
  },

  pageSubtitle: {
    tag: 'p',
    classes: 'font-body text-sm leading-6 text-muted md:text-base',
  },

  sectionTitle: {
    tag: 'h2',
    classes: 'font-heading font-semibold text-base text-text md:text-lg',
  },

  sectionDescription: {
    tag: 'p',
    classes: 'font-body text-sm leading-6 text-muted',
  },

  sectionAction: {
    tag: 'span',
    classes:
      'font-body cursor-pointer text-xs font-semibold text-primary hover:underline md:text-sm',
  },

  // CARDS
  cardTitle: {
    tag: 'h3',
    classes: 'font-body font-semibold text-sm text-text',
  },

  cardValue: {
    tag: 'p',
    classes: 'font-heading text-2xl font-bold leading-none tracking-tight text-text md:text-3xl',
  },

  cardLabel: {
    tag: 'p',
    classes: 'font-body text-xs leading-5 text-muted',
  },

  cardTrend: {
    tag: 'p',
    classes: 'font-body text-xs font-medium',
  },

  cardText: {
    tag: 'p',
    classes: 'font-body text-sm leading-6 text-muted',
  },

  // TABLES
  tableHeader: {
    tag: 'span',
    classes: 'font-body text-[11px] font-semibold uppercase tracking-wider text-muted',
  },

  tableCell: {
    tag: 'span',
    classes: 'font-body text-sm text-text',
  },

  tableCellMuted: {
    tag: 'span',
    classes: 'font-body text-sm text-muted',
  },

  // LISTS
  listTitle: {
    tag: 'p',
    classes: 'font-body text-sm font-semibold text-text',
  },

  listSubtitle: {
    tag: 'p',
    classes: 'font-body text-xs leading-5 text-muted',
  },

  listMeta: {
    tag: 'span',
    classes: 'font-body text-[11px] text-muted',
  },

  listValue: {
    tag: 'span',
    classes: 'font-body text-sm font-semibold text-text',
  },

  // BADGES AND TAGS
  badge: {
    tag: 'span',
    classes: 'font-body text-[11px] font-semibold',
  },

  tag: {
    tag: 'span',
    classes: 'font-body text-[10px] font-bold uppercase tracking-wider',
  },

  // HERO BANNERS
  bannerTitle: {
    tag: 'h2',
    classes: 'font-heading text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl',
  },

  bannerSubtitle: {
    tag: 'p',
    classes: 'font-body text-sm leading-6 md:text-base',
  },

  bannerStat: {
    tag: 'p',
    classes: 'font-heading text-xl font-bold leading-none md:text-2xl',
  },

  bannerStatLabel: {
    tag: 'p',
    classes: 'font-body text-[11px] leading-5',
  },

  // FORMS
  formLabel: {
    tag: 'label',
    classes: 'font-body text-sm font-medium text-text',
  },

  formHint: {
    tag: 'p',
    classes: 'font-body text-xs leading-5 text-muted',
  },

  formError: {
    tag: 'p',
    classes: 'font-body text-xs font-medium text-error',
  },

  inputText: {
    tag: 'span',
    classes: 'font-body text-sm text-text',
  },

  // INVITATIONS AND GUEST MANAGEMENT
  invitationTitle: {
    tag: 'h1',
    classes:
      'font-heading text-3xl font-semibold leading-tight tracking-tight text-text md:text-5xl',
  },

  invitationSubtitle: {
    tag: 'p',
    classes: 'font-body text-sm leading-6 text-muted md:text-base',
  },

  guestName: {
    tag: 'p',
    classes: 'font-body text-sm font-semibold text-text',
  },

  guestMeta: {
    tag: 'p',
    classes: 'font-body text-xs text-muted',
  },

  // CHARTS
  chartValue: {
    tag: 'p',
    classes: 'font-heading text-xl font-bold text-text md:text-2xl',
  },

  chartLabel: {
    tag: 'p',
    classes: 'font-body text-xs text-muted',
  },

  chartGrowth: {
    tag: 'p',
    classes: 'font-body text-xs font-semibold',
  },

  // NAVIGATION
  navLabel: {
    tag: 'span',
    classes: 'font-body text-sm font-medium',
  },

  navSection: {
    tag: 'span',
    classes: 'font-body text-[10px] font-bold uppercase tracking-widest text-muted',
  },

  // MISC
  buttonText: {
    tag: 'span',
    classes: 'font-body text-sm font-semibold',
  },

  timestamp: {
    tag: 'span',
    classes: 'font-body text-[10px] text-muted',
  },

  emptyState: {
    tag: 'p',
    classes: 'font-body text-sm leading-6 text-center text-muted',
  },

  footerHeading: {
    tag: 'h3',
    classes: 'font-heading text-sm font-semibold text-text',
  },

  footerText: {
    tag: 'p',
    classes: 'font-body text-sm leading-6 text-muted',
  },
} satisfies Record<TextVariant, TextVariantConfig>;
