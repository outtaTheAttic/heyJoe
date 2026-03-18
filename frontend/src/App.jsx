import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";
import { Toaster } from "react-hot-toast";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if(isCheckingAuth) return <PageLoader />;

  return (

	<div className="absolute min-h-screen bg-stone-500 relative flex items-center justify-center p-4 overflow-hidden">

	  <Routes>

		<Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/signup"} />} />
		<Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
		<Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to={"/"} />} />

	  </Routes>

	  <Toaster />


	</div>

  );
}

export default App;
