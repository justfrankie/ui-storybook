import React from "react";

const HistoryLog = ({ history }) => {
  return (
    <div>
      <h2>History Log</h2>
      <ul>
        {history.map((log) => (
          <li key={log.id}>{log.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryLog;
