import { IconName } from '../../../../../../shared/components/app-ui/icon/icon';

export interface IEventOverviewData {
  tabs: {
    label: string;
    value: string;
  }[];
  quickActions: {
    title: string;
    description: string;
    icon: IconName;
    bgStyle: string;
    iconStyle: string;
    action: string;
  }[];
  support: {
    title: string;
    description: string;
    action: string;
  };
}
