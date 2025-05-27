import Link from 'next/link';
const menu = [
  { label: 'Home',       href: '/' },
  
];
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>…</header>
      <nav>
        {menu.map((item) => (
          <Link key={item.href} href={item.href} className="px-4">
            {item.label}
          </Link>
        ))}
      </nav>
      <main>{children}</main>
      <footer>…</footer>
    </>
  );
}