import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

interface TimerProps {
  label: string;
}

const Timer: React.FC<TimerProps> = ({ label }) => {
  const [timer, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTime(timer + 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      {label}: {timer}
    </div>
  );
};

Timer.defaultProps = {
  label: "Timer ",
};

Timer.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Timer;
