// app/layout.tsx
import '../styles/globals.css';
import type { ReactNode } from 'react';
import { Layout } from '../components/Layout';
import { TransitionCanvas } from '../components/TransitionCanvas';

export const metadata = {
  title: '宮城の美味',
  description: 'はらこ飯・せり・ずんだ餅を海外へ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="theme-harutori">
        <Layout>
          {children}
        </Layout>
        
      </body>
    </html>
  );
}