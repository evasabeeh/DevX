import Polygon1 from "./components/Polygon1";
import Polygon2 from "./components/Polygon2";
import Polygon3 from "./components/Polygon3";

const App = () => {
  return (
    <div className="min-h-screen py-16 text-center">
      <h1 className="text-4xl font-extrabold text-darkgreen mb-2">“Voices of Success”</h1>
      <p className="text-darkgreen font-bold mb-20 text-xl">Our Student Stories</p>
      <div className="flex items-center gap-4">
        <Polygon1 />
        <Polygon2 />
        <Polygon3 />
      </div>

    </div>
  );
};

export default App;
