import { Navigate } from "react-router-dom";
import AdminDashboard from "../componenets/AdminDashboard";
import ForgotPassword from "../componenets/ForgetPassword"; 
import Home from "../componenets/Home";
import LogIn from "../componenets/Login";
import ResetPassword from "../componenets/ResetPassword";
import SignUp from "../componenets/SignUp";
import UserDhashboard from "../componenets/UserDashboard";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoutes>
        <AdminDashboard />
      </AdminRoutes>
    ),
  },
  {
    path: "/user-dashboard",
    element: (
      <UserRoutes>
        <UserDhashboard />
      </UserRoutes>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default AppRoutes;