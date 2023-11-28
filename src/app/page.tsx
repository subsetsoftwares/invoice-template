"use client";
import { PrintButton } from "@/components/PrintButton";
import Image from "next/image";
import {
  LOGO_URL,
  clientAddress,
  companyAddress,
  companyBankDetails,
  latest,
} from "./data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles["invoice-header"]}>
        <div className={styles["logo"]}>
          <Image
            src={LOGO_URL}
            alt="Company Logo"
            className={styles["logo"]}
            width={150}
            height={150}
          />
        </div>
        <div className={styles["company-address"]}>
          <p className={styles["company-title"]}>{companyAddress.name}</p>
          <p>
            {companyAddress.contactNumber}, {companyAddress.contactEmail}
          </p>
          <p>{companyAddress.addressLine1}</p>
          <p>{companyAddress.addressLine2}</p>
        </div>
      </div>

      <div className={styles["invoice-info"]}>
        <div className={styles["client-address"]}>
          <table className={styles["details-table"]}>
            <tbody>
              <tr>
                <th>Bill Detail</th>
                <th>Client Name</th>
              </tr>
              <tr>
                <td>
                  <p>Date: {latest.date}</p>
                  <p>GST Number: {companyAddress.gstNumber}</p>
                  <p>Bill Number: {latest.billNumber}</p>
                </td>
                <td>
                  <div className={styles["address-line"]}>
                    {clientAddress.name}
                  </div>
                  <div className={styles["address-line"]}>
                    {clientAddress.companyNumber}
                  </div>
                  <div className={styles["address-line"]}>
                    {clientAddress.taxNumber}
                  </div>
                  <div className={styles["address-line"]}>
                    {clientAddress.addressLine1}
                  </div>
                  <div className={styles["address-line"]}>
                    {clientAddress.addressLine2}
                  </div>
                  <div className={styles["address-line"]}>
                    {clientAddress.addressLine3}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <table className={styles["invoice-table"]}>
        <tbody>
          <tr>
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>LINE TOTAL</th>
          </tr>
          <tr>
            <td>IT Consultancy</td>
            <td>{latest.days} days</td>
            <td>${latest.rate}</td>
            <td>${latest.days * latest.rate}</td>
          </tr>

          <tr>
            <td colSpan={2} className={styles["total-label"]}></td>
            <td colSpan={1} className={styles["total-label"]}>
              Total USD
            </td>
            <td colSpan={1} className={styles["total-value"]}>
              {latest.days * latest.rate} USD
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles["side-note"]}>
        NOTE: All currencies in United States Dollar (USD)
      </div>

      <div className={styles["payment-details"]}>
        <h4 className={styles["payment-title"]}>Bank Details</h4>
        <table className={styles["payment-table"]}>
          <tbody>
            <tr>
              <td>Account Name:</td>
              <td>{companyBankDetails.accountName}</td>
            </tr>
            <tr>
              <td>Account Number:</td>
              <td>{companyBankDetails.accountNumber}</td>
            </tr>
            <tr>
              <td>Account Currency:</td>
              <td>{companyBankDetails.accountCurrency}</td>
            </tr>
            <tr>
              <td>Bank Name:</td>
              <td>{companyBankDetails.bankName}</td>
            </tr>
            <tr>
              <td>Branch Name:</td>
              <td>{companyBankDetails.branchName}</td>
            </tr>
            <tr>
              <td>Branch Code:</td>
              <td>{companyBankDetails.branchCode}</td>
            </tr>
            <tr>
              <td>IFSC Code:</td>
              <td>{companyBankDetails.ifscCode}</td>
            </tr>
            <tr>
              <td>SWIFT Code:</td>
              <td>{companyBankDetails.swiftCode}</td>
            </tr>
          </tbody>
        </table>

        <div className="print-page">
          <PrintButton />
        </div>
      </div>
    </>
  );
}
