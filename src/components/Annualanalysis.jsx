function Annualanalysis() {
  return (
    <div className="p-2 w-fit border border-slate-300 m-4 rounded-md">
      <h1 className="text-slate-500 font-semibold">
        Ethio E-Learning users analesis
      </h1>
      <div className="h-[200px] flex flex-col">
        <div className="flex-2 w-full gap-1 flex">
          <div className="flex-9 flex flex-col justify-end">
            <div className="h-[calc(90% - 40px)]"></div>
            <select
              name=""
              id=""
              className="h-[calc(40px)] p-1 border border-slate-300 rounded-sm"
            >
              <option value="">2025</option>
              <option value="">2024</option>
              <option value="">2023</option>
              <option value="">2022</option>
            </select>
          </div>
          {[{ index: "Jan-2024", height: `h-[30%]` }].map(
            ({ index, height }) => (
              <div
                key={index}
                className="flex-1 flex items-center flex-col justify-end space-y-0.5"
              >
                <div
                  className={`flex-9 h-[calc(90% - 40px)] flex items-end text-slate-500 font-semibold`}
                >
                  <div className={`${height} w-4 bg-black/40`}></div>
                </div>
                <div className="flex-1 h-[40px] text-slate-500 font-semibold bg-black/40 px-2 rounded-[2px]">
                  {index}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Annualanalysis;
