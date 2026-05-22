import React from 'react';
import Server from './Server';
import LoadBalancer from './LoadBalancer';
import './Visualization.css';

function Visualization({ servers }) {
  return (
    <div className="visualization">
      <div className="visualization-content">
        <div className="load-balancer-container">
          <LoadBalancer />
        </div>

        <div className="servers-container">
          {servers.map((server) => (
            <Server key={server.id} server={server} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Visualization;
