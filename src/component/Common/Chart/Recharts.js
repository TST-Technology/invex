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

export { RemoveDot, CustomizedGrowthRateLabel };
