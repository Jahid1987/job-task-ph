const PrimaryButton = ({ name }) => {
  return (
    <button className="btn btn-sm md:btn-md  btn-outline btn-success font-light">
      {name}
    </button>
  );
};

export default PrimaryButton;
