import Link from "next/link";


function InstituteSidebar() {
  return (
    <>
      <div className="fixed inset-y-0 left-0 w-64 bg-cordes-dark shadow-xl z-50 bg-blue-800">
        <div className="flex items-center justify-center h-16 bg-cordes-blue bg-blue-900">
          <div className="flex items-center space-x-3">
            <span className="text-white text-xl font-bold">
              Institute Panel
            </span>
          </div>
        </div>
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            <Link
              href="/institute/dashboard"
              className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group font-bold "
            >
              <i className="fas fa-home mr-3 text-cordes-accent group-hover:text-white" />
              Dashboard
            </Link>
            <Link
              href="/institute/dashboard/category"
              className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group font-bold"
            >
              <i className="fas fa-users mr-3 text-gray-400 group-hover:text-white" />
              Category
            </Link>
            <Link
              href="/institute/dashboard/course"
              className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group font-bold"
            >
              <i className="fas fa-chart-bar mr-3 text-gray-400 group-hover:text-white" />
              Course
            </Link>
            <Link
              href="/institute/dashboard/teacher"
              className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group font-bold"
            >
              <i className="fas fa-shopping-cart mr-3 text-gray-400 group-hover:text-white" />
              Teacher
            </Link>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group font-bold"
            >
              <i className="fas fa-box mr-3 text-gray-400 group-hover:text-white" />
              Products
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group font-bold"
            >
              <i className="fas fa-cog mr-3 text-gray-400 group-hover:text-white" />
              Settings
            </a>
          </div>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png"
                alt="Admin"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white text-sm font-medium">John Admin</p>
                <p className="text-gray-400 text-xs">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstituteSidebar;
