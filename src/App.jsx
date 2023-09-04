import Certificate from "./components/certificate";
import Portofolio from "./components/portofolio";
import Profile from "./components/profile";
import Stack from "./components/stack";

function App() {
  return (
    <div className="h-full w-full bg-grayscale">
      <main className="container mx-auto lg:px-8 xl:px-10 2xl:px-14 px-6 py-12 h-full ">
        <Profile />
        <div className="flex flex-col lg:flex-row w-full mt-4 gap-x-4">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-y-4 gap-x-4 lg:gap-y-0 w-full lg:w-1/3">
            <Stack />
            <Certificate />
          </div>
          <Portofolio />
        </div>
      </main>
    </div>
  );
}

export default App;
