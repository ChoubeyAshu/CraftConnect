

import PageNavbar from "../components/PageNav";
import ProductCard from "../components/ProductCard";
import { categories } from "../Constants/APIs/API";

function ProductListing() {
  return (
    <div>
      {<PageNavbar className={'sticky'}/>}
      <div className="py-3 px-8 h-screen">
        <h2 className=" text-3xl font-bold text-gray-800 mb-6">
          Product Listing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
