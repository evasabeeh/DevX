import Polygon1 from "./components/Polygon1";
import Polygon2 from "./components/Polygon2";
import Polygon3 from "./components/Polygon3";

const App = () => {
  return (
    <div className="min-h-screen px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-darkgreen mb-2">“Voices of Success”</h1>
      <p className="text-darkgreen font-bold mb-20 text-2xl">Our Student Stories</p>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-10 lg:gap-0">
        <Polygon1 />
        <Polygon2 />
        <Polygon3 />
      </div>
    </div>
  );
};

export default App;