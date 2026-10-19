import { IconName } from '../icon/icon';
import { textVariants } from '../utils/typography';

export type TextVariant = keyof typeof textVariants;

export interface TextProps {
  variant?: TextVariant;
  class?: string;
  text: string;
}

export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export interface BtnProps {
  textProps: TextProps;
  btn: {
    type: 'button' | 'submit' | 'reset';
    disabled: boolean;
    loading: boolean;
  };
}

// export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label';

export type TextVariantConfig = {
  tag: keyof HTMLElementTagNameMap;
  classes: string;
};

export interface Crumb {
  label: string;
  route?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
