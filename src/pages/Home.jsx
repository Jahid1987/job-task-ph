import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const count = 76;

  const pageNumber = Math.ceil(count / itemPerPage);
  const pages = [...Array(pageNumber).keys()];

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

  // pagination
  // handle per page items
  function handlePerPageItem(e) {
    setItemPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  }

  // handle previous page
  function handlePrevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }
  // handle next page
  function handleNextPage() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  // fall back before data is loading...
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {/* all products showing  */}
      <Products products={products} />
      {/* pagination  */}
      <div className="text-center my-2">
        <button
          className="btn btn-sm btn-outline btn-success"
          onClick={handlePrevPage}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "text-green-500 px-2" : "px-2"}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          className="btn btn-sm btn-outline btn-success"
          onClick={handleNextPage}
        >
          Next
        </button>
        <select
          className="btn btn-sm ml-2 btn-outline btn-success"
          onChange={handlePerPageItem}
          value={itemPerPage}
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
