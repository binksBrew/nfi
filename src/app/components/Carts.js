import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Flame Seedless Grapes",
    price: "Rs 450/- per Box",
    image: "/grape1.png", // Ensure these images exist in the public folder
  },
  {
    id: 2,
    name: "Flame Seedless Grapes",
    price: "Rs 450/- per Box",
    image: "/grape2.png",
  },
  {
    id: 3,
    name: "Jumbo Black Grapes",
    price: "Rs 450/- per Box",
    image: "/grape3.png",
  },
];

const Cart = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Flame Seedless Grapes
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md p-4 rounded-lg text-center">
              {/* Product Image */}
              <div className="relative w-full h-52 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Product Details */}
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>

              {/* Add to Cart Link */}
              <Link href="#" className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
                {/* Add to Cart → */}
                Order Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
