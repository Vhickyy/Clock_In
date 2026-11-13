export interface EventTab {
  label: string;
  value: string;
}

export interface EventQuickAction {
  title: string;
  description: string;
  icon: string;
  color: string;
  route: string;
}

export interface EventStatusCard {
  title: string;
  value: string;
  icon: string;
  progress?: number;
}
