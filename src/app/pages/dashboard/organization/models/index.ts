export interface Organization {
  id: number;
  name: string;
  initials: string;
  description: string;
  members: number;
  upcomingEvents: number;
  isActive: boolean;
}

export interface Invitation {
  id: number;
  organization: string;
  invitedBy: string;
  invitedAt: string;
  role: string;
}
