import { List } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
    onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
    return (
        <header className="w-full p-5 flex items-center lg:justify-center justify-between bg-gray-700 border-b border-gray-600">
            <Logo />

            <nav className="lg:hidden">
                <a href="#" className="flex items-center gap-2" onClick={onToggleSidebar}>
                    Aulas
                    <List className="flex lg:hidden" size={24} />
                </a>

            </nav>


        </header>

    )
}