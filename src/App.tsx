import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="text-sm dark:text-white">root</div>
      <Link className="dark:text-white" to={"/form"}>
        Buka Form
      </Link>
    </>
  );
};

export default App;
