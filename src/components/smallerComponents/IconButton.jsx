/* eslint-disable react/prop-types */
const IconButton = ({ icon, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-300 mx-1`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
