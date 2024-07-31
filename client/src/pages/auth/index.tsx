import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

import { Navigate } from "react-router-dom";

import Vector from "../../assets/Vector.png";

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <div style={{ display: "flex", height: "60vh" }}>
        <img src={Vector} className="Logo" />
        <div
          className="right-auth"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            flex: "1",
          }}
        >
          <h1>Budget buddy</h1>
          <p style={{ textAlign: "center" }}>
            Take control of your finances with Budget Buddy, your personal
            finance tracker. Effortlessly track your income and expenses.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SignedOut>
              <SignInButton mode="modal" />
              <SignUpButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <Navigate to="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};
