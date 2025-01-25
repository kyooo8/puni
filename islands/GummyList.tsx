import { useEffect, useState } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";
import data from "../data.json" with { type: "json" };

export default function GummyListIsland() {
  const [gummys] = useState(data.gummys);
  const [flavors] = useState(data.flavors);

  useEffect(() => {
    // グラフの初期化を各グミに対して行う
    gummys.forEach((gummy) => {
      const ctx = document
        .getElementById(`gummyChart-${gummy.id}`)
        ?.getContext("2d");
      if (ctx) {
        const chartData = {
          labels: ["硬さ", "甘さ", "酸っぱさ", "大きさ", "カロリー"],
          datasets: [
            {
              label: "ステータス",
              data: [3, 5, 2, 4, 3], // グミごとにカスタマイズ可能
              backgroundColor: "rgba(106, 27, 154, 0.2)",
              borderColor: "rgba(106, 27, 154, 1)",
              borderWidth: 2,
            },
          ],
        };

        const config = {
          type: "radar",
          data: chartData,
          options: {
            plugins: {
              legend: {
                display: false, // 凡例を非表示
              },
            },
            scales: {
              r: {
                beginAtZero: true,
                max: 5,
                pointLabels: {
                  display: false, // ラベルを非表示
                },
              },
            },
          },
        };

        new Chart(ctx, config);
      }
    });
  }, [gummys]);

  // フレーバーIDリストからTailwindのクラス名を取得
  const getFlavorClasses = (flavorsIdList: number[]) => {
    return flavorsIdList
      .map((id) => flavors.find((flavor) => flavor.id === id)) // 対応するフレーバーを取得
      .filter(Boolean) // `undefined` を除去
      .map((flavor) => `bg-${flavor?.en || "gray"}`); // クラス名に変換
  };

  return (
    <div class="pt-8 grid grid-cols-2 gap-4">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      {gummys.map((gummy) => (
        <div key={gummy.id} class="bg-white rounded-xl p-4 shadow-md">
          <div class="flex mb-2">
            <div class="h-40 w-24 bg-gray-400"></div>
            <div style="width: 80px; margin: auto;">
              <canvas id={`gummyChart-${gummy.id}`}></canvas>
            </div>
          </div>

          <p class="text-base font-bold">{gummy.name}</p>
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm font-bold text-red-800">{gummy.company}</p>
              <p class="text-sm font-bold text-gray-500">
                {gummy.selled_at}
              </p>
            </div>
            <div class="flex mt-2">
              {getFlavorClasses(gummy.flavors_id).map((flavorClass, index) => (
                <div
                  key={index}
                  class={`w-3 h-6 ${flavorClass}`}
                  title={flavorClass.replace("bg-", "")}
                >
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
