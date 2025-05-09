const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10">
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">COMPANY</h3>
            <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#about" className="hover:text-red-600 transition-colors">About</a></li>
              <li><a href="#about" className="hover:text-red-600 transition-colors">History</a></li>
              <li><a href="https://careers.fromsoftware.jp/jp/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Careers</a></li>
              <li><a href="https://www.fromsoftware.jp/ww/pressrelease.html" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">PRODUCTS</h3>
            <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#games" className="hover:text-red-600 transition-colors">Elden Ring</a></li>
              <li><a href="#games" className="hover:text-red-600 transition-colors">Armored Core VI</a></li>
              <li><a href="#games" className="hover:text-red-600 transition-colors">Sekiro</a></li>
              <li><a href="#games" className="hover:text-red-600 transition-colors">Dark Souls Series</a></li>
              <li><a href="#games" className="hover:text-red-600 transition-colors">Bloodborne</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 mt-6 sm:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">SUPPORT</h3>
            <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="https://www.fromsoftware.jp/ww/faq.html" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Contact Us</a></li>
              <li><a href="https://www.fromsoftware.jp/ww/faq.html" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Customer Service</a></li>
              <li><a href="https://www.fromsoftware.jp/ww/faq.html" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Technical Support</a></li>
              <li><a href="https://www.fromsoftware.jp/ww/faq.html" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-1 mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center sm:text-left">CONNECT</h3>
            <div className="flex justify-center sm:justify-start space-x-3 mb-4 md:mb-6">
              <a href="https://x.com/fromsoftware_pr?lang=en" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-800 transition-colors p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/fromsoftware_jp/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-800 transition-colors p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/fromsoftware.jp/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-800 transition-colors p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/user/FromSoftwareInc" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-800 transition-colors p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
            <h4 className="text-xs md:text-sm font-semibold mb-2 uppercase text-center sm:text-left">Subscribe to our newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-0 py-1.5 md:py-2 px-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-800 rounded-l-md"
              />
              <button className="bg-red-800 hover:bg-red-700 px-3 md:px-4 rounded-r-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-3 md:mb-0">
            <a href="https://www.fromsoftware.jp/ww/faq.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="https://www.fromsoftware.jp/ww/faq.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="https://www.fromsoftware.jp/ww/faq.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Cookie Policy</a>
            <a href="https://www.fromsoftware.jp/ww/faq.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Legal</a>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-right">© 1994-{new Date().getFullYear()} FromSoftware, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 