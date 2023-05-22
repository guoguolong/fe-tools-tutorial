import React, { useState, useEffect }  from 'react';
import queryString from 'query-string';
import 'babel-polyfill'
import './NationSelect.less';

const parsed: any = queryString.parse(location.search);
const people = {
  nickname: 'allen',
  gender: 'male',
}

export default ({ bgColor = 'green', name = 'Hello NationSelect' }, b, ) => {
  const [data, setData] = useState('');
  const es2015_isChinese = [...['allen', 'koda', 'judy']].includes(parsed.name) ? 'Yes': 'No';
  const es2017_getRemoteData = async () => {
    setData(await parsed.data? 'dataA':'dataB');
  }
  const es2018_ChinesePeople = {...people, hobby: 'Ping Pong'};

  useEffect(()=>{
    es2017_getRemoteData();
  }, []);

  return (
    <div
      className="nation-select"
      style={{ padding: '30px', background: bgColor }}
    >
      <ul>
        <li>[ES2015] - isChinese: {es2015_isChinese}</li>
        <li>[ES2017] - remoteData {data}</li>
        <li>[ES2018] - {JSON.stringify(es2018_ChinesePeople)}</li>
      </ul>
    </div>
  );
};
