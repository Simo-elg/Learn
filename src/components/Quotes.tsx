import {useState } from "react";

interface QuoteData {
    content: string;
    author: string;
}

const quotes: QuoteData[] = [
        {
            content: "La vision est le pouvoir de voir au-delà des apparences, n'est-ce pas ?",
            author: "Gratter le Mur",
        },
        {
            content: "La vie est un défi, relève-le !",
            author: "Mère Teresa",
        },
    ]

export default function Quotes() {
    const [index, setIndex] = useState<number>(0);

    const quote = quotes[index]

    const nextQuote = () => {
        setIndex(prev => (prev === 0 ? 1:0));
    }

    if (!quote) {
        return <div className="text-align">Loading...</div>
    }

    return (
        <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow-xl rounded-2xl">
            <p className="text-xl italic">{quote.content}</p>
            <p className="text-sm font-bold">{quote.author}</p>

            <button
                onClick={nextQuote}
                className=" rounded-full m-10 border-2 px-6 py-4 bg-blue-500 transition delay-75 duration-300 ease-in-out hover:translate-y-2 hover:scale-110 hover:bg-indigo-500 ">
                New Quote
                </button> 
        </div>
    );
}