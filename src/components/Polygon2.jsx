const PolygonComponent = () => {
    return (
        <div className="relative w-100 h-100 mx-auto flex items-center justify-center">

            <svg
                viewBox="-22 -44 55 55"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-100 h-100 z-0 mt-10"
            >
                <path
                    d="M -18 -2 L -14.843 -27.987 C -12.534 -30.682 -12.534 -33.376 -7.299 -35.839 L 17 -44 C 23 -44 26 -44 28 -38 L 31 -8 C 31 -1 29 0 25 2 L -8 6 C -15 7 -18 4 -18 -2"
                    fill="darkgreen"
                    transform="rotate(-3) scale(-1, 1) translate(-16, -2)" 
                />

                <path
                    d="M -18 -2 L -14.312 -34.68 C -14.509 -38.828 -9.571 -42.976 -3.645 -42.976 L 16.107 -44.161 C 23.021 -45.149 27.366 -43.964 29.342 -37.248 L 31 -8 C 31 -1 29 0 25 2 L -8.583 6.998 C -15 7 -18 4 -18 -2"
                    className="fill-white stroke-black stroke-[0.1]"
                />
            </svg>

            <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Avatar"
                className="w-20 h-20 rounded-full absolute -top-0 left-55 transform -translate-x-1/2 z-10"
            />

            <div className="relative z-10 text-center ml-8 mt-2">
                <h3 className="text-lg font-semibold text-gray-700">Hannah Smmith</h3>
                <p className="text-sm text-gray-600 mb-5">NEET Aspirant</p>
                <p className="text-7xl text-lightgreen mt-10">“</p>
                <p className="text-xs -mt-7  text-gray-600 leading-snug px-18">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque eaque earum voluptates deserunt blanditiis doloribus.
                </p>
            </div>
        </div>
    );
};

export default PolygonComponent;

