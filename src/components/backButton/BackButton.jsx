import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="grid lg:grid-cols-12  m-2 ">
        <button
          className="p-2  bg-blue-400 hover:bg-blue-500 col-start-10 w-auto  text-white rounded-md"
          onClick={handleBack}
        >
          Volver
        </button>
      </div>
  );
}

export default BackButton;
