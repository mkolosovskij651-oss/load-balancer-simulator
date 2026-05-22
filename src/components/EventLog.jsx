import React from 'react';
import './EventLog.css';

function EventLog({ events }) {
  return (
    <div className="event-log">
      {events.length === 0 ? (
        <p className="empty-message">No events yet. Send some requests to see activity.</p>
      ) : (
        <div className="table-wrapper">
          <table className="event-table">
            <thead>
              <tr>
                <th>Request #</th>
                <th>Time</th>
                <th>IP Address</th>
                <th>Algorithm</th>
                <th>Target Server</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event.id} className={`status-${event.status}`}>
                  <td>{events.length - index}</td>
                  <td>{event.timestamp}</td>
                  <td className="ip-address">{event.ipAddress}</td>
                  <td>
                    <span className="algorithm-badge">{event.algorithm}</span>
                  </td>
                  <td className="target-server">{event.targetServer}</td>
                  <td>
                    <span className={`status-badge status-${event.status}`}>
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EventLog;
