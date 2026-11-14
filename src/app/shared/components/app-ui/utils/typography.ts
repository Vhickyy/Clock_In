import { TextVariantConfig } from '../app_types/text_types';

export const textVariants = {
  // ─────────────── PUBLIC PAGES ───────────────
  hero: {
    classes:
      'font-heading font-semibold leading-[1.02] tracking-tight text-[clamp(2.75rem,5.5vw,4.5rem)] text-text text-balance',
  },
  heading: {
    classes:
      'font-heading font-semibold leading-tight tracking-tight text-[clamp(2rem,3.8vw,3.25rem)] text-text text-balance',
  },
  title: {
    classes:
      'font-heading font-semibold leading-tight tracking-tight text-xl text-text md:text-2xl',
  },
  subheading: {
    classes: 'font-heading font-medium text-lg leading-snug text-text md:text-xl',
  },
  body: {
    classes: 'font-body text-sm leading-7 text-muted md:text-base',
  },
  eyebrow: {
    classes:
      'font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary md:text-xs',
  },

  // ─────────────── INVITATIONS ───────────────
  invitationTitle: {
    classes:
      'font-heading text-4xl font-medium leading-tight tracking-tight text-text md:text-5xl lg:text-6xl',
  },

  // ─────────────── DASHBOARD: HEADINGS ───────────────
  pageTitle: {
    // "Choose Your Workspace"
    classes: 'text-2xl font-semibold leading-tight text-text md:text-3xl',
  },
  eventTitle: {
    // "Summer Gala 2025" ~40px at 1536, ~28px on mobile
    classes:
      'font-heading font-semibold leading-tight tracking-tight text-text text-[clamp(1.75rem,1.25rem+1.6vw,2.5rem)]',
  },
  panelTitle: {
    // "Guest Directory" ~20px
    classes: 'font-semibold leading-tight text-text text-[clamp(1.125rem,1rem+0.4vw,1.25rem)]',
  },
  panelTitleSm: {
    // "Guest Summary", "Guest Access Rules", "Quick Actions" ~17px
    classes: 'font-semibold leading-tight text-text text-[clamp(1rem,0.9rem+0.2vw,1.0625rem)]',
  },
  sectionTitle: {
    classes: 'font-body text-base font-semibold text-text md:text-lg',
  },

  // ─────────────── DASHBOARD: TEXT ───────────────
  subtitle: {
    // panel descriptions, "Need Help?" body ~13-14px
    classes: 'font-body text-[13px] leading-6 text-muted md:text-sm',
  },
  cardTitle: {
    // date, venue, access rule values, "Need Help?" ~13px
    classes: 'font-body text-xs font-semibold text-text md:text-[13px]',
  },
  cardValue: {
    // 248 / 198 / 32 / 18 ~22px
    classes:
      'font-body font-bold leading-none text-text text-[clamp(1.25rem,1.1rem+0.35vw,1.375rem)]',
  },
  meta: {
    // email, phone, "Group of 3", stat labels ~12px
    classes: 'font-body text-xs leading-5 text-muted',
  },

  // ─────────────── TABLE ───────────────
  tableHead: {
    classes: 'font-body text-xs font-semibold text-text',
  },
  tableCell: {
    // guest name ~12-13px
    classes: 'font-body text-xs font-semibold text-text md:text-[13px]',
  },
  badge: {
    // status pills, invitation type pills, VIP tag
    classes: 'font-body text-[10px] font-medium leading-none md:text-[11px]',
  },

  // ─────────────── CONTROLS ───────────────
  navLink: {
    // tabs, back link ~12-13px
    classes:
      'font-body text-xs font-medium text-text transition-colors hover:text-primary md:text-[13px]',
  },
  button: {
    classes: 'font-body text-xs font-semibold md:text-[13px]',
  },

  // ─────────────── FORMS ───────────────
  formLabel: {
    classes: 'font-body text-sm font-medium text-text',
  },
  formError: {
    classes: 'font-body text-xs font-medium text-error',
  },
} satisfies Record<string, TextVariantConfig>;

export type TextVariant = keyof typeof textVariants;
