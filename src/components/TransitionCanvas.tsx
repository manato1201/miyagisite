'use client';
import { useEffect, useRef } from 'react';
import { Application, Sprite, Container, Text, TextStyle } from 'pixi.js';
import { Loader } from '@pixi/loaders';

let animateTransition: () => Promise<void>;

export function TransitionCanvas() {
  const mountRef    = useRef<HTMLDivElement | null>(null);
  const appRef      = useRef<Application | null>(null);
  const resourcesRef= useRef<Record<string, any> | null>(null);

  useEffect(() => {
    const app = new Application({
      width:  window.innerWidth,
      height: window.innerHeight,
      backgroundAlpha: 0,
    });
    mountRef.current?.appendChild(app.view);
    appRef.current = app;

    // ローディング用スプライトをプリロード
    new Loader()
      .add('loading', '/sprites/loading.png') // ローディング用画像
      .load((_, res) => (resourcesRef.current = res));

    return () => app.destroy(true, { children: true, texture: true });
  }, []);

  // アニメーション関数を外部公開
  animateTransition = () => {
    return new Promise<void>((resolve) => {
      const app = appRef.current!;
      const res = resourcesRef.current!;
      const container = new Container();
      app.stage.addChild(container);

      // スプライトとテキストを作る
      const sprite = new Sprite(res.loading.texture);
      sprite.anchor.set(0.5);
      sprite.x = -sprite.width;
      sprite.y = app.screen.height / 2;
      container.addChild(sprite);

      const style = new TextStyle({ fill: '#ffffff', fontSize: 24 });
      const counter = new Text('0', style);
      counter.anchor.set(0.5);
      counter.x = sprite.x;
      counter.y = sprite.y - sprite.height/2 - 20;
      container.addChild(counter);

      const totalFrames = 14;
      const duration = 2000; // ms
      const start = performance.now();

      const ticker = (delta: number) => {
        const t = Math.min((performance.now() - start) / duration, 1);
        // スプライトを左→右へ
        sprite.x = -sprite.width + (app.screen.width + sprite.width) * t;
        // 数字を進行度で表示
        counter.x = sprite.x;
        counter.text = String(Math.floor(t * totalFrames));

        if (t >= 1) {
          app.ticker.remove(ticker);
          app.stage.removeChild(container);
          resolve();
        }
      };

      app.ticker.add(ticker);
    });
  };

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-50" />;
}

export { animateTransition };