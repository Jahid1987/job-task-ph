import Card from "./Card";

const Products = ({ products }) => {
  return (
    <div className="grid gap-3 md:gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
      {products?.length > 0 &&
        products.map((product) => <Card key={product._id} product={product} />)}
    </div>
  );
};

export default Products;
