export default function ReplyForm() {
    return (
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
    )
}