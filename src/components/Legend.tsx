import React from 'react';

const Legend: React.FC = () => {
  return (
    <div
      className="legend"
      style={{
        position: 'absolute',
        bottom: '20px',
        left: '10px',
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
      }}
    >
      <h4
        className="legend-title"
        style={{
          fontSize: '14px',
          marginBottom: '5px',
          padding: '5px',
          borderBottom: '2px solid grey',
          textAlign: 'center',
        }}
      >
        Rank (°C)
      </h4>
      <div
        className="legend-items"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, auto)',
          gap: '5px',
          marginTop: '5px',
        }}
      >
        <div
          className="legend-item"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            className="legend-color"
            style={{
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '5px',
              backgroundColor: '#0000FF',
            }}
          ></span>
          ≤ 0°C
        </div>
        <div
          className="legend-item"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            className="legend-color"
            style={{
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '5px',
              backgroundColor: '#00FFFF',
            }}
          ></span>
          1°C - 10°C
        </div>
        <div
          className="legend-item"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            className="legend-color"
            style={{
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '5px',
              backgroundColor: '#00FF00',
            }}
          ></span>
          11°C - 20°C
        </div>
        <div
          className="legend-item"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            className="legend-color"
            style={{
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '5px',
              backgroundColor: '#FFFF00',
            }}
          ></span>
          21°C - 30°C
        </div>
        <div
          className="legend-item"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            className="legend-color"
            style={{
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '5px',
              backgroundColor: '#FFA500',
            }}
          ></span>
          31°C - 40°C
        </div>
        <div
          className="legend-item"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            className="legend-color"
            style={{
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '5px',
              backgroundColor: '#FF0000',
            }}
          ></span>
          ≥ 41°C
        </div>
      </div>
    </div>
  );
};

export default Legend;
