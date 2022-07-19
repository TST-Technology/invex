import React from 'react';

const RemoveDot = () => {
  return <></>;
};

const CustomizedGrowthRateLabel = (props) => {
  const { x, y, stroke, value, index, data } = props;

  return (
    <text
      x={x + 40}
      y={y}
      dy={+20}
      fill={stroke}
      fontSize={10}
      textAnchor='middle'
    >
      {index < data.length - 1 ? data[index + 1].data : ''}
    </text>
  );
};

const CustomizedGrowthRateLabelV2 = (props) => {
  const { x, y, stroke, value, index, data } = props;

  if (index < data.length - 1) {
    return (
      <text
        x={x + 10}
        y={y - 65}
        dy={+20}
        fill={stroke}
        fontSize={10}
        textAnchor='middle'
        color={`#13A41B`}
        style={{ fill: data[index + 1].data > 0 ? '#13A41B' : '#DF0822' }}
      >
        {index < data.length - 1 ? `${data[index + 1].data}%` : ''}
      </text>
    );
  } else {
    return <></>;
  }
};

export { RemoveDot, CustomizedGrowthRateLabel, CustomizedGrowthRateLabelV2 };
