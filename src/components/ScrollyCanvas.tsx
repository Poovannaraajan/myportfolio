import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 148;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Using Apple AirPods Pro sequence as a premium placeholder
      img.src = `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${i.toString().padStart(4, '0')}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          renderFrame(1);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;

    const context = canvasRef.current.getContext('2d');
    if (!context) return;

    const img = images[Math.max(1, Math.min(FRAME_COUNT, Math.round(index))) - 1];
    if (!img || !img.complete) return;

    const canvas = canvasRef.current;

    // object-fit: cover implementation for canvas
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let drawX = 0;
    let drawY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvas.height * imgRatio;
      drawX = (canvas.width - drawWidth) / 2;
    } else {
      drawHeight = canvas.width / imgRatio;
      drawY = (canvas.height - drawHeight) / 2;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0) {
      renderFrame(latest);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(frameIndex.get());
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

