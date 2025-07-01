import Polygon1 from "./components/Polygon1";
import Polygon2 from "./components/Polygon2";
import Polygon3 from "./components/Polygon3";

const App = () => {
  return (
    <div className="min-h-screen px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-darkergreen mb-2">“Voices of Success”</h1>
      <p className="text-darkergreen font-bold mb-20 text-2xl">Our Student Stories</p>

      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-10 mr-5 md:mr-10">
        <Polygon1 />
        <Polygon2 />
        <Polygon3 />
      </div>
    </div>
  );
};

export default App;
