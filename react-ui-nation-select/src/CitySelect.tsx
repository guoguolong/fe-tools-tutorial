import React from 'react';
import './CitySelect.less';

export default ({ bgColor = 'green', name='Hello CitySelect'}) => {
  return (
    <div className="city-select" style={{ padding: "30px", background: bgColor }}>
      {name}
    </div>
  );
};
