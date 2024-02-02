import { FaGlobeAmericas } from "react-icons/fa";

export default function Heaader() {
  return (
    <div className="headerbox">
      <div className="header--container">
        <FaGlobeAmericas
          size="2.4rem"
          enableBackground="#fb6f92"
          color="#fff"
          className="nav--logo"
        />
        <span className="header--title"> my travel journal</span>
      </div>
    </div>
  );
}
