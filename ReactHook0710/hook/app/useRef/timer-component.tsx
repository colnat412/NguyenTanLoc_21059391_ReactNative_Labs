import { useEffect, useRef } from "react";

const TimerComponent = () => {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log("Timer is running ...");
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
};

export default TimerComponent;
