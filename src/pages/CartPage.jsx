import React from "react";
import { useCart } from "../Constants/Values/CartContext";
import PageNavbar from "../components/PageNav";

function CartPage() {
  const { cartItems, removeFromCart /*clearCart*/ } = useCart();

  const handleRemoveFromCart = (id) => {
    removeFromCart(id); // Remove item by id from cart
  };

  // const handleClearCart = () => {
  //   clearCart(); // Clear all items from cart
  // };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ); // Sum up total price

  return (
    <div>
      {<PageNavbar />}

      <div className="p-6">
        <h1 className=" text-3xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{item.seller}</p>
                  <p>
                    Price: {item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  class="group relative flex h-10 w-10 flex-col items-center justify-center overflow-hidden rounded-md border-2 border-red-800 bg-red-400 hover:bg-red-600"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <svg
                    viewBox="0 0 1.625 1.625"
                    class="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                    height="15"
                    width="15"
                  >
                    <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                    <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                    <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                  </svg>
                  <svg
                    width="16"
                    fill="none"
                    viewBox="0 0 39 7"
                    class="origin-right duration-500 group-hover:rotate-90"
                  >
                    <line
                      stroke-width="4"
                      stroke="white"
                      y2="5"
                      x2="39"
                      y1="5"
                    ></line>
                    <line
                      stroke-width="3"
                      stroke="white"
                      y2="1.5"
                      x2="26.0357"
                      y1="1.5"
                      x1="12"
                    ></line>
                  </svg>
                  <svg width="16" fill="none" viewBox="0 0 33 39" class="">
                    <mask fill="white" id="path-1-inside-1_8_19">
                      <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                    </mask>
                    <path
                      mask="url(#path-1-inside-1_8_19)"
                      fill="white"
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    ></path>
                    <path
                      stroke-width="4"
                      stroke="white"
                      d="M12 6L12 29"
                    ></path>
                    <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                  </svg>
                </button>
              </div>
            ))}
            <div className="mt-3">
              <h3 className="font-semibold">Total: ₹{totalPrice}</h3>
              <button
                class="bg-slate-100 text-center w-full rounded-2xl h-14 relative text-black text-xl font-semibold group overflow-hidden"
                type="button"
              >
                <p class="translate-x-2 group-hover:-translate-x-96 group-hover:text-black flex items-center justify-center h-full w-full absolute top-0 left-0 duration-500">
                  <span>Total:{totalPrice}</span>
                </p>
                <div class="bg-green-400 rounded-xl h-12 w-1/12 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-1/2 z-10 duration-500">
                  <span class="hidden group-hover:flex items-center space-x-2 z-50">
                    Checkout
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="25px"
                    width="25px"
                    class="duration-300"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#000000"
                    ></path>
                    <path
                      d="m786.752 512-265.408-265.344a32 32 0 0 1 45.312-45.312l288 288a32 32 0 0 1 0 45.312l-288 288a32 32 0 1 1-45.312-45.312L786.752 512z"
                      fill="#000000"
                    ></path>
                  </svg>
                </div>
              </button>

              {/* <button
              className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 ml-4"
              onClick={handleClearCart}
            >
              Clear Cart
            </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
