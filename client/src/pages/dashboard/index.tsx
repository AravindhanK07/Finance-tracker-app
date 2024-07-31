import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useMemo } from "react";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { Navigate } from "react-router-dom";
export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <SignedOut>
        <Navigate to="/auth" />
      </SignedOut>
      <SignedIn>
        <h1>Welcome {user?.firstName}!!</h1>
        <FinancialRecordForm />

        <FinancialRecordList />
        <h4 style={{ textAlign: "end", paddingRight: "22px" }}>
          Total Monthly : ₹{totalMonthly}
        </h4>
      </SignedIn>
    </div>
  );
};
