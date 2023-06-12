import { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  // setInterval in this we have to add two arguments
  // 1st argu. is the function & 2nd argu is delay time
  useEffect(() => {
    const a = setInterval(() => {
      setCounter((previousValue) => previousValue + 1);
    }, 2000);
    return () => {
      console.log("How we cleanup by using return stmnt ");
      clearInterval(a);
    };
  }, []);
  return (
    <div>
      <h1>{counter} secondsTimer</h1>
    </div>
  );
};
export default Timer;
