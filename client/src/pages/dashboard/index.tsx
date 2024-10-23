import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useMemo, useState } from "react";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { Navigate } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();
  const [isModalOpen, setModalOpen] = useState(false);

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <SignedOut>
        <Navigate to="/auth" />
      </SignedOut>
      <SignedIn>
        <div className="headerSection">
          <h1 style={{ textAlign: "center", width: "100%" }}>
            Welcome {user?.fullName}!!
          </h1>

          <div className="User-btn">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "50px",
                    height: "50px",
                  },
                },
              }}
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="open-modal-btn" onClick={openModal}>
            Add Financial Record
          </button>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-btn" onClick={closeModal}>
                &times;
              </button>
              <FinancialRecordForm />
            </div>
          </div>
        )}

        <FinancialRecordList />

        <h4 style={{ textAlign: "end", paddingRight: "22px" }}>
          Total Monthly : ₹{totalMonthly}
        </h4>
      </SignedIn>
    </div>
  );
};
