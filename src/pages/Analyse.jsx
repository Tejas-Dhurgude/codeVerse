import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { PieChart, Pie, Sector, Cell } from 'recharts';


export default function Analyse() {
  const data = [
    {
      name: 'Monday',
      cases: 40,
      
    },
    {
      name: 'Tuesday',
      
      cases:20,
      
    },
    {
      name: 'Wednesday',
      
      cases: 30,
      
    },
    {
      name: 'Thursday',
    
      cases: 35,
      
    },
    {
      name: 'Friday',
      
      cases: 25,
      
    },
    {
      name: 'Saturday',
      
      cases: 32,
      
    },
    {
      name: 'Sunday',
      
      cases: 40,
      
    },
  ];

  const data1 = [
    { name: 'Predicted Positive Cases', value: 400 },
    { name: 'Predicted Negative Cases', value: 600 },
    { name: 'Wrong results', value: 100 },
    
  ];

  
    let sum=data[0].cases+data[1].cases+data[2].cases
    +data[3].cases+data[4].cases+data[5].cases+data[6].cases
  
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
    


  return (
    <>
    <h1 className='flex justify-center text-darkblack font-bold text-2xl mt-4'>Data Analysis</h1>
    <div className='grid grid-cols-2 row-gap-28  mt-8 w-[80%] mx-auto'>

      <div className=" border-4 border-black-500 ... m-4 mr-14 p-4">
      
      
        <ResponsiveContainer width="99%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" stroke="none" />

            <Tooltip />
            
            <Legend />
            <Line type="monotone" dataKey="cases" stroke="#8884d8" strokeWidth={2} name="Day" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className='border-4 border-black-500 ... m-4 p-4 ml-14'>
        
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
        <Tooltip />
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            
            

            
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className='mr-14 ml-4 m-8 font-medium text-lg'>
        Gives details about number of cases reported by citizens.
        <br />

                Total : {sum}
      </div>
      <div className='ml-14 m-8 font-medium text-lg'>
                Gives Number of Positive and Negative Predictions this week
                <br />
                Positive : {data1[0].value}
                <br />
                Negative : {data1[1].value}
      </div>
    </div>
    </>
  );
}
