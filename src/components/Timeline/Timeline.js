import React from 'react';
import styled from 'styled-components'




const Timeline = () => {
  const timelineData = [
    { id: 1, title: 'Step 1', description: 'This is the first step of the timeline.' },
    { id: 2, title: 'Step 2', description: 'This is the second step of the timeline.' },
    { id: 3, title: 'Step 3', description: 'This is the third step of the timeline.' },
    { id: 4, title: 'Step 4', description: 'This is the final step of the timeline.' },
  ];


  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      padding: '20px',
      color: '#e0e0e0' // Light text color for dark backgrounds
    }}>
       

     <title>Achi</title>


      {timelineData.map((item, index) => (
        <div key={item.id} style={{
          backgroundColor: '#333',
          padding: '15px',
          margin: '10px 0',
          width: '60%',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          position: 'relative'
        }}>
          <div style={{
            fontSize: '1.2rem',
            color: '#ffeb3b' // Bright color for titles
          }}>
            <h3>{item.title}</h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#bdbdbd' // Lighter grey for descriptions
            }}>{item.description}</p>
          </div>
          <div style={{
            content: '""',
            position: 'absolute',
            top: '15px',
            left: '-20px',
            height: '12px',
            width: '12px',
            backgroundColor: '#4a90e2',
            borderRadius: '50%',
          }} />
          {index < timelineData.length - 1 && (
            <div style={{
              content: '""',
              position: 'absolute',
              left: '-14px',
              top: '30px',
              width: '2px',
              height: '100%',
              backgroundColor: '#555', // Dark grey line between items
            }} />
          )}
        </div>
      ))}
    </div>)
}
export default Timeline;
