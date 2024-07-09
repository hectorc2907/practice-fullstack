import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
