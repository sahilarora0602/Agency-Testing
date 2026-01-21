export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">SayHi</div>
        <div className="flex gap-8 items-center">
          <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</a>
          <a href="#faq" className="text-gray-700 hover:text-gray-900">FAQ</a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Contact</button>
        </div>
      </div>
    </nav>
  );
}
