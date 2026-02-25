export enum Role {
  UNAUTHORIZE = 'unauthorize',
  STANDARD = 'standard',
  QA = 'qa',
  SALES = 'sales',
  PM = 'pm',
  STAFF = 'staff',
  PORTFOLIO_MANAGER = 'portfolio-manager',
}

export const noneRole: string = 'none';

export const privilegedRoles: string[] = [
  Role.STANDARD,
  Role.QA,
  Role.SALES,
  Role.PM,
  Role.STAFF,
  Role.PORTFOLIO_MANAGER,
];

export const allAppRoles: string[] = [...privilegedRoles];
