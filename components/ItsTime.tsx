"use client";

import Snowfall from "react-snowfall";

const ItsTime = () => {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      <Snowfall snowflakeCount={5} />
    </div>
  );
};

export default ItsTime;
