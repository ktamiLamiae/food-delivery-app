import PulseLoader from "react-spinners/PulseLoader";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "auto",
  };

  return (
    <div className="flex justify-center items-center h-full">
      <PulseLoader color="#4338ca" loading={loading} cssOverride={override} size={15} />
    </div>
  );
};

export default Spinner;
