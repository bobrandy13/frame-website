import * as React from "react";
import { useState } from "react";

function Frames() {
  const [name, setName] = useState("kevin huang");
  return (
    <div>
      <h1 className="bg-slate-300 text-4xl text-white"></h1>
    </div>
  );
}

export default Frames;
