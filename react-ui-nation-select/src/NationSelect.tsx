import './NationSelect.less';

export default ({ bgColor = 'green', text='Hello NationSelect'}) => {
  return (
    <div className="nation-select" style={{ padding: "30px", background: bgColor }}>
      {text}
    </div>
  );
};
