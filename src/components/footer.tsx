import { Target } from "lucide-react";

export default function Footer() {
    return (
        <div className="flex items-end justify-center gap-6 px-6 py-6">
           <div className="flex -space-x-4">
             <div className="w-10 h-10 rounded-full border flex items-center justify-center  bg-white">
                <Target className="w-6 h-6"/>
             </div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center  bg-white">
                <Target className="w-6 h-6"/>
            </div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center bg-white">
                <Target className="w-6 h-6"/>
            </div>
           </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg">100+</span>
                <span className="text-sm text-gray-600">Strategic Investor</span>
            </div>

            <div className="w-px h-10 bg-gray-300"/>

            <div className="flex flex-col">
                <span className="font-bold text-lg">4.8/5</span>
                <span className="text-sm text-gray-600">App Rating</span>
            </div>

           </div>
    )
}