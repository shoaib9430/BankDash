import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 36.5vh; */
  height: 100%;

  /* width: 30%; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 1.25rem;
  box-sizing: border-box;
  @media (min-width: 1440px) {
    max-width: 1440px;
    width: 100%;
  }
`;

const data = [
  { name: "Enjoy", value: 340 },
  { name: "Invest", value: 230 },
  { name: "Other", value: 400 },
  { name: "Bill", value: 170 },
];

const COLORS = ["#343C6A", "#FA00FF", "#1814F3", "#FC7900"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      fontSize="10"
    >
      {`${data[index].name}\n${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const RADIAN = Math.PI / 180;

const Expense = () => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="90%"
            fill="#8884d8"
            dataKey="value"
            stroke="white"
            strokeWidth={5}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Expense;
