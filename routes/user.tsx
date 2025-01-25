import CalorieChart from "../islands/Calorie.tsx";

export default function User() {
  return (
    <div class="pt-8">
      <div class="flex justify-between">
        <div>
          <h2 class="text-2xl font-bold">お気に入りのグミ</h2>
          <p class="mt-2 text-xl">フィットチーネグミ</p>
        </div>
        <div class="bg-grape-sub text-white py-4 px-7 rounded-xl text-center mr-4">
          <p class="text-4xl font-bold mb-4">
            3<span class="text-xl">袋</span>
          </p>
          <p class="text-xl font-bold">食べた数</p>
        </div>
      </div>
      <h2 class="text-2xl font-bold font-sans my-6">統計</h2>
      <CalorieChart />
    </div>
  );
}
