export function NavBar() {
    return (
        <>
        <div className="flex items-center lg:justify-around sm:justify-between p-8">
            <div className="flex items-center gap-8 ">
                 <a href="#" className="text-lg font-semibold">Seedly</a>
                 <a href="#" className="text-sm text-gray-700 hover:text-black">Invest</a>
                 <a href="#" className="text-sm text-gray-700 hover:text-black">Why Invest</a>
                 <a href="#" className="text-sm text-gray-700 hover:text-black">How it works</a>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex border rounded-full overflow-hidden">
                <button className="px-3 py-1 text-white bg-black text-sm">En</button>
                <button className="px-3 py-1 text-sm">Es</button>
                </div>
                <button className="px-4 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-100">
                    Register
                </button>
            </div>
        </div>
        </>
    )
}