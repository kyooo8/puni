import { useEffect } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";

export default function calorieChart() {
  useEffect(() => {
    const ctx = document.getElementById("calorieChart").getContext("2d");

    const data = {
      labels: ["4/4", "4/5", "4/6", "4/7", "4/8", "4/9", "4/10"],
      datasets: [
        {
          label: "カロリー",
          data: [200, 300, 250, 400, 350, 300, 280], // サンプルデータ
          backgroundColor: "rgba(106, 27, 154, 0.2)",
          borderColor: "rgba(106, 27, 154, 1)",
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar", // 棒グラフ
      data: data,
      options: {
        indexAxis: "x", // 水平軸
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, // 凡例非表示
          },
        },
      },
    };

    new Chart(ctx, config);
  }, []);

  return (
    <div class="p-4 bg-white rounded-2xl shadow-md">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      <div class="flex justify-between items-center mb-2">
        <h2 class="font-bold text-lg">カロリー</h2>
        <button class="px-3 py-1 bg-gray-200 text-sm rounded-full">今週</button>
      </div>
      <div class="w-full h-48">
        <canvas id="calorieChart"></canvas>
      </div>
      <div class="flex justify-between text-sm mt-2">
        <span>4/4</span>
        <span>4/11</span>
      </div>
    </div>
  );
}
