function CloseIcon(probs) {
  return (
    <button className="w-8 h-8 cursor-pointer relative">
      <div
        className={`absolute w-full h-1 ${probs.bg} rotate-45 rounded-full`}
      ></div>
      <div
        className={`absolute w-full h-1 rounded-full ${probs.bg} -rotate-45`}
      ></div>
    </button>
  );
}

export default CloseIcon;
