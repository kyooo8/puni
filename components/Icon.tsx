interface IconProps {
  name: string; // SVG ファイル名 (例: "gummy" -> "gummy.svg")
  size?: number; // アイコンサイズ（デフォルト: 24）
  color?: string; // 色 (SVG の currentColor に適用)
  className?: string; // カスタムクラス
}

export default function Icon(
  { name, size = 24, color = "currentColor", className }: IconProps,
) {
  return (
    <img
      src={`/${name}.svg`} // public ディレクトリの SVG ファイルを参照
      alt={`${name} icon`}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        color: color, // SVG 内で currentColor が有効なら色を反映
      }}
    />
  );
}
