import React, { useState } from "react";
import Alyan from "./Alyan";
import Hammad from "./Hammad";
import Sorath from "./Sorath";
import Areesha from "./Areesha";
import Zain from "./Zain";
import Samreen from "./Samreen";
import Tenar from "./Tenar";
import Abdullah from "./Abdullah"; // Ensure this matches the actual filename

const Surprise = () => {
  const [password, setPassword] = useState("");
  const [member, setMember] = useState(null);

  const handlePassword = () => {
    switch (password.toLowerCase()) {
      case "beloved":
        setMember("alyan");
        break;
      case "hammu":
        setMember("hammad");
        break;
      case "sorss":
        setMember("sorath");
        break;
      case "reeshay":
        setMember("areesha");
        break;
      case "jan":
        setMember("zain");
        break;
      case "sams":
        setMember("samreen");
        break;
      case "hijab":
        setMember("tenar");
        break;
      case "ab":
        setMember("abdullah");
        break;
      default:
        alert("ajeeb apna password daalo naa!");
    }
  };

  return (
    <div className="surprise-container text-center">
      {member ? (
        member === "alyan" ? (
          <Alyan />
        ) : member === "hammad" ? (
          <Hammad />
        ) : member === "sorath" ? (
          <Sorath />
        ) : member === "areesha" ? (
          <Areesha />
        ) : member === "zain" ? (
          <Zain />
        ) : member === "samreen" ? (
          <Samreen />
        ) : member === "tenar" ? (
          <Tenar />
        ) : member === "abdullah" ? (
          <Abdullah />
        ) : null
      ) : (
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="p-2 bg-[#E00712] text-black rounded-sm mb-4 focus outline-black"
          />
          <button
            onClick={handlePassword}
            className="p-2 text-white border border-white rounded-sm hover:text-white"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Surprise;
