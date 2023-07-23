interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Data Analyst', 'Finance Manager', 'Compliance Officer', 'Fund Collector', 'Donor'],
  tenantName: 'Nonprofit',
  applicationName: 'Dhananjaya',
  addOns: [],
};
