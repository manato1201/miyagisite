'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Application, Sprite, Container } from 'pixi.js';
import { Loader } from '@pixi/loaders';

export function TransitionCanvas() {
  // ① ref に初期値を必ず渡す
  const canvasRef   = useRef<HTMLDivElement | null>(null);
  const appRef      = useRef<Application | null>(null);
  const prevPathRef = useRef<string>('');
  const pathname    = usePathname();

  // ② Pixi アプリケーション初期化（1回だけ）
  useEffect(() => {
    const app = new Application({
      backgroundAlpha: 0,  // ← transparent の代わり
      resizeTo: window,    // ウィンドウに合わせる
    });
    canvasRef.current?.appendChild(app.view);
    appRef.current = app;

    // Loader を @pixi/loaders から使う
    Loader.shared
      .add('petal', '/sprites/petal.png')
      .add('uguisu', '/sprites/uguisu.png')
      .load();

    return () => {
      app.destroy(true, {
        children: true,
        texture: true
        
      });
    };
  }, []);

  // ③ パスが変わるたびに花びら／鶯アニメーション
  useEffect(() => {
    const app = appRef.current;
    if (!app) return;

    // 初回ロード時はスキップ
    if (prevPathRef.current && prevPathRef.current !== pathname) {
      const container = new Container();
      app.stage.addChild(container);

      for (let i = 0; i < 30; i++) {
        const tex = Math.random() < 0.5
          ? Loader.shared.resources.petal.texture!
          : Loader.shared.resources.uguisu.texture!;

        const sprite = new Sprite(tex);
        sprite.anchor.set(0.5);
        sprite.x = Math.random() * app.screen.width;
        sprite.y = -50;
        sprite.scale.set(0.3 + Math.random() * 0.3);
        container.addChild(sprite);

        app.ticker.add(() => {
          sprite.y += 2 + Math.random() * 3;
          sprite.rotation += 0.01;
          if (sprite.y > app.screen.height + 50) {
            container.removeChild(sprite);
          }
        });
      }

      setTimeout(() => app.stage.removeChild(container), 1500);
    }

    prevPathRef.current = pathname;
  }, [pathname]);

  return (
    <div
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}