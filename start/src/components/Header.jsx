import Cart from './Cart'

export default function Header({amount}) {
    return (
      <header>
        <img id="logo" src="website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
        <button onClick={() => console.log("Hello World")}>
          <span id="cartCount">{amount}</span>
          <img id="cart-icon" src="website_images/legocart.svg" alt="Din handlevogn" />
        </button>
        <Cart/>
      </header>
    )
  }