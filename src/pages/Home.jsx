import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(`http://localhost:5000/products`);
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="grid gap-3 md:gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
      {products?.length > 0 &&
        products.map((product) => <Card key={product._id} product={product} />)}
    </div>
  );
};

export default Home;
