import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="app-container">
        <SignedIn>
          <div className="User-btn">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "50px", // Adjust width as needed
                    height: "50px", // Adjust height as needed
                  },
                },
              }}
            />
          </div>
        </SignedIn>
        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordProvider>
                <Dashboard />
              </FinancialRecordProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
