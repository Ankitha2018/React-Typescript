import AdminSidebar from "../../../components/adminComponents/adminSidebar";
import { BarChart } from "../../../components/adminComponents/charts";
import {months} from '../../../assets/data.json'

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "Aug",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

const BarCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
      <h1>Bar Charts</h1>
      <section>
        <BarChart
          data_1={[200, 444, 343, 556, 778, 455, 990]}
          data_2={[300, 144, 433, 655, 237, 755, 190]}
          title_1="Products"
          title_2="Users"
          bgColor_1={`hsl(180,50%,40%)`}
          bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>Top selling products & top customers</h2>
        </section>
        <section>
          <BarChart
          horizontal={true}
          data_1={[200, 444, 343, 556, 778, 455, 990,444, 343, 556, 778, 455]}
          data_2={[]}
          title_1="Products"
          title_2="Users"
          bgColor_1={`hsl(180,80%,30%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
        </main>
        </div>
  )
}

export default BarCharts