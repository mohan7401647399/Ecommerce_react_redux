import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => setCount((count) => count - 1), 1000);
    setTimeout(() => navigate("/"), 10000);
  }, [navigate]);

  return (
    <div>
      <h2>Your Order has been placed successfully.</h2>{" "}
      <h4>
        You will redirect in {""}
        {count} seconds
      </h4>
    </div>
  );
}
