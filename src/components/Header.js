import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import { useCartCount } from "../context/StoreContext"
// import { Links } from "../components/LinksJSX"
//import { MdShoppingCart} from 'react-icons/md'

const Header = (props) => {

    // const count = useCartCount()

    // const countMarkup = (
    //   <span
    //     sx={{
    //       display: "inline-block",
    //       background: "white",
    //       color: "black",
    //       height: "20px",
    //       lineHeight: "20px",
    //       width: "20px",
    //       fontSize: "0.8em",
    //       borderRadius: "10px",
    //       ml: 2,
    //       top: "-2px",
    //       position: "relative",
    //       textAlign: "center",
    //     }}
    //   >
    //     {count}
    //   </span>
    // )

    return (

    <header id="header" className="alt">
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="/">Menu</a>
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
