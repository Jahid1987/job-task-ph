import { useDebouncedCallback } from "use-debounce";
import { brands } from "../utils/brands";
import { categories } from "../utils/categories";

const Filter = ({ terms, setTerms }) => {
  const handleSetTerms = useDebouncedCallback((event, term) => {
    event.preventDefault();

    if (term === "name") {
      setTerms({ ...terms, name: event.target.value });
    }

    if (term === "brand") {
      setTerms({ ...terms, brands: [...terms.brands, event.target.value] });
    }
    if (term === "category") {
      setTerms({
        ...terms,
        categories: [...terms.categories, event.target.value],
      });
    }
    if (term === "priceMin") {
      setTerms({ ...terms, priceMin: event.target.value });
    }
    if (term === "priceMax") {
      setTerms({ ...terms, priceMax: event.target.value });
    }
  }, 300);

  return (
    <>
      <h3 className="text-center my-3 text-xl font-bold">Filter Products</h3>

      {/* name search  */}
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Type Product Name</span>
        </div>
        <input
          onChange={(event) => handleSetTerms(event, "name")}
          type="text"
          placeholder="Type at least 3 letters"
          className="input input-bordered w-full input-sm"
        />
      </label>
      <div className="flex flex-row lg:flex-col gap-2">
        {/* brand filtering  */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">
              Select Brands:{" "}
              {terms?.brands?.length > 0 &&
                terms.brands.map((brand, index) => (
                  <span className="badge badge-success m-1" key={index}>
                    {brand}
                  </span>
                ))}
            </span>
          </div>
          <select
            onChange={(event) => handleSetTerms(event, "brand")}
            defaultValue="Select Brand"
            className="select select-bordered select-sm w-full"
          >
            <option value="Select Brand" disabled>
              Select Brand
            </option>
            {brands.map((brand) => (
              <option value={brand} key={brand}>
                {brand}
              </option>
            ))}
          </select>
          <div className="label"></div>
        </label>

        {/* categories filtering */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">
              Select Categories:{" "}
              {terms?.categories?.length > 0 &&
                terms.categories.map((category, index) => (
                  <span className="badge badge-success m-1" key={index}>
                    {category}
                  </span>
                ))}
            </span>
          </div>
          <select
            onChange={(event) => handleSetTerms(event, "category")}
            defaultValue="Select Categories"
            className="select select-bordered select-sm w-full"
          >
            <option value="Select Categories" disabled>
              Select Categories
            </option>
            {categories.map((categories) => (
              <option value={categories} key={categories}>
                {categories}
              </option>
            ))}
          </select>
          <div className="label"></div>
        </label>
      </div>
      <div className="flex flex-row lg:flex-col gap-2">
        {/*Min price filterign */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Type Min Price</span>
          </div>
          <input
            onChange={(event) => handleSetTerms(event, "priceMin")}
            type="number"
            placeholder="Input minimum price"
            className="input input-bordered w-full input-sm"
          />
        </label>
        {/*Min price filterign */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Type Max Price</span>
          </div>
          <input
            onChange={(event) => handleSetTerms(event, "priceMax")}
            type="number"
            placeholder="Input Maximum price"
            className="input input-bordered w-full input-sm"
          />
        </label>
      </div>
    </>
  );
};

export default Filter;
