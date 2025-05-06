import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="h-screen w-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="h-full w-full p-10 lg:p-30">
            <h1 className="pt-30 text-7xl lg:text-9xl">Landing page</h1>
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
      <section className="grid lg:grid-cols-2 min-h-screen w-full bg-black">
        <div className="pt-10 p-5 lg:p-20 w-full h-full">
          <form className="max-w-3xl mx-auto bg-white bg-cover bg-[url('https://images.unsplash.com/photo-1710438399422-2fca27686bcd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGFic3RyYWN0fGVufDB8fDB8fHww')] p-10 rounded-lg shadow-xl space-y-6">
            <h2 className="text-4xl font-bold text-white">Leave a reply</h2>
            <div className="flex flex-col space-y-5.5 p-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full px-4 py-3 border backdrop-brightness-50 border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full px-4 py-3 border backdrop-brightness-50 border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full px-4 py-3 border backdrop-brightness-50 border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                  placeholder="Tell us more..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-15 w-full bg-white text-black py-3 rounded-md cursor-pointer transition-colors duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="pt-10 p-20 w-full h-full hidden lg:block">
          <div className="flex flex-row flex-wrap lg:flex-nowrap">
            <span style={{ writingMode: 'vertical-rl' }} className="text-8xl ">Landing Kg</span>
            <div className="mt-15 space-y-12">
              <p className="ml-10 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis maxime consectetur necessitatibus aperiam non molestiae iusto labore beatae, earum dolores eaque nisi, voluptate quia pariatur possimus cupiditate perspiciatis natus?</p>
              <p className="ml-10 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis maxime consectetur necessitatibus aperiam non molestiae iusto labore beatae, earum dolores eaque nisi, voluptate quia pariatur possimus cupiditate perspiciatis natus?</p>
              <p className="ml-10 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis maxime consectetur necessitatibus aperiam non molestiae iusto labore beatae, earum dolores eaque nisi, voluptate quia pariatur possimus cupiditate perspiciatis natus?</p>
              <p className="ml-10 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis maxime consectetur necessitatibus aperiam non molestiae iusto labore beatae, earum dolores eaque nisi, voluptate quia pariatur possimus cupiditate perspiciatis natus?</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
