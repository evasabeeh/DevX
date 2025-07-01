const PolygonComponent = () => {
    return (
        <div className="relative w-100 h-100 mx-auto flex items-center justify-center">

            <svg
                viewBox="-40 -55 80 65"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-100 h-100 z-0"
            >
                <g transform="scale(-1, 1) translate(-20, 0)">

                    <path
                        d="M -11 0 L -15 -35 C -15 -37 -14 -40 -12 -41 L 28 -51 C 31 -52 36 -48 35 -42 L 31 -8 C 30 -6 30 -6 27 -4 L -6 4 C -10 4 -11 2 -11 0"
                        fill="darkgreen"
                        transform="rotate(10) translate(-1, 1)"
                    />

                    <path
                        d="M -11 0 L -15 -35 C -15 -37 -14 -40 -12 -41 L 28 -51 C 31 -52 36 -48 35 -42 L 31 -8 C 30 -6 30 -6 27 -4 L -6 4 C -10 4 -11 2 -11 0"
                        className="fill-white stroke-black stroke-[0.05]"
                    />
                </g>
            </svg>

            <div className="relative z-10 text-center px-4 mt-14">

                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Avatar"
                    className="w-20 h-20 rounded-full border-4 border-white shadow-md absolute -top-20 left-1/2 transform -translate-x-1/2"
                />

                <h3 className="text-lg font-semibold mt-16">Hannah Smmith</h3>
                <p className="text-sm text-gray-500 mb-2">JEE Aspirant</p>
                <p className="text-4xl text-lightgreen mt-5">“</p>
                <p className="text-xs text-gray-600 leading-snug px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit itaque eaque earum voluptates deserunt blanditiis doloribus recusandae quasi.
                </p>
            </div>
        </div>
    );
};

export default PolygonComponent;
