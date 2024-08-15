import { truncateText } from "../utils/truncateText";

const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={product?.image} alt="Shoes" />
      </figure>
      <div className="p-2 md:p-3 space-y-1 md:space-y-2">
        <h2 className="card-title text-sm md:text-lg lg:text-xl">
          {product?.name}
          <div className="badge badge-outline badge-success">
            ${product?.price}
          </div>
        </h2>
        <p className="hidden md:block">
          {truncateText(product?.shortDescription, 50)}
        </p>
        <p className="md:hidden block text-sm">
          {truncateText(product?.shortDescription, 30)}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product?.category}</div>
          <div className="badge badge-outline">{product?.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
