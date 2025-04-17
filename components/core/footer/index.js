import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">HEART & SQUARE</h3>
              <p>
                HEART & SQUARE is a leading provider of innovative ideas
                solutions, offering a wide range of products and services to
                help businesses and organizations achieve their goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} HEART & SQUARE. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
