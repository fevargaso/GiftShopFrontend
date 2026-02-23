import { EnabledStatus } from '../enums/enabled-status';

export interface ExampleModel {
  title: string;
  description: string;
  status: EnabledStatus;
  dateCreated: Date;
  dateUpdated: Date;
}
