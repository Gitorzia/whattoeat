import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-text-secondary">
          <p>© 2024 羽球论坛. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 