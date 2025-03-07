import Leftnav from "../components/Leftnav";
import Rapper from "../components/Rapper";

function Profile() {
  return (
    <Rapper>
      <main className="w-full min-h-screen bg-[#46516166] flex px-4">
        <Leftnav />
        <div className="flex-1 p-2 border bg-amber-50 border-slate-400">
          <div className="flex h-16 justify-between items-end px-4 border-b border-slate-400 pb-1">
            <h1 className="text-3xl font-bold text-slate-500 underline underline-offset-2">
              My Profile
            </h1>
            <div className=""></div>
          </div>
        </div>
      </main>
    </Rapper>
  );
}

export default Profile;
