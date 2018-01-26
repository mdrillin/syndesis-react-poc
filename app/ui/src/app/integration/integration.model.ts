import { Action, BaseEntity, Connection, User } from '@syndesis/ui/model';

export interface Step extends BaseEntity {
  action: Action;
  connection: Connection;
  name: string;
  configuredProperties: {};
  stepKind: string;
  id: string;
}
export type Steps = Array<Step>;

export const DRAFT = 'Draft';
export const PENDING = 'Pending';
export const ACTIVE = 'Active';
export const INACTIVE = 'Inactive';
export const UNDEPLOYED = 'Undeployed';

export type IntegrationState = 'Draft' | 'Pending' | 'Active' | 'Inactive' | 'Undeployed';

export interface Integration extends BaseEntity {
  description?: string;
  statusMessage: string;
  token: string;
  steps: Array<Step>;
  gitRepo: string;
  users: Array<User>;
  connections: Array<Connection>;
  userId: string;
  desiredStatus: IntegrationState;
  currentStatus: IntegrationState;
  stepsDone: Array<string>;
  lastUpdated: string;
  createdDate: string;
  timesUsed: number;
  id: string;
  tags: Array<string>;
  name: string;
  deploymentId?: number;
  version?: number;
}
export type Integrations = Array<Integration>;

export interface IntegrationDeploymentSpec {
  connections: Array<Connection>;
  name: string;
  resources: Array<any>;
  steps: Array<Step>;
  tags: Array<any>;
}

export interface IntegrationDeployment extends BaseEntity {
  createdDate: number;
  name: string;
  lastUpdated: number;
  integrationId: string;
  version: number;
  currentState: IntegrationState;
  targetState: IntegrationState;
  currentMessage?: string;
  targetMessage?: string;
  spec: IntegrationDeploymentSpec;
  timesUsed: number;
  [attr: string]: any;
}

export function createStep() {
  return {} as Step;
}

export function createIntegration() {
  return {} as Integration;
}
