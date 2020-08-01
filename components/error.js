import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Error({ error }) {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        className="mt-3 text-center"
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        Error: {error}
      </Alert>
    );
  }
  return null;
}
