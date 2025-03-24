import { useState } from "react";
import LoginPage from "./components/LoginPage";

function App() {
  const [token, setToken] = useState("");

  const handleLogin = async (username, password) => {
    // Simulating a backend call (you can replace this with actual login logic)
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });


  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow-lg" style={{ width: "25rem" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>

          {/* Login Form */}
          <LoginPage onLogin={handleLogin} />

          <div className="text-center mt-3">
            <a href="#" className="text-muted">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
