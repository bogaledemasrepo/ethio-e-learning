function CustomInput(probs) {
  return (
    <div className="flex flex-col">
      <label className="text-slate-600 text-xl my-2">{probs.label}</label>
      <input
        type={probs.type}
        className="px-3 outline outline-transparent hover:outline-slate-300 py-2 rounded-lg border border-slate-400 bg-[#fff]/20 text-slate-600"
        placeholder={probs.placeholder || ""}
      />
    </div>
  );
}

export default CustomInput;
