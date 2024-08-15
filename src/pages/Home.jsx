import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import Pagination from "../components/Pagination";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  // const count = 50;
  const pageNumber = Math.ceil(count / itemPerPage);
  const pages = [...Array(pageNumber).keys()];

  useEffect(() => {
    (async function () {
      try {
        // fetching total amount of products
        const { data: totalProducts } = await axios.get(
          "http://localhost:5000/productcount"
        );
        setCount(totalProducts.count);
        // fetching all products
        const { data: products } = await axios.get(
          `http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}`
        );
        setProducts(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [currentPage, itemPerPage]);

  // fall back before data is loading...
  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
      {/* left side: filtering side  */}
      <div>filtering side here</div>

      {/* right side: products*/}
      <div>
        {/* all products showing  */}
        <Products products={products} />

        {/* pagination  */}
        <Pagination
          setItemPerPage={setItemPerPage}
          itemPerPage={itemPerPage}
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
