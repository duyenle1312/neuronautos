import Link from "next/link";

function MainNavigation() {
  return (
    <nav className="bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto">
      {/* Logo */}
      <div>
        <h2 className="text-2xl font-bold lg:pl-12 cursor-pointer">
          <Link href="/">
            <span className="text-blue-600">Neuron Autos</span>
          </Link>
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <ul className="flex flex-col md:flex-row md:space-x-5 w-full items-center">
          <li className="pointer-cursor ">
            <Link href="/">
              <span className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                All Orders
              </span>
            </Link>
          </li>
          <li>
            <Link href="/new">
              <span className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                Place an order
              </span>
            </Link>
          </li>
          <li>
            <a href="https://twitter.com/NeuronAutos" target="_blank" className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
