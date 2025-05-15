// app/layout.tsx
import '../styles/globals.css';
import type { ReactNode } from 'react';
import { Layout } from '../components/Layout';

export const metadata = {
  title: '宮城の美味',
  description: 'はらこ飯・せり・ずんだ餅を海外へ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="theme-uraraka">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}