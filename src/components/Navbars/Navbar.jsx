// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// export default function Navbar() {
//     const navigator = useNavigate();
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//             Navbar
//             </a>
//             <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//             >
//             <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to="">
//                         Home
//                     </Link>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <span
//                         className="nav-link dropdown-toggle"
//                         id="navbarDropdown"
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                         onClick={() => {
//                             navigator('/about')
//                         }}
//                     >
//                         About
//                     </span>
//                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <span onClick={() => {
//                             navigator('about/my-infor')
//                         }}>
//                             <span className="dropdown-item">
//                                 My Infor
//                             </span>
//                         </span>
//                     </ul>
//                 </li>
//             </ul>
//             <form className="d-flex">
//                 <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 />
//                 <button className="btn btn-outline-success" type="submit">
//                 Search
//                 </button>
//             </form>
//             </div>
//         </div>
//     </nav>
//   )
// }


import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.scss"
export default function Navbar() {
    const navigator = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar__container">   
        <div className="container-fluid">
            <div className='navbar__logo'> 
                <img className='navbar__logo__img' src='../images/logo/logo.svg'>
                    
                </img>
            </div>
            <div className='navbar__toggler__container'> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav__item__main">
                    <li className="nav-item ">
                        <Link className="nav-link active sub-nav-item" aria-current="page" to="">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <span
                            className="nav-link dropdown-toggle sub-nav-item"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={() => {
                                navigator('/about')
                            }}
                        >
                            Menu
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to = "menu/food" className="dropdown-item sub-nav-item_menu">
                                    FOOD
                                </Link>
                                <Link to = "menu/drinks" className="dropdown-item sub-nav-item_menu">
                                    DRINKS
                                </Link>
                        </ul>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link active sub-nav-item" aria-current="page" to="">
                            About
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link active sub-nav-item" aria-current="page" to="">
                            Contact
                        </Link>
                    </li>
                </ul>
                <form className="d-flex search__container">
                    <input
                    className="form-control me-2 search__input"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-outline-success search__btn" type="submit">
                        {/* <i className="fa-regular fa-magnifying-glass search__icon"></i> */}
                        <span className="material-symbols-outlined search__icon">
                            search
                        </span>
                    </button>
                </form>
                    <div className='user__nav'>
                        <div className='cart__icon'>
                            <span class="material-symbols-outlined">
                            shopping_cart
                            </span>
                        </div>  
                        <div className='user__icon'>
                            <span class="material-symbols-outlined">
                            account_circle
                            </span>                            
                        </div>    
                    </div>
                </div>
            </div>            
        </div>
    </nav>
  )
}