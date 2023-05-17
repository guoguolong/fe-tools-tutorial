import React from 'react';
import queryString from 'query-string';
import './NationSelect.less';

const parsed: any = queryString.parse(location.search);
export default ({ bgColor = 'green', name = 'Hello NationSelect' }) => {
  const isChinese = ['allen', 'koda', 'judy'].includes(parsed.name) ? 1 : 0;
  return (
    <div
      className="nation-select"
      style={{ padding: '30px', background: bgColor }}
    >
      {name} - {parsed.debug ? 'DEBUG' : 'PROD'} - isChinese: {isChinese}
    </div>
  );
};
