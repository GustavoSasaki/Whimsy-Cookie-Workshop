export function ReadMoreButton() {
    return (
        <div className="flex justify-center items-center relative">
            <div className="relative group  w-full max-w-[400px] ">
                <button className="relative w-full rounded-xl bg-gradient-to-br from-introduction to-introduction-lighter text-white py-2 z-20"
                    aria-label="read more about Whimsy Cookie Workshop"
                >
                    <p>Read More</p>
                </button>

                <div className="absolute inset-0 bg-gradient-to-br from-introduction to-introduction-lighter blur-md group-hover:blur-sm transition-all z-10 rounded-xl animate-tilt"></div>
            </div>
        </div>
    )
}