import React, { useState } from 'react';
import './ControlPanel.css';

function ControlPanel({
  algorithm,
  setAlgorithm,
  isAutoMode,
  setIsAutoMode,
  autoIntensity,
  setAutoIntensity,
  onAddRequest,
}) {
  const [requestCount, setRequestCount] = useState(1);

  const handleSendRequest = () => {
    if (requestCount > 0) {
      onAddRequest(requestCount);
      setRequestCount(1);
    }
  };

  const handleStartAuto = () => {
    setIsAutoMode(true);
  };

  const handleStopAuto = () => {
    setIsAutoMode(false);
  };

  return (
    <div className="control-panel">
      <div className="panel-section">
        <h3>Manual Mode</h3>

        <div className="form-group">
          <label htmlFor="requestCount">Number of Requests</label>
          <input
            id="requestCount"
            type="number"
            min="1"
            max="100"
            value={requestCount}
            onChange={(e) => setRequestCount(parseInt(e.target.value) || 1)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="algorithm">Load Balancing Algorithm</label>
          <select
            id="algorithm"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="round-robin">Round Robin</option>
            <option value="least-connections">Least Connections</option>
            <option value="ip-hash">IP Hash</option>
            <option value="random">Random</option>
          </select>
        </div>

        <button className="btn btn-primary" onClick={handleSendRequest}>
          Send Requests
        </button>
      </div>

      <div className="panel-section">
        <h3>Automatic Mode</h3>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isAutoMode}
              onChange={(e) => setIsAutoMode(e.target.checked)}
            />
            <span>Enable Auto Mode</span>
          </label>
        </div>

        {isAutoMode && (
          <div className="form-group">
            <label htmlFor="autoIntensity">Intensity (req/sec)</label>
            <input
              id="autoIntensity"
              type="number"
              min="0.1"
              max="50"
              step="0.1"
              value={autoIntensity}
              onChange={(e) => setAutoIntensity(parseFloat(e.target.value) || 1)}
            />
          </div>
        )}

        <div className="button-group">
          <button className="btn btn-success" onClick={handleStartAuto}>
            Start
          </button>
          <button className="btn btn-danger" onClick={handleStopAuto}>
            Stop
          </button>
        </div>
      </div>

      <div className="panel-section">
        <h3>Information</h3>
        <p className="info-text">
          <strong>Current Algorithm:</strong>
          <br />
          {algorithm === 'round-robin' && 'Round Robin'}
          {algorithm === 'least-connections' && 'Least Connections'}
          {algorithm === 'ip-hash' && 'IP Hash'}
          {algorithm === 'random' && 'Random'}
        </p>
        <p className="info-text">
          <strong>Auto Mode:</strong>
          <br />
          {isAutoMode ? 'Enabled' : 'Disabled'}
        </p>
      </div>
    </div>
  );
}

export default ControlPanel;
