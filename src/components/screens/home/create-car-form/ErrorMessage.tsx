import { FC } from "react";

const ErrorMessage: FC<{ errors?: string }> = ({ errors }) => {
    if (!errors) return null;
    return <p style={{ color: "red" }}>Enter value</p>;
};

export default ErrorMessage;
