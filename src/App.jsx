import React, { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import Visualization from './components/Visualization';
import EventLog from './components/EventLog';
import './App.css';

function App() {
  const [servers] = useState([
    { id: 1, name: 'Server 1', connections: 0 },
    { id: 2, name: 'Server 2', connections: 0 },
    { id: 3, name: 'Server 3', connections: 0 },
    { id: 4, name: 'Server 4', connections: 0 },
  ]);

  const [events, setEvents] = useState([]);
  const [algorithm, setAlgorithm] = useState('round-robin');
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [autoIntensity, setAutoIntensity] = useState(1);

  const handleAddRequest = (requestCount) => {
    const newEvents = [];
    for (let i = 0; i < requestCount; i++) {
      const event = {
        id: Date.now() + i,
        timestamp: new Date().toLocaleTimeString(),
        ipAddress: generateRandomIP(),
        algorithm,
        targetServer: 'Server ' + ((i % servers.length) + 1),
        status: 'success',
      };
      newEvents.push(event);
    }
    setEvents([...events, ...newEvents]);
  };

  const generateRandomIP = () => {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Load Balancing Simulator</h1>
        <p className="subtitle">Interactive demonstration of load balancing algorithms</p>
      </header>

      <div className="container">
        <aside className="control-panel-container">
          <ControlPanel
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
            isAutoMode={isAutoMode}
            setIsAutoMode={setIsAutoMode}
            autoIntensity={autoIntensity}
            setAutoIntensity={setAutoIntensity}
            onAddRequest={handleAddRequest}
          />
        </aside>

        <main className="main-content">
          <section className="visualization-section">
            <h2>Visualization</h2>
            <Visualization servers={servers} />
          </section>

          <section className="event-log-section">
            <h2>Event Log</h2>
            <EventLog events={events} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
