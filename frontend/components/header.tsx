import '../app/animation.css';


export default function Header() {
    const sections = [
        "Home", "About", "Contacts", "Get started", "Info"
    ]

    return (
        <header className="absolute top-0 w-full py-5 lg:py-7.5 px-10 bg-transparent backdrop-blur-md shadow-xl overflow-auto">
            <div className="flex flex-row">
                <div>
                    <h2 className="hidden lg:block font-bold">Landing Kg</h2>
                </div>
                <nav className="text-xs lg:text-base flex-1 flex justify-center space-x-10 lg:space-x-30 font-[200]">
                    {sections.map((section, index) => (
                        <ol key={index}>
                            <li className="hover-underline-animation cursor-pointer">{section}</li>
                        </ol>
                    ))}
                </nav>
            </div>
        </header>
    )
}