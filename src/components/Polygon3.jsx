const PolygonComponent = () => {
    return (
        <div className="relative w-100 h-100 mx-auto flex items-center justify-center mr-10">

            <svg
                viewBox="-20 -50 60 65"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-90 h-90 z-0"
            >

                <path
                    d="M -12.724 0.135 C -14.064 -10.31 -14.465 -20.354 -14.733 -30.532 C -15.269 -35.621 -14.733 -38.299 -10.716 -39.505 L 23.969 -49.147 C 28.79 -50.218 35.352 -47.54 35.62 -36.826 C 35.084 -31.202 34.281 -20.22 32.138 -8.168 C 30.799 -4.15 30.799 -0.535 25.844 1.742 L -0.672 7.634 C -9.109 8.304 -11.519 4.42 -12.724 0.135"
                    fill="darkgreen"
                    transform="rotate(-10) translate(5, 6)" 
                />

                <path
                    d="M -12.724 0.135 C -14.064 -10.31 -14.465 -20.354 -14.733 -30.532 C -15.269 -35.621 -14.733 -38.299 -10.716 -39.505 L 23.969 -49.147 C 28.79 -50.218 35.352 -47.54 35.62 -36.826 C 35.084 -31.202 34.281 -20.22 32.138 -8.168 C 30.799 -4.15 30.799 -0.535 25.844 1.742 L -0.672 7.634 C -9.109 8.304 -11.519 4.42 -12.724 0.135"
                    className="fill-white stroke-black stroke-[0.1]"
                />
            </svg>

            <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Avatar"
                className="w-20 h-20 rounded-full absolute -top-5 left-45 transform -translate-x-1/2 z-10"
            />

            <div className="relative z-10 text-center mr-5 -mt-20">
                <h3 className="text-lg font-semibold text-gray-700">Hannah Smmith</h3>
                <p className="text-sm text-gray-600 mb-1">UPSC Aspirant</p>
                <p className="text-6xl text-lightgreen mt-5">“</p>
                <p className="text-xs -mt-7 text-gray-600 leading-snug px-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque eaque earum voluptates deserunt blanditiis doloribus.
                </p>
            </div>
        </div>
    );
};

export default PolygonComponent;
