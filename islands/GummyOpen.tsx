import { useEffect, useRef, useState } from "preact/hooks";

export default function Indexisland() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDragging = useRef(false);
  const lastPosition = useRef<number | null>(null); // 最後のマウス位置
  const [progress, setProgress] = useState(0); // スライド進行度

  // マウスの動きを追跡
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const ctx = canvasRef.current.getContext("2d");

      if (ctx) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#FFA500";
        ctx.lineCap = "round";

        const currentX = e.clientX - rect.left;
        const centerY = rect.height / 2;

        if (lastPosition.current !== null) {
          ctx.beginPath();
          ctx.moveTo(lastPosition.current, centerY);
          ctx.lineTo(currentX, centerY);
          ctx.stroke();
        }

        lastPosition.current = currentX;

        // 進行度を計算
        const newProgress = Math.min(100, (currentX / rect.width) * 100);
        setProgress(newProgress);

        // スライドが完了したらリダイレクト
        if (newProgress === 100) {
          isDragging.current = false;
          window.location.href = "/sns"; // ページ遷移
        }
      }
    }
  };

  // スライド開始
  const handleMouseDown = () => {
    isDragging.current = true;
    lastPosition.current = null;

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // キャンバスをクリア
      }
    }
  };

  // スライド終了
  const handleMouseUp = () => {
    isDragging.current = false;
    lastPosition.current = null; // 位置をリセット
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div class="flex justify-center items-center bg-grape-light">
      {/* グミ袋のベース */}
      <div class="relative bg-white w-[300px] h-[400px] rounded-lg shadow-lg">
        {/* スライド部分 */}
        <div
          class="absolute top-0 left-0 w-full h-16 bg-orange-400 cursor-pointer rounded-t-lg z-10"
          onMouseDown={handleMouseDown}
        >
          <p class="text-center pt-4 font-bold text-white">
            スライドして開ける
          </p>
        </div>
        {/* 筆跡用のキャンバス */}
        <canvas
          ref={canvasRef}
          width="300"
          height="400"
          class="absolute top-0 left-0 pointer-events-none z-0"
        >
        </canvas>
        {/* グミ袋のコンテンツ */}
        <div class="absolute inset-0 flex justify-center items-center text-center p-4">
          <p class="text-gray-700 font-bold text-lg">グミ袋</p>
        </div>
      </div>
    </div>
  );
}
