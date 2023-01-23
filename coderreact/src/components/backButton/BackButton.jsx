import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="grid grid-cols-12 m-2">
        <button
          className="p-2 border bg-blue-400 col-start-11 text-white rounded-md"
          onClick={handleBack}
        >
          Volver
        </button>
      </div>
  );
}

export default BackButton;