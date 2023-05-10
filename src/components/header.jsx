import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <h2>Your job is ready!</h2>
      <div>
        <Link to={"/"}>The list of jobs</Link>
        <Link to={"/add-job"}>Add new job</Link>
      </div>
    </header>
  );
};

export default Header;
