import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hook/useTitle";

const TermsAndConditions = () => {
  useTitle("Terms & Conditions");
  return (
    <div>
      <h2 className="text-center">Here is Terms And Conditions</h2>
      <p>
        Go Back to <Link to="/register">Registration</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
