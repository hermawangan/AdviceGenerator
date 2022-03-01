import React, { useState, useEffect } from "react";
import axios from "axios";
import DiceIcon from "./DiceIcon";
import "./get.css";

import Previews from "./Previews";

function Get() {
  const [advices, setAdvices] = useState({});
  const [loading, setLoading] = useState(true);

  const generate = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setLoading(false);
        setAdvices(res.data.slip);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <>
      <div id={advices.id} className="card-container">
        {loading ? (
          "Loading, please wait"
        ) : (
          <>
            <p className="card-id">ADVICE #{advices.id}</p>
            <p className="card-advice">"{advices.advice}"</p>
            <Previews />
          </>
        )}
      </div>
      <button onClick={generate} className="card-button">
        {<DiceIcon />}
      </button>
    </>
  );
}

export default Get;
