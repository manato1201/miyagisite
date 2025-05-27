// app/layout.tsx
import '../styles/globals.css';
import type { ReactNode } from 'react';
import { Layout } from '../components/Layout';
import { TransitionCanvas } from '../components/TransitionCanvas';

export const metadata = {
  title: '宮城の美味',
  description: 'はらこ飯・せり・ずんだ餅を海外へ',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body
   className="
     theme-harutori 
     relative 
    bg-gradient-to-br 
     from-[var(--c3)]   /* はるとり3 = #a2cde2 */ 
     via-[var(--c3)]
     to-[var(--c1)]     /* はるとり1 = #f4b3c5 */
   "
 >

        <div className="animate-slide-in">
          {children}
        </div>
        <TransitionCanvas />
      </body>
    </html>
  );
}