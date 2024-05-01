import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  name: string;
  price: number;
  img: string;
  stock: number;
  handler: () => void;
}

// const server = "bhdvhdvhw";

const ProductCard = ({productId,price,name,img,stock,handler}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={img } alt={ name } />
      <p>{ name }</p>
      <span>${ price }</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default ProductCard