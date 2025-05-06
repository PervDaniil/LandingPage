export default function Cards() {
    return (
        <section className="min-h-screen w-full bg-black">
            <div className="p-5 lg:p-20 flex flex-wrap items-center justify-evenly">
                <div className="px-5 lg:px-7.5 h-[55vh] lg:h-[75vh] w-[400px] bg-cover bg-right bg-[url('https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                    <h1 className="p-10 text-9xl">1</h1>
                    <p className="text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit provident iure sint nulla iusto. Illo explicabo reprehenderit nulla voluptates dignissimos laudantium sit reiciendis. Aliquid voluptates voluptas doloremque provident quisquam.</p>
                    <button className="mt-10 lg:mt-40 px-12 py-3 rounded-full cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-200">More</button>
                </div>
                <div className="px-5 lg:px-7.5 h-[55vh] lg:h-[75vh] w-[400px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                    <h1 className="p-10 text-9xl">2</h1>
                    <p className="text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit provident iure sint nulla iusto. Illo explicabo reprehenderit nulla voluptates dignissimos laudantium sit reiciendis. Aliquid voluptates voluptas doloremque provident quisquam.</p>
                    <button className="mt-10 lg:mt-40 px-12 py-3 rounded-full cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-200">More</button>
                </div>
                <div className="px-5 lg:px-7.5 h-[55vh] lg:h-[75vh] w-[400px] bg-cover bg-left bg-[url('https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                    <h1 className="p-10 text-9xl">3</h1>
                    <p className="text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit provident iure sint nulla iusto. Illo explicabo reprehenderit nulla voluptates dignissimos laudantium sit reiciendis. Aliquid voluptates voluptas doloremque provident quisquam.</p>
                    <button className="mt-10 lg:mt-40 px-12 py-3 rounded-full cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-200">More</button>
                </div>
            </div>
        </section>
    )
}