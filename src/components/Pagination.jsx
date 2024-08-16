const Pagination = ({
  itemPerPage,
  pages,
  setCurrentPage,
  currentPage,
  setItemPerPage,
}) => {
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

  return (
    <div className="text-center my-5 mt-8 md:my-8">
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
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default Pagination;
