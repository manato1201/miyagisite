// components/TransitionCanvas.tsx
'use client';
import { useEffect, useRef } from 'react';
import { Application, Sprite, Container, Text, TextStyle } from 'pixi.js';
import { Loader, type LoaderResource } from '@pixi/loaders';

let animateTransition: () => Promise<void>;

export function TransitionCanvas() {
  const mountRef     = useRef<HTMLDivElement|null>(null);
  const appRef       = useRef<Application|null>(null);
 const resourcesRef = useRef<Record<string, LoaderResource> | null>(null);

  useEffect(() => {
    // Pixi アプリ初期化
    const app = new Application({
      width:  window.innerWidth,
      height: window.innerHeight,
      backgroundAlpha: 0,
    });
    mountRef.current?.appendChild(app.view);
    appRef.current = app;

    // スプライトをプリロード（loading.png を用意）
    new Loader()
      .add('loading', '/sprites/loading.png')
      .load((_, res) => {
        resourcesRef.current = res;
      });

    // リサイズ対応
    const onResize = () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      app.destroy(true, { children:true, texture:true });
    };
  }, []);

  // 外部から呼び出すアニメーション関数
  animateTransition = () => {
    return new Promise<void>((resolve) => {
      const app = appRef.current!;
      const res = resourcesRef.current!;
      const container = new Container();
      app.stage.addChild(container);

      // ローディングスプライト
      const sprite = new Sprite(res.loading.texture!);
      sprite.anchor.set(0.5);
      sprite.x = app.screen.width  / 2;
      sprite.y = app.screen.height / 2 - 30;
      container.addChild(sprite);

      // 進捗テキスト
      const style = new TextStyle({
        fill: '#ffffff',
        fontSize: 100,
        fontWeight: 'bold',
      });
      const percent = new Text('0%', style);
      percent.anchor.set(0.5);
      percent.x = app.screen.width  / 2;
      percent.y = app.screen.height / 2 - 30;
      container.addChild(percent);

      // カウントアップ（2秒で 0→100）
      const duration = 2000;
      const start    = performance.now();

      const ticker = () => {
        const elapsed = performance.now() - start;
        const t = Math.min(elapsed / duration, 1);
        const value = Math.floor(t * 100);
        percent.text = `${value}%`;

        if (t >= 1) {
          app.ticker.remove(ticker);
          app.stage.removeChild(container);
          resolve();
        }
      };

      app.ticker.add(ticker);
    });
  };

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}

export { animateTransition };