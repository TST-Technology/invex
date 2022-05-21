import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell, Legend } from "recharts";
import {NormalFormat} from '../Common/NumberFormat'

const COLORS = ["#118dff", "#12239e", "#e66c37", "#6b007b","#e044a7","#744ec2","#d9b300","#d64550","#197278","#1aab40","#6e7074","#be5dc9"];
const renderColorfulLegendText = (value, entry) => {
  return (
    <span style={{ fontSize:12, color: "#596579", fontWeight: 500, padding: "10px" }}>
      {value}
    </span>
  );
};
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <>
      {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text> */}
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
          {/* {`PV ${value}`} */}{NormalFormat(value)}
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    </>
  );
};

export default function SectorChart({data}) {
  const [activeIndex, setActiveIndex] = useState(4);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (

    <PieChart width={500} height={300} style={{width:'auto'}}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        // cx={200}
        // cy={200}
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        height={'auto'}
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        iconSize={10}
        padding={5}
        formatter={renderColorfulLegendText}
        wrapperStyle={{left:'auto', right:0,top:0}} 
      />
    </PieChart>
  );
}
