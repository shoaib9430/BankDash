import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";
import { data } from '../../Data/Dashboard'; 


const Activity = () => {
  return (
    <>
      <ResponsiveContainer
        className={`Responsive`}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "1.25rem",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.75rem",
        }}
      >
        <label className={`labelbtn`}></label>
        <BarChart
          className="bar1"
          data={data}
          margin={{
            top: 15,
            right: 25,
            left: 7,
            bottom: 3
          }}
        >
          <CartesianGrid vertical={false} strokeWidth={0.3}/>
          <XAxis axisLine={false} dataKey="name" tick={{ fill: '#718EBF' }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fontSize: 12, fill: '#718EBF' }} tickLine={false} />
          
          <Bar dataKey="Deposit" fill="#1814F3" barSize={10} radius={[5, 5, 0, 0]} />
          <Bar dataKey="Withdrawal" fill="#16DBCC" barSize={10} radius={[5, 5, 0, 0]} />
          
          <Legend
            iconType='circle'
            align="right"
            verticalAlign="top"
            height={36}
            
            
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Activity;
