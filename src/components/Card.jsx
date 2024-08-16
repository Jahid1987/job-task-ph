import { truncateText } from "../utils/truncateText";

const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 w-fullshadow-xl">
      <figure>
        <img src={product?.image} alt={product?.name} />
      </figure>
      <div className="card-body p-1 md:p-2">
        <h2 className="card-title">
          {truncateText(product?.name, 20)}
          <div className="badge badge-outline badge-success">
            ${product?.price}
          </div>
        </h2>
        <p className="hidden lg:block">
          {truncateText(product?.shortDescription, 80)}
        </p>
        <p className="md:hidden block text-sm">
          {truncateText(product?.shortDescription, 30)}
        </p>
        <div className="flex gap-1 justify-between flex-wrap">
          <div className="badge badge-outline">
            Category: {product?.category}
          </div>
          <div className="badge badge-outline">Rating: {product?.rating}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-success btn-outline btn-sm lg:btn-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card bg-base-100 w-full shadow-xl">

<div className="p-2 md:p-3 space-y-1 md:space-y-2">

  <div className="flex gap-1 flex-wrap">
    <div className="badge badge-outline">
      Category: {product?.category}
    </div>
    <div className="badge badge-outline">Rating: {product?.rating}</div>
  </div>
  <div className="card-actions justify-center pt-3">
    <button className="btn btn-success btn-outline btn-sm md:btn-md">
      Add to Cart
    </button>
  </div>
</div>
</div> */
}
