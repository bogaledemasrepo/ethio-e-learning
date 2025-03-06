function CustomButton(probs) {
  return (
    <div>
      <button
        className={`py-2 px-5 bg-blue-500 text-white rounded-md text-xl hover:scale-105 transition duration-300 cursor-pointer font-semibold ${probs.className}`}
        type={probs.type || "button"}
      >
        {probs.title}
      </button>
    </div>
  );
}

export default CustomButton;
