import Link from 'next/link';
const menu = [
  { label: 'Home',       href: '/' },
  { label: '何が使われているか', href: '/ingredients' },  // ←追加
  { label: 'どれくらい違う？', href: '/comparison' },
  { label: 'どこで食える？', href: '/map' },
  { label: '花見メニュー',    href: '/menu' },
  { label: '日本酒セレクション', href: '/sake' },
];
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <header className="bg-[var(--c1)] text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">宮城の美味</h1>
        <ul className="flex space-x-4">
          {['Home','何が使われているか','どれくらい違う？','どこで食える？','花見メニュー','日本酒セレクション'].map((label, i) => (
            <li key={i}>
              <Link href={i===0?"/":`/#${label}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <main className="container mx-auto py-8">{children}</main>
    <footer className="bg-gray-100 text-center py-4">
      <p>© 2025 宮城の美味</p>
    </footer>
  </>
);