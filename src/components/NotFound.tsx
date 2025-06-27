interface NotFoundProps {
    message: string;
}

export default function NotFound({message}: NotFoundProps ) {
    return (
        <section>
            <h1 className="text-6xl font-bold text-center my-6">
                404 - Page not found
            </h1>
            <p className="text-xl text-center my-5">
                {message}
            </p>
        </section>
    );
}