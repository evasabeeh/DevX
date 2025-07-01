const PolygonComponent = () => {
    return (
        <div className="relative w-100 h-100 mx-auto flex items-center justify-center">
            <svg
                viewBox="-20 -40 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-100 h-100 z-0"
            >
                    <path
                    d="M -8.41 -9.533 C -8.24 -17.864 -8.24 -26.195 -7.475 -34.441 C -6.455 -38.946 -4.755 -40.391 -0.164 -39.626 C 9.102 -36.481 17.943 -32.826 24.914 -30.36 C 28.229 -28.915 30.015 -27.215 28.994 -20.499 C 27.634 -13.868 26.104 -6.812 23.979 -0.522 C 23.129 1.859 22.024 5.004 17.433 4.494 L -4.16 -3.072 C -7.05 -4.177 -8.58 -6.302 -8.41 -9.618"
                        fill="darkgreen"
                        transform="rotate(10) translate(-5, 1)"
                    />

                    <path
                    d="M -8.41 -9.533 C -8.24 -17.864 -8.24 -26.195 -7.475 -34.441 C -6.455 -38.946 -4.755 -40.391 -0.164 -39.626 C 9.102 -36.481 17.943 -32.826 24.914 -30.36 C 28.229 -28.915 30.015 -27.215 28.994 -20.499 C 27.634 -13.868 26.104 -6.812 23.979 -0.522 C 23.129 1.859 22.024 5.004 17.433 4.494 L -4.16 -3.072 C -7.05 -4.177 -8.58 -6.302 -8.41 -9.618"
                        className="fill-white stroke-black stroke-[0.1]"
                    />
            </svg>

            <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="Avatar"
                className="w-20 h-20 rounded-full absolute -top-2 left-65 transform -translate-x-1/2"
            />

            <div className="relative z-10 text-center ml-20 -mt-5">
                <h3 className="text-lg font-semibold text-gray-700">Hannah Smmith</h3>
                <p className="text-sm text-gray-600 mb-1">JEE Aspirant</p>
                <p className="text-6xl text-lightgreen mt-5">“</p>
                <p className="text-xs text-gray-600 -mt-7 leading-snug px-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                    itaque eaque earum voluptates deserunt blanditiis doloribus.
                </p>
            </div>
        </div>
    );
};

export default PolygonComponent;

  