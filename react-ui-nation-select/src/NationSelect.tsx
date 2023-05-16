import React from 'react';
import queryString from 'query-string';
import './NationSelect.less';

const parsed = queryString.parse(location.search);
export default ({ bgColor = 'green', name='Hello NationSelect'}) => {
  return (
    <div className="nation-select" style={{ padding: "30px", background: bgColor }}>
      {name} - {parsed.debug? 'DEBUG': 'PROD'}
    </div>
  );
};
