import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { Organization } from './models';

@Service()
export class OrganizationService {
  organizationsRes = httpResource<Organization[]>(() => '/data/organization.json');
}
