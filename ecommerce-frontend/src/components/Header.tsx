import { useState } from "react";
import { FaSearch, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {
    _id: "cds",
    role:"admin"
}

const Header = () => {

    const [isOpen, setIsOpen] = useState( false )
    
    const logoutHandler = () =>
    {
        setIsOpen( false );
    }

  return (
      <nav className="header">
          <Link to={"/"} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to={ "/search" }  onClick={() => setIsOpen(false)}><FaSearch /></Link>
          <Link to={"/cart"}  onClick={() => setIsOpen(false)}><FaShoppingCart/></Link>
          
          {
              user._id ? (
                  <>
                      <button onClick={() =>setIsOpen((prev)=> !prev )}><FaUser /></button>
                      <dialog open={isOpen}>
                          <div>
                              {
                                  user.role === "admin" && 
                                  ( <Link to= "/admin/dashboard">Admin</Link> ) }
                              
                              <Link to={ "/orders" }>Orders</Link>
                              <button onClick={logoutHandler}><FaSignOutAlt/></button>
                          </div>
                      </dialog>
                  </>
              ):<Link to={"/login"}><FaSignInAlt/></Link>
          }
    </nav>
  )
}

export default Header