import { useEffect, useState } from "react";

const Usestatus = () => {
  const [status, setstatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setstatus(true);
    }),
      window.addEventListener("offline", () => {
        setstatus(false);
      });
  }, []);

  return status;
};
export default Usestatus;
