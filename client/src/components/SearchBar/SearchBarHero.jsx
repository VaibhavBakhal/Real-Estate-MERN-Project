import react from "react";
import "./SearchBarHero";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const SearchBarHero = () => {
  const navigate = useNavigate();
  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <span style={{ color: "var(--black)" }}>Check out Properties by </span>
      <button
        className="button"
        onClick={() => navigate("./properties", { replace: true })}
      >
        Clicking Here
      </button>
    </div>
  );
};

export default SearchBarHero;
