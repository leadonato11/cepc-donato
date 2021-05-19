import CartIcon from "../assets/icons/shoppingCart.svg"
import NavBar from "../styles/NavBar.css"

const CartWidget = () => {
    return (
        <>
          <div>
            <img className={NavBar} src={CartIcon} alt="" />
          </div>
        </>
  )
}

export default CartWidget