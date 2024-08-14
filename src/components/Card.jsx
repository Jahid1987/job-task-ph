import { truncateText } from "../utils/truncateText";

const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={product?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product?.name}
          <div className="badge badge-outline badge-success">
            ${product?.price}
          </div>
        </h2>
        <p>{truncateText(product?.shortDescription, 50)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product?.category}</div>
          <div className="badge badge-outline">{product?.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
