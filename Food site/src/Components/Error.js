import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS !!!!</h1>

      <h1>
        Page {err.statusText} {err.status}
      </h1>
    </div>
  );
};

export default Error;
