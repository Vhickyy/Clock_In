export type EventStatus = 'draft' | 'active' | 'completed' | 'cancelled';

export type AccessControl = 'unique_code_per_guest';

export interface EventOverview {
  id: string;
  name: string;
  status: EventStatus;
  category: string;
  tags: string[];
  theme: string;
  coverImage: string;

  schedule: EventSchedule;
  venue: EventVenue;

  description: string;
  additionalNotes: string;

  capacity: EventCapacity;
  invitations: EventInvitations;
  accessRules: EventAccessRules;
  checkInConfiguration: CheckInConfiguration;
  staff: EventStaff;

  updatedAt: string;
}

export interface EventSchedule {
  date: string;
  startTime: string;
  endTime: string;
  timezone: string;
}

export interface EventVenue {
  name: string;
  address: string;
  city: string;
  country: string;
}

export interface EventCapacity {
  total: number;
  registered: number;
  checkedIn: number;
}

export interface EventInvitations {
  type: InvitationType;
  pending: number;
  accessControl: AccessControl;
}

export interface EventAccessRules {
  allowedGroups: string[];
}

export interface CheckInConfiguration {
  method: InvitationType;
  duplicatePrevention: boolean;
  realTimeUpdates: boolean;
}

export interface EventStaff {
  totalAssigned: number;
  maximumAllowed: number;
  roles: string[];
  members: EventStaffMember[];
}

export interface EventStaffMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

// Guests
// guest.model.ts

export type GuestStatus = 'checked_in' | 'pending' | 'invited';

export type InvitationType = 'QR Code' | 'Manual Code';

export type GuestGroup = 'VIP Guests' | 'General' | 'Staff' | 'Media';

export interface Guest {
  id: number;
  name: string;
  isVip: boolean;
  email: string;
  phone: string;
  invitationType: InvitationType;
  group: GuestGroup;
  groupSize: number;
  status: GuestStatus;
  checkInTime: string | null;
  avatarUrl?: string; // optional, fall back to initials when missing
}

export interface EventDetails {
  name: string;
  status: string;
  date: string;
  time: string;
  venue: string;
  capacity: number;
}

export interface GuestSummary {
  total: number;
  checkedIn: number;
  pending: number;
  invited: number;
}

export interface AccessRules {
  invitationType: string;
  accessControl: string;
  allowedGroups: string[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
}

export interface GuestDirectoryMeta {
  event: EventDetails;
  summary: GuestSummary;
  accessRules: AccessRules;
  pagination: Pagination;
}
