const RATE_V1 = 100;
const RATE_V2 = 200;

const invoices = [
  {
    date: "31 August 2023",
    days: 25,
    rate: RATE_V1,
    billNumber: "SS_23-24_08",
  },
  {
    date: "30 September 2023",
    days: 24,
    rate: RATE_V1,
    billNumber: "SS_23-24_09",
  },
  {
    date: "31 October 2023",
    days: 23,
    rate: RATE_V2,
    billNumber: "SS_23-24_10",
  },
  {
    date: "30 November 2023",
    days: 23,
    rate: RATE_V2,
    billNumber: "SS_23-24_11",
  },
];

export const latest = invoices[invoices.length - 1];

export const companyAddress = {
  name: "Subset Softwares",
  gstNumber: "12PANNUMBER2A2",
  contactNumber: "9123456789",
  contactEmail: "company.email@gmail.com",
  addressLine1: "456, Software Avenue, Unit 789, Future Tech Park",
  addressLine2: "Bangalore, Karnataka - 560001",
};

export const companyBankDetails = {
  accountName: "Subset Softwares",
  accountNumber: "1234567890",
  accountCurrency: "INR (Indian Rupee)",
  bankName: "Indian Banking Corporation",
  branchName: "New Town Branch",
  branchCode: "BLR123",
  ifscCode: "IFSC012345",
  swiftCode: "SWFT456ABC",
};

export const clientAddress = {
  name: "Fictional Global Solutions Ltd",
  companyNumber: "Company No. 11122233",
  taxNumber: "Tax ID: 44556677",
  addressLine1: "789 Innovation Street, Suite 1234, Tech Hub",
  addressLine2: "Cityville, Countryland 12345",
  addressLine3: "Foreignland",
};

export const LOGO_URL = "/subset-logo-only.png";
