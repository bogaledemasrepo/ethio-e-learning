function MenuIcon(probs) {
  return (
    <div className="w-8 h-8 px-1 flex flex-col justify-evenly cursor-pointer">
      {[1, 2, 3].map((Item) => (
        <div key={Item} className={`w-full ${probs.bg} h-1 rounded-full`}></div>
      ))}
    </div>
  );
}

export default MenuIcon;
