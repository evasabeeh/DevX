const PolygonComponent = () => {
    return (
        <div className="relative w-100 h-100 mx-auto flex items-center justify-center bg-transparent">

            <svg
                viewBox="-22 -44 55 55"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-90 h-90 z-0"
            >

                <path
                    d="M -21 -1 L -15 -35 C -15 -37 -14 -40 -12 -41 L 17 -44 C 23 -44 26 -44 28 -38 L 31 -8 C 31 -1 29 0 25 2 L -13 8 C -19 9 -22 6 -21 -1"
                    fill="darkgreen"
                    transform="rotate(10) translate(-1, 1)"
                />

                <path
                    d="M -21 -1 L -15 -35 C -15 -37 -14 -40 -12 -41 L 17 -44 C 23 -44 26 -44 28 -38 L 31 -8 C 31 -1 29 0 25 2 L -13 8 C -19 9 -22 6 -21 -1"
                    className="fill-white stroke-black stroke-[0.05]"
                />
            </svg>

            <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Avatar"
                className="w-20 h-20 rounded-full border-4 border-white shadow-md absolute -top-10 left-1/2 transform -translate-x-1/2 z-10"
            />

            <div className="relative z-10 text-center px-4 mt-16">
                <h3 className="text-lg font-semibold">Hannah Smmith</h3>
                <p className="text-sm text-gray-500 mb-1">NEET Aspirant</p>
                <p className="text-4xl text-lightgreen mt-5">“</p>
                <p className="text-xs text-gray-700 leading-snug">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque eaque earum voluptates deserunt blanditiis doloribus.
                </p>
            </div>
        </div>
    );
};

export default PolygonComponent;
