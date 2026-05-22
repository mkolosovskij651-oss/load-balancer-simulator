import React from 'react';
import './Server.css';

function Server({ server }) {
  const loadPercentage = Math.min((server.connections / 20) * 100, 100);

  const getLoadColor = () => {
    if (loadPercentage < 33) return '#5cb85c';
    if (loadPercentage < 66) return '#f0ad4e';
    return '#d9534f';
  };

  return (
    <div className="server">
      <div className="server-header">
        <span className="server-name">{server.name}</span>
      </div>

      <div className="server-load-bar">
        <div
          className="server-load-fill"
          style={{
            width: `${loadPercentage}%`,
            backgroundColor: getLoadColor(),
          }}
        ></div>
      </div>

      <div className="server-info">
        <p className="server-connections">Connections: {server.connections}</p>
        <p className="server-load-text">{Math.round(loadPercentage)}%</p>
      </div>
    </div>
  );
}

export default Server;
