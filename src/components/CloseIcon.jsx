function CloseIcon(probs) {
  return (
    <div className=" flex items-center justify-center w-8 h-8 cursor-pointer relative">
      <div
        className={`absolute w-full h-1 ${probs.bg} rotate-45 rounded-full`}
      ></div>
      <div
        className={`absolute w-full h-1 rounded-full ${probs.bg} -rotate-45`}
      ></div>
    </div>
  );
}

export default CloseIcon;
