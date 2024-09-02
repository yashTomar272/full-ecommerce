import {XAxis,CartesianGrid,Tooltip,BarChart,Legend,Bar,PieChart,Pie,LineChart,YAxis,Line} from 'recharts'

 export default function AnalyticII(){
   const data02 = [
     {
       User: 4000,
       Orders: 2400,
     },
     {
       User: 3000,
       Orders: 1398,
     },
     {
       User: 2000,
       Orders: 4000,
     },
     {
       User: 2780,
       Orders: 3908,
     },
     {
       User: 1890,
       Orders: 2000,
     },
   ];

  return(
    <>
      <div className="AnalyticII d-flex align-items-center flex-column justify-content-center  position- h-100" style={{zIndex:"1"}}>
        <LineChart
          width={260}
          height={220}
          data={data02}
          margin={{ right: 10, top: 10 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="User" stroke="#810551" />
          <Line type="monotone" dataKey="Orders" stroke="#00464e" />
        </LineChart>
      </div>
    </>
  )
}