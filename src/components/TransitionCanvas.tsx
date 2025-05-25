// components/TransitionCanvas.tsx
'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Application, Sprite, Container } from 'pixi.js';
import { Loader } from '@pixi/loaders';

export function TransitionCanvas() {
  const canvasRef   = useRef<HTMLDivElement | null>(null);
  const appRef      = useRef<Application | null>(null);
  const prevPathRef = useRef<string>('');
  const pathname    = usePathname();
  // ロード済みテクスチャを保持
  const resourcesRef = useRef<Record<string, any> | null>(null);

  // ① Pixi アプリ＆ローダー初期化（マウント時１回だけ）
  useEffect(() => {
    const app = new Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundAlpha: 0,
    });
    canvasRef.current?.appendChild(app.view);
    appRef.current = app;

    // 自前の Loader インスタンスを生成
    const loader = new Loader();
    loader
      .add('petal', '/sprites/petal.png')
      .add('uguisu', '/sprites/uguisu.png')
      .load((_, resources) => {
        // 読み込み完了後に resources を保存
        resourcesRef.current = resources;
      });

    // ウィンドウリサイズ対応
    const onResize = () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      app.destroy(true, { children: true, texture: true });
    };
  }, []);

  // ② パス変更時にアニメーション発火
  useEffect(() => {
    const app = appRef.current;
    const resources = resourcesRef.current;
    if (!app || !resources) return;  // Loader 終了前にはスキップ

    if (prevPathRef.current && prevPathRef.current !== pathname) {
      const container = new Container();
      app.stage.addChild(container);

      for (let i = 0; i < 30; i++) {
        const tex =
          Math.random() < 0.5
            ? resources.petal.texture
            : resources.uguisu.texture;

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