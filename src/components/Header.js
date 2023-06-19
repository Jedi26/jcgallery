import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import { useCartCount } from "../context/StoreContext"
// import { Links } from "../components/LinksJSX"
//import { MdShoppingCart} from 'react-icons/md'

const Header = (props) => {


    return (

    <header id="header" className="alt">
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:void(0)">Menu</a>
        </nav>
        <Link to="/" className="logo"><strong>JC PORTFOLIO</strong> </Link>
      
      
        {/* <cart>
        <Links url="/cart" isButton>
          Cart  <MdShoppingCart />
         <span>{countMarkup} </span> 
        </Links>
        </cart> */}
    </header>
    )
}

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
