import './App.scss'
import {Routes, Route} from 'react-router-dom'
import LazyLoad from './LazyLoad'
import Navbar from '@components/Navbars/Navbar'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='app_container'>
        <Navbar></Navbar>
        {/* Content Router */}
        <Routes>
          <Route path="" element={LazyLoad(() => import("@pages/Homes/Home"))()} />
          <Route path="menu/:type" element={LazyLoad(() => import("@pages/Menus/Menu"))()}>
            {/* Router Con Của About */}
              {/* <Route path='my-infor' element={LazyLoad(() => import("@pages/Abouts/MyInfors/MyInfor"))()}></Route>? */}
          </Route>
          <Route path=''></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}
                           
export default App;
