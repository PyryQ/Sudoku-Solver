import React from 'react';

const Grid = ({ grid }) => {
  return (
    <table style={{ borderCollapse: 'collapse', margin: 'auto' }}>
      {grid.map((row, i) => (
        <tr key={i}>
          {row.map((col, j) => (
            <td 
              key={j} 
              style={{ 
                width: '30px', 
                height: '30px', 
                textAlign: 'center',
                border: '1px solid black',
                borderLeft: j % 3 === 0 ? '2px solid black' : '1px solid black',
                borderRight: (j + 1) % 3 === 0 ? '2px solid black' : '1px solid black',
                borderTop: i % 3 === 0 ? '2px solid black' : '1px solid black',
                borderBottom: (i + 1) % 3 === 0 ? '2px solid black' : '1px solid black',
              }}
            >
              {col || ''}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Grid;