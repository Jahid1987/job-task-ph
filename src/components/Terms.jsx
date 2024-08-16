import { useDebouncedCallback } from "use-debounce";
import { brands } from "../utils/brands";
import { categories } from "../utils/categories";

const Terms = ({ terms, setTerms, setPriceSort, setDateSort }) => {
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
    <div className="p-3 border rounded-md">
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
      <h3 className="text-center my-3 text-xl font-bold">Sort Products</h3>
      {/* Price filterign */}
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
      {/* Created At filterign */}
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
    </div>
  );
};

export default Terms;

// const terms = {
//     name: "Classic",
//     brands: [
//       "SoundWave",
//       "CaseMaster",
//       "TechTime",
//     ],
//     categories: [
//       "Electronics",
//       "Furniture",
//     ],
//     priceMin: 40,
//     priceMax: 90,
//   };
