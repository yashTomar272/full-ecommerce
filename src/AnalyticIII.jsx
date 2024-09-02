
import {XAxis,CartesianGrid,Tooltip,BarChart,Legend,Bar,PieChart,Pie,LineChart,YAxis,Line} from 'recharts'
 export default function AnalyticIII(){
   const data03 = [
     {
       name: "Group A",
       value: 400,
     },
     {
       name: "Group B",
       value: 300,
     },
     {
       name: "Group C",
       value: 300,
     },
     {
       name: "Group D",
       value: 200,
     },
     {
       name: "Group E",
       value: 278,
     },
     {
       name: "Group F",
       value: 189,
     },
   ];
   const data04 = [
      {
        name: "Group A",
        value: 2000,
      },
      {
        name: "Group B",
        value: 3567,
      },
      {
        name: "Group C",
        value: 598,
      },
      {
        name: "Group D",
        value: 2000,
      },
      {
        name: "Group E",
        value: 1000,
      },
      {
        name: "Group F",
        value: 2500,
      },
    ];
  return(
    <>
      <div className="AnalyticII d-flex align-items-center flex-column justify-content-center  position- h-100" style={{zIndex:"1"}}>
        <PieChart width={260} height={220}>
          <Pie
            data={data03}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#00464e"
          />
          <Pie
            data={data04}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#810551"
            label
          />
        </PieChart>
      </div>
    </>
  )
}