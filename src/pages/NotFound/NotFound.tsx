import { Link } from "react-router-dom";

interface NotFoundProps {
  message?: string;
}

const NotFound = ({
  message = "The page you are looking for does not exist.",
}: NotFoundProps) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p data-testid="message-container">{message}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
