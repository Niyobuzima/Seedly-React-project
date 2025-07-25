export default function Banner() {
    return (
        <> 
        <div className="flex flex-col items-center justify-center text-center px-5 py-12">
            <h1 className="font-black text-5xl md:text-6xl mb-6">Smart Money Moves</h1>
            <p className="max-w-2xl text-gray-700 text-sm md:text-base leading-relaxed">Invest in projects that truly make difference -- support environmentally responsible initiatives that drive innovation, protect natural resources, and create a more sustainable future for generations to come </p>
            <button className="mt-6 px-6 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
                Explore Projects
            </button>
        </div>
        </>
    )
}