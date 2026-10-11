import { Component, computed, input } from '@angular/core';
import {
  LucideBell,
  LucideDynamicIcon,
  LucideHouse,
  LucideIconInput,
  LucideSettings,
  LucideUser,
  LucideActivity,
  LucideSchool,
  LucideChevronLeft,
  LucideChevronRight,
  LucideBookOpen,
  LucideChartColumn,
  LucideCreditCard,
  LucideCircleX,
  LucideCloudUpload,
  LucidePlus,
  LucideSearch,
  LucideUserPlus,
  LucideTrendingUp,
  LucideBan,
  LucideArrowRightLeft,
  LucideEye,
  LucideEllipsisVertical,
  LucideCircleAlert,
  LucideSquarePen,
  LucideMail,
  LucideLogOut,
  LucideSmartphone,
  LucideMapPin,
  LucideLock,
  LucideArrowLeft,
  LucideArrowRight,
  LucideTrash2,
  LucideShield,
  LucideBuildingComplex,
} from '@lucide/angular';
import { cn } from '../../../utils/cn';

const ICONS = {
  home: LucideHouse,
  users: LucideUser,
  settings: LucideSettings,
  bell: LucideBell,
  activity: LucideActivity,
  school: LucideSchool,
  building: LucideBuildingComplex,
  chevLeft: LucideChevronLeft,
  chevRight: LucideChevronRight,
  bookOpen: LucideBookOpen,
  chartCol: LucideChartColumn,
  creditCard: LucideCreditCard,
  xCircle: LucideCircleX,
  upload: LucideCloudUpload,
  plus: LucidePlus,
  search: LucideSearch,
  userPlus: LucideUserPlus,
  trendingUp: LucideTrendingUp,
  ban: LucideBan,
  arrowRightLeft: LucideArrowRightLeft,
  eye: LucideEye,
  moreVertical: LucideEllipsisVertical,
  alertCircle: LucideCircleAlert,
  edit: LucideSquarePen,
  mail: LucideMail,
  logOut: LucideLogOut,
  smartphone: LucideSmartphone,
  mapPin: LucideMapPin,
  lock: LucideLock,
  arrowLeft: LucideArrowLeft,
  arrowRight: LucideArrowRight,
  shield: LucideShield,
} satisfies Record<string, LucideIconInput>;

export type IconName = keyof typeof ICONS;

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  name = input.required<IconName>();
  size = input(20);
  strokeWidth = input(2);
  className = input<string>();
  cn = cn;

  selectedIcon = computed(() => ICONS[this.name()]);
}
