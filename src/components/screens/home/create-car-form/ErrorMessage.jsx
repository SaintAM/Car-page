import React from "react";

const ErrorMessage = ({ errors }) => {
    if (!errors) return null;
    return <p style={{ color: "red" }}>Enter value</p>;
};

export default ErrorMessage;
