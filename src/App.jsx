import React, { useState } from "react";
import Main from "./components/main"; // Correct import path
import netflixLogo from "./assets/netflix-Logo.png";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (password) => {
    if (password === "we8togetherinshaAllah") {
      setIsAuthenticated(true);
    } else {
      alert("kon hay bhaii tuu????");
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Main />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white p-4">
          <h1 className="text-4xl md:text-5xl mb-8 font-mono font-bold hover:text-[#E00712]">Study and Fun</h1>
          <img src={netflixLogo} alt="Netflix Logo" className="w-16 md:w-24 mb-20 md:mb-36" />
          <h4 className="text-base md:text-lg mb-4 font-semibold font-sans hover:text-[#E00712] animate-bounce">hellooo hn hn tum</h4>
          <h2 className="text-lg md:text-2xl mb-4 font-semibold font-sans hover:text-[#E00712]">Password daalo dekh kya rahay ho!!!!</h2>
          <h3 className="text-sm md:text-lg mb-8 font-sans hover:text-[#E00712]">Sometimes uni is Hell but it gave us this precious group &lt;3 </h3>
          <PasswordForm onAuthenticate={handleAuthentication} />
        </div>
      )}
    </div>
  );
}

const PasswordForm = ({ onAuthenticate }) => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthenticate(password);
  };

  return (
    <form onSubmit={handleSubmit} className="text-center w-full max-w-xs">
      <div className="mb-4">
        <input
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter Password"
          className="p-2 w-full bg-[#E00712] text-black mb-2 focus:outline-gray-500 rounded-xl"
        />
        <button type="submit" className="p-2 w-full bg-[#E00712] text-black rounded-xl hover:text-white">
          Enter
        </button>
      </div>
    </form>
  );
};

export default App;
