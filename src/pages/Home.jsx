import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const [terms, setTerms] = useState({
    name: "",
    brands: [],
    categories: [],
    priceMin: "",
    priceMax: "",
  });
  const [priceSort, setPriceSort] = useState("");
  const [dateSort, setDateSort] = useState("");
  // const count = 50;
  const pageNumber = Math.ceil(count / itemPerPage);
  const pages = [...Array(pageNumber).keys()];

  useEffect(() => {
    (async function () {
      try {
        // fetching total amount of products to estimate total pages
        const { data: totalProducts } = await axios.get(
          `https://my-shop-server-2.vercel.app/productcount?terms=${JSON.stringify(
            terms
          )}`
        );
        setCount(totalProducts.count);

        // fetching all products

        const { data: products } = await axios.get(
          `https://my-shop-server-2.vercel.app/products?dateSort=${dateSort}&priceSort=${priceSort}&page=${currentPage}&size=${itemPerPage}&terms=${JSON.stringify(
            terms
          )}`
        );
        setProducts(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [currentPage, itemPerPage, terms, dateSort, priceSort]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
      {/* left side: filtering side  */}
      <div className="lg:col-span-3 p-3 border rounded-md">
        <Filter terms={terms} setTerms={setTerms} />
        <Sort setDateSort={setDateSort} setPriceSort={setPriceSort} />
      </div>

      {/* right side: products*/}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="lg:col-span-9">
          {products?.length > 0 ? (
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
          ) : (
            <p className="text-center w-full">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
