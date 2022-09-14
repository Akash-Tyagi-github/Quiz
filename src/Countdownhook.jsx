import { useEffect,useState } from "react";

// let seconds=0;
function CountdownHook()
{
    const [count, setCount] = useState(10000);
   
      useEffect(() => {
        let timer = setInterval(() => {
          setCount((count) => count - 1000);
        }, 1000);
        return () => clearTimeout(timer);
      }, [count]);
      let seconds = Math.floor((count % (1000 * 60)) / 1000);
      return seconds;
    ;
}
export default CountdownHook;