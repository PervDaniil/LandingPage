export default function Footer() {
    return (
        <footer>
        <div className="py-30 px-10 bg-white w-full h-auto">
          <h4 className="pb-5 text-center text-black text-xl">Landing Kg &copy;</h4>
          <div className="pt-10 w-full flex items-center justify-evenly flex-wrap">
            <div>
              <h5 className="text-xl text-center text-black">Contacts</h5>
              <p className="text-xs text-black">Email: info@example.com</p>
              <p className="text-xs text-black">Phone number: +996 999 999 999</p>
              <p className="text-xs text-black">Address: 123 Main St, Bishkek, Kyrgyzstan</p>
            </div>

            <div>
              <h5 className="text-xl text-black">Terms</h5>
              <p className="text-xs text-black">By using this service, you agree to our Terms and Conditions.</p>
              <p className="text-sm text-black">All rights reserved © 2025</p>
            </div>

            <div>
              <h5 className="text-xl text-black">About</h5>
              <p className="text-xs text-black">We are a digital solutions company providing tech services since 2025</p>
              <p className="text-xs text-black">Our mission is to simplify digital transformation for businesses</p>
            </div>

            <div>
              <h5 className="text-xl text-center text-black">Primary links</h5>
              <p className="text-sm text-black"><a href="/home">Home</a></p>
              <p className="text-sm text-black"><a href="/services">Services</a></p>
              <p className="text-sm text-black"><a href="/contact">Contacts</a></p>
            </div>
          </div>
        </div>
      </footer>
    )
}