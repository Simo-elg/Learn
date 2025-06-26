interface HeaderProps {
    title: string;
    color?: string;
}

export default function Header ({ title, color = 'blue'}: HeaderProps) {
    return (
        <header className="text-3xl font-bold text-center my-6" style={{color: color}}>
            {title}
        </header>
    )
}