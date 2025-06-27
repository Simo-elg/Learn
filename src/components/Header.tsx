import type { ReactNode } from "react";

interface HeaderProps {
    title: string;
    color?: string;
    children?: ReactNode;
}

export default function Header ({ title, color = 'blue', children}: HeaderProps) {
    return (
        <>
        <header className="text-3xl font-bold text-center my-6" style={{color: color}}>
            {title}
        </header>

        {children && (
            <p className="text-xl text-center mb-5">
            {children}
            </p>
        )}
        </>
    );
}