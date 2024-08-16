import { brands } from "../utils/brands";
import { categories } from "../utils/categories";

const Terms = ({ terms, setTerms }) => {
  function handleSetTerms(event, term) {
    event.preventDefault();

    if (term === "name" && event.target.value.length > 2) {
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
