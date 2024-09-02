import {XAxis,CartesianGrid,Tooltip,BarChart,Legend,Bar,PieChart,Pie,LineChart,YAxis,Line} from 'recharts'
export default function AnalyticI(){
  const data = [
    {
      "name": "jan",
      "User": 4000,
      "Earnings": 2400
    },
    {
      "name": "feb",
      "User": 3000,
      "Earnings": 1398
    },
    {
      "name": "mar",
      "User": 2000,
      "Earnings": 9800
    },
    {
      "name": "april",
      "User": 2780,
      "Earnings": 3908
    },
    {
      "name": "may",
      "User": 1890,
      "Earnings": 4800
    },
    {
      "name": "june",
      "User": 2390,
      "Earnings": 3800
    },
    {
      "name": "july",
      "User": 3490,
      "Earnings": 4300
    }
  ]


        return(
        <>
    <div className="Analytic d-flex align-items-center flex-column justify-content-center  position- h-100" style={{zIndex:"1"}}>
            <header className="d-flex justify-content-center align-items-center w-100 fw-bold">
      <span className="User" style={{color:"#00464e"}}>User:</span>
      <span className="Earnings" style={{color:"#810551"}}>Earnings:</span>
          </header>
        <BarChart className='Chart' width={250} height={210} data={data}>
          <CartesianGrid strokeDasharray="100 10" />
          <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="User" fill="#00464e" />
        <Bar dataKey="Earnings" fill="#810551" />
      </BarChart>


    </div>

        </>)}


