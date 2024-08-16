const Sort = ({ setPriceSort, setDateSort }) => {
  function handleSort(event, term) {
    event.preventDefault();
    if (term === "price") {
      setPriceSort(event.target.value);
      setDateSort("");
    } else {
      setDateSort(event.target.value);
      setPriceSort("");
    }
  }
  return (
    <>
      {" "}
      <h3 className="text-center my-3 text-xl font-bold">Sort Products</h3>
      {/* Price sorting */}
      <div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Low to High</span>
            <input
              onChange={(event) => handleSort(event, "price")}
              type="radio"
              name="price"
              value="1"
              className="radio checked:bg-red-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Hight to Low</span>
            <input
              onChange={(event) => handleSort(event, "price")}
              type="radio"
              name="price"
              value="-1"
              className="radio checked:bg-blue-500"
            />
          </label>
        </div>
      </div>
      {/* Created At sorting */}
      <div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Newest to Oldest</span>
            <input
              onChange={(event) => handleSort(event, "createdAt")}
              type="radio"
              name="createdAt"
              value="-1"
              className="radio checked:bg-red-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Oldest to Newest</span>
            <input
              onChange={(event) => handleSort(event, "createdAt")}
              type="radio"
              name="createdAt"
              value="1"
              className="radio checked:bg-blue-500"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Sort;
