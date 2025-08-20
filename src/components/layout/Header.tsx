import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                羽球论坛
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
                }`}
              >
                首页
              </Link>
              <Link
                href="/tournaments"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/tournaments') ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
                }`}
              >
                赛事
              </Link>
              <Link
                href="/equipment"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/equipment') ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
                }`}
              >
                装备
              </Link>
              <Link
                href="/find-partner"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/find-partner') ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
                }`}
              >
                约球
              </Link>
              <Link
                href="/coach"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/coach') ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
                }`}
              >
                教练
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/profile"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/profile') ? 'bg-primary text-white' : 'text-text-secondary hover:bg-primary/10'
              }`}
            >
              个人中心
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 