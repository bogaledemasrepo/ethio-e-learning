function CustomButton(probs) {
  return (
    <div>
      <a href="/login">
        <button
          className={`py-2 px-5 bg-blue-500 text-white rounded-md text-xl hover:scale-105 transition duration-300 cursor-pointer font-semibold ${probs.className}`}
        >
          {probs.title}
        </button>
      </a>
    </div>
  );
}

export default CustomButton;
