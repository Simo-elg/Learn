import {useState, useEffect} from "react";

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
    const [clicks, setClicks] = useState(0);
    const [isAuto, setIsAuto] = useState<boolean>(true);


    const quote = quotes[index]

    const nextQuote = () => {
        setIndex(prev => (prev === 0 ? 1:0));
    }

    const nextQuoteWithClick = () => {
        nextQuote();
        setClicks(c => c + 1);
    }

    useEffect(() => {
        if (!isAuto){return;}

        const id = setInterval(nextQuote, 4000);
        return () => clearInterval(id);
    }, [isAuto])
 
    if (!quote) {
        return <div className="text-align">Loading...</div>
    }

    return (
        <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow-xl rounded-2xl">
            <p className="text-xl italic">{quote.content}</p>
            <p className="text-sm font-bold">{quote.author}</p>

            <button
                onClick={nextQuoteWithClick}
                className=" rounded-full m-10 border-2 px-6 py-4 bg-blue-500 transition delay-75 duration-300 ease-in-out hover:-translate-x-2 hover:scale-110 hover:bg-indigo-500 ">
                New Quote
                </button> 
            <button onClick={() => setIsAuto(a => !a) } className="rounded-full m-10 border-2 px-6 py-4 bg-blue-500 transition delay-75 duration-300 ease-in-out hover:translate-x-2 hover:scale-110 hover:bg-indigo-500 ">{isAuto ? 'Pause' : 'Auto'} </button>
            <p className="text-2xl ">Clicks : {clicks}</p>
        </div>
    );
}