import React from 'react'
import {
    Link
  } from "react-router-dom";
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip } from 'recharts'
const Chart = () => {
  const data=[
    {
        "Id": 1,
        "Year": 2004,
        "Medals": 1
        
        
    },
    {
        "Id": 2,
        "Year": 2008,
        "Medals": 3
        
    },
    {
        "Id": 3,
        "Year": 2012,
        "Medals": 6
        
    },
    {
        "Id": 4,
        "Year": 2016,
        "Medals": 2
        
    },
    {
        "Id": 5,
        "Year": 2020,
        "Medals": 7
        
    }
]
  return (
    <div>
      <h1 className='chartHeading'>GRAPH BASED ON GIVEN DATA</h1>
     <ResponsiveContainer width="100%" aspect={3}>
       <LineChart data={data} width={500} height={600} margin={{top:100,right:200,left:200,bottom:5}}>
         
         <CartesianGrid strokeDasharray="3 3"/>

         <XAxis dataKey="Year" />
         <YAxis dataKey="Medals"/>
         <Tooltip contentStyle={{background:"pink"}}></Tooltip>
         <Legend/>
         <Line dataKey="Medals" stroke="green" activeDot={{r:5}}/>
       </LineChart>
     </ResponsiveContainer>
     <button className='first'> <Link to='/'>Table</Link></button>
    
    <button className='second' ><Link to='chart'>Chart</Link></button>
    </div>
   

  )
}

export default Chart