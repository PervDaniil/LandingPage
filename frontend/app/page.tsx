import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="h-screen w-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="h-full w-full p-10 lg:p-30">
            <h1 className="pt-25 text-7xl lg:text-9xl">Landing page</h1>
            <p className="pt-20 lg:pt-15 text-gray-300 lg:max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore at illum eos illo doloribus nesciunt aliquid ipsa ullam, voluptas nisi labore vitae dolores deleniti dolore distinctio provident accusantium  Inventore at illum eos illo doloribus nesciunt aliquid ipsa ullam, voluptas nisi labore vitae dolores deleniti dolore distinctio provident accusantium officia totam.</p>
            <button className="mt-30 px-7 py-4 rounded-full cursor-pointer bg-white text-black hover:bg-black hover:text-white transition-all duration-200">Get started</button>
          </div>
        </section>
        <section className="min-h-screen w-full bg-black">
          <div className="p-5 lg:p-20 flex flex-wrap items-center justify-evenly">
            <div className="px-5 lg:px-7.5 h-[75vh] w-[400px] bg-cover bg-right bg-[url('https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
              <h1 className="p-10 text-9xl">1</h1>
              <p className="text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit provident iure sint nulla iusto. Illo explicabo reprehenderit nulla voluptates dignissimos laudantium sit reiciendis. Aliquid voluptates voluptas doloremque provident quisquam.</p>
              <button className="mt-40 px-12 py-3 rounded-full cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-200">More</button>
            </div>
            <div className="px-5 lg:px-7.5 h-[75vh] w-[400px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
              <h1 className="p-10 text-9xl">2</h1>
              <p className="text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit provident iure sint nulla iusto. Illo explicabo reprehenderit nulla voluptates dignissimos laudantium sit reiciendis. Aliquid voluptates voluptas doloremque provident quisquam.</p>
              <button className="mt-40 px-12 py-3 rounded-full cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-200">More</button>
            </div>
            <div className="px-5 lg:px-7.5 h-[75vh] w-[400px] bg-cover bg-left bg-[url('https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
              <h1 className="p-10 text-9xl">3</h1>
              <p className="text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit provident iure sint nulla iusto. Illo explicabo reprehenderit nulla voluptates dignissimos laudantium sit reiciendis. Aliquid voluptates voluptas doloremque provident quisquam.</p>
              <button className="mt-40 px-12 py-3 rounded-full cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-200">More</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
