import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <Link to={`/products/${product.title}`}>
      
        <div class="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-10 shadow-lg after:-z-10 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
          <img
            src={process.env.PUBLIC_URL + product.image}
            alt=""
            className="w-36"
          />
          <p class="cardtxt font-semibold text-gray-500 tracking-wider group-hover:text-gray-700 text-xl">
            {product.title}
          </p>
          <p class="blueberry font-semibold text-gray-600 text-xs">
            {product.desc}
          </p>
          <div class="ordernow flex flex-row justify-end items-center w-full">
            {/* <p
      class="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
      >
      View Products
      </p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
