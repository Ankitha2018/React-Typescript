
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { lazy,Suspense } from "react";
import Loader from './components/adminComponents/loader';


const Products =lazy(()=> import('./pages/admin/products'));
const Transaction =lazy(()=> import('./pages/admin/transaction'));
const Customers =lazy(()=> import('./pages/admin/customers'));
const Dashboard =lazy (() => import('./pages/admin/dashboard'));
const Home  = lazy(() => import('./pages/home')) ;
const Search = lazy(() => import('./pages/search')) ;
const Cart = lazy(() => import('./pages/cart')) ;
const NewProduct = lazy(() => import('./pages/admin/management/newProduct')) ;
const ProductManagement = lazy(() => import('./pages/admin/management/productManagement')) ;
const TransactionManagement = lazy(() => import('./pages/admin/management/transactionManagement')) ;
const BarCharts = lazy(() => import('./pages/admin/charts/barChart')) ;
const PieCharts = lazy(() => import('./pages/admin/charts/pieChart')) ;
const LineCharts = lazy(() => import('./pages/admin/charts/lineChart')) ;
const Coupon = lazy(() => import('./pages/admin/apps/Coupon')) ;
const Stopwatch = lazy(() => import('./pages/admin/apps/Stopwatch')) ;
const Toss = lazy(() => import('./pages/admin/apps/Toss')) ;
import Header from './components/Header';


const App = () => {
  return (
    <Router>
      {/* Header */ }
      <Header/>

      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path ="/" element={ <Home/>} /> 
        <Route path ="/search" element={ <Search/>} />
        <Route path="/cart" element={ <Cart /> } />
          {/*for admin */ } 
        <Route path ="/" element={<Link to="/admin/dashboard"> Click here to visit Dashboard</Link>} />
        <Route path ="/admin/dashboard" element={<Dashboard/>} />
        <Route path ="/admin/products" element={<Products/>} />
        <Route path ="/admin/transaction" element={<Transaction/>} />
          <Route path="/admin/customers" element={ <Customers /> } />
          {/*Charts */ }

          <Route path ="/admin/chart/bar" element={<BarCharts/>} />
          <Route path ="/admin/chart/line" element={<LineCharts/>} />
          <Route path ="/admin/chart/pie" element={<PieCharts/>} />
          {/* {Apps} */ }
          <Route path='/admin/app/coupon' element={ <Coupon /> } />
          <Route path='/admin/app/stopwatch' element={ <Stopwatch /> } />
          <Route path='/admin/app/toss' element={ <Toss />} />
          {/* {Management} */ }
          <Route path='/admin/product/new' element={ <NewProduct/> }/>
          <Route path='/admin/product/:id' element={ <ProductManagement/> }/>
          <Route path='/admin/transaction/:id' element={ <TransactionManagement/> }/>
      </Routes>
     </Suspense>
    </Router>
  )
}

export default App