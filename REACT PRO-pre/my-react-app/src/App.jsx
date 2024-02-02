// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Puma from './assets/puma.png'
// import Shoes from './assets/shoes.jpg'
// import StarIcon from '@mui/icons-material/Star';
// import StarHalfIcon from '@mui/icons-material/StarHalf';
 
// export default function ButtonUsage() {
//   return(
//     <>
//         <div className='bg-[#C88EFE] h-screen place-content-center '>
//             <div className='font-bold text-5xl text-white text-center pt-16'>Item Cart Using HTML & CSS
//                 <div className='flex justify-center m-5 '>
//                     <div className='bg-white  w-96 rounded-lg p-4'>
//                         <div className='text-black text-right mr-5'>
//                             <div className='flex w-full justify-between'>
//                               <img src={Puma}  className='w-9 h-9' alt="" />
//                               <ShoppingCartIcon/></div>
//                                 <div><img src={Shoes} className='h-32 flex mx-auto hover:bg-gray-400' alt="" /></div>                     
//                                 <h1 className='text-start text-2xl mb-2 '>XRay Jr Dark</h1>
//                                   <p className='font-normal text-lg text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labor  quae quaerat eaque.</p>
//                                   <div className='text-violet-500 text-left'>
//                                     <StarIcon/>
//                                     <StarIcon/>
//                                     <StarIcon/>
//                                     <StarIcon/>
//                                     <StarHalfIcon/>
//                                   </div>
                               
//                                 <div className='text-3xl text-center mb-3'>
//                                   <span className='text-green-500 text-xl '><sup>$</sup></span>5.00/-
//                                 </div>                 
//                                 <button className='bg-[#C88EFE] py-2 px-20 mr-2  rounded-full text-2xl text-white font-normal hover:bg-[#c85EFE] '>Add To Cart</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
//  }



import './App.css'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Filter from './Pages/Filter'
import Contact from './Pages/Contact'
import Company from './Pages/Company'
import Channel from './Pages/Chanal'
import Other from './Pages/Other'
import Login from './components/Login'
import ProtectedRoute from './Pages/ProtectedRoute'

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute Component={Home}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/filter" element={<Filter/>}></Route>
            <Route path="/contact/" element={<Contact/>}>
              <Route path='company' element={<Company/>}/> 
              <Route path='channel' element={<Channel/>}/>
              <Route path='other' element={<Other/>}/>
            </Route>  
            <Route path='/Login' element={<Login/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App