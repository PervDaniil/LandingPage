export default function Header() {
    return (
        <header className="absolute top-0 w-full py-5 lg:py-7.5 px-10 bg-transparent backdrop-blur-md shadow-xl overflow-auto">
            <div className="flex flex-row">
                <div>
                    <h2 className="hidden lg:block">Landing</h2>
                </div>
                <nav className="text-xs lg:text-base flex-1 flex justify-center space-x-10 lg:space-x-30 font-[200]">
                    <ol>
                        <li>Home</li>
                    </ol>
                    <ol>
                        <li>About</li>
                    </ol>
                    <ol>
                        <li>Contacts</li>
                    </ol>
                    <ol>
                        <li>Get started</li>
                    </ol>
                    <ol>
                        <li>Info</li>
                    </ol>
                </nav>
            </div>
        </header>
    )
}