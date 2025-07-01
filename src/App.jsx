import Polygon1 from "./components/Polygon1";
import Polygon2 from "./components/Polygon2";
import Polygon3 from "./components/Polygon3";

const App = () => {
  return (
    <div className="min-h-screen mt-4 text-center mx-2">
      <h1 className="text-4xl font-extrabold text-darkgreen mb-2">“Voices of Success”</h1>
      <p className="text-darkgreen font-bold mb-30 text-2xl">Our Student Stories</p>
      <div className="flex items-center justify-center gap-12">
        <Polygon1 />
        <Polygon2 />
        <Polygon3 />
      </div>
    </div>
  );
};

export default App;
