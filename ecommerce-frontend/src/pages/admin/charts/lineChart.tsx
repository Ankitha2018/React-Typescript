import AdminSidebar from "../../../components/adminComponents/adminSidebar";
import { LineChart } from "../../../components/adminComponents/charts";
import {months} from '../../../assets/data.json'

const LineCharts = () => {
    return (
        <div className="admin-container">
        <AdminSidebar />
        <main className="chart-container">
      <h1>Line Charts</h1>
      <section>
        <LineChart
          data={[200, 444, 343, 556, 778, 455, 990,7846,741,1000,1300]}
          label="Users"
          borderColor="rgb(53,162,255)"
          backgroundColor="rgba(53,162,255,0.5)" 
          labels={months}    
          />
          <h2>Active Users</h2>
          </section>

          <section>
        <LineChart
          data={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
          label="Revenue"
          backgroundColor={"hsla(269,80%,40%,0.4)"}
            borderColor={"hsl(269,80%,40%)"}
          labels={months}    
          />
          <h2>Total Products (SKU)</h2>
          </section>

          <section>
        <LineChart
          data={[
            24000, 14400, 24100, 34300, 90000, 20000, 25600, 44700, 99000,
            144400, 100000, 120000,
          ]}
          label="Revenue"
          backgroundColor={"hsla(129,80%,40%,0.4)"}
          borderColor={"hsl(129,80%,40%)"}
          labels={months}    
          />
          <h2>Total Revenue</h2>
          </section>

          <section>
        <LineChart
           data={[
            9000, 12000, 12000, 9000, 1000, 5000, 4000, 1200, 1100, 1500,
            2000, 5000,
          ]}
          label="Discount"
          borderColor="rgb(255,165,255)"
          backgroundColor="rgba(255,162,255,0.6)" 
          labels={months}    
          />
          <h2>Discount Allotted</h2>
          </section>
        </main>
        </div>
  )
}

export default LineCharts