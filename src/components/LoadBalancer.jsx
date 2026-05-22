import React from 'react';
import './LoadBalancer.css';

function LoadBalancer() {
  return (
    <div className="load-balancer">
      <div className="load-balancer-icon">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central circle */}
          <circle cx="40" cy="40" r="30" fill="#4a90e2" stroke="#2c5aa0" strokeWidth="2" />

          {/* Inner circle */}
          <circle cx="40" cy="40" r="20" fill="#6ba3f5" />

          {/* Balance symbol */}
          <path
            d="M35 35 L45 45 M45 35 L35 45"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="load-balancer-label">Load Balancer</p>
    </div>
  );
}

export default LoadBalancer;
