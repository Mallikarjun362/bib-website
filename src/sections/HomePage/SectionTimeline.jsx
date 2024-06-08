import React, { useEffect, useState } from "react";
import SessionTile from "../../components/SessionTile";

function tableToJson(table) {
  var headers = table[0];
  var data = table.slice(1);
  var jsonList = [];

  data.forEach(function (row) {
    var obj = {};
    row.forEach(function (value, index) {
      obj[headers[index]] = value;
    });
    jsonList.push(obj);
  });

  return jsonList;
}

const SectionTimeline = () => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbygHUNKksozhUh5r1pCrVwhTMvsos_apPglJl9o8QI3IJlESnrJJh3h33Uh0cAuM4QVhQ/exec"
    )
      .then(async (response) => {
        // console.log(await response.json())
        return await response.json();
      })
      .then((data) => {
        setSessions(tableToJson(data));
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <br />
      <center
        className="lg:text-[3vw] sm:text-[5vw] text-[5vw]"
        style={{ color: "#fff8" }}
      >
        Summer blockchain bootcamp 2023
      </center>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          gap: "30px",
        }}
      >
        {sessions.map((ele, idx, arr) => (
          <SessionTile key={idx} data={ele} />
        ))}
      </div>
    </div>
  );
};

export default SectionTimeline;
