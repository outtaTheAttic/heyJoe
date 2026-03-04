import { Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useState } from "react";
import { useAuthStore } from "./store/useAuthStore";

function App() {

  const { authUser, login, isLoggedIn } = useAuthStore();

  console.log("auth user:", authUser);
  console.log("isLoggedIn:", isLoggedIn);

  return (


	<div className="min-h-screen bg-navy-900 relative flex items-center justify-center p-4 overflow-hidden">

	{/* DECORATORS - GRID BG & GLOW SHAPES ...(NO GLOW SHAPES) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_1px)] bg-[size:14px_24px]" />

	  <button onClick={login} className="z-10">login</button>

	  <Routes>

		<Route path="/" element={<ChatPage />} />
		<Route path="/login" element={<LoginPage />} />
		<Route path="/signup" element={<SignupPage />} />

	  </Routes>

	</div>

  );
}

export default App;
