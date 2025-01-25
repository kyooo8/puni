import { useState } from "preact/hooks";
import data from "../data.json" with { type: "json" };

const getTimeDifference = (timestamp: number) => {
  const now = Date.now();

  const diffInMs = now - timestamp;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

  if (diffInMinutes < 1) return "たった今";
  if (diffInMinutes < 60) return `${diffInMinutes}分前`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}時間前`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}日前`;
};

export function PostList() {
  const [users, setUsers] = useState(data.users);
  const [gummys, setGummys] = useState(data.gummys);
  const [posts, setPosts] = useState(data.posts);
  const [flavors, setFlavors] = useState(data.flavors);

  return (
    <div class="pt-8 grid grid-cols-1">
      {posts.map((post) => {
        const gummy = gummys.find((gummy) => gummy.id === post.gummy_id);
        const user = users.find((user) => user.id === post.user_id);
        const flavor = flavors.find((flavor) => flavor.id === post.id);

        return (
          <div
            key={post.id}
            class="bg-white rounded-xl mx-auto w-full flex justify-between p-4"
          >
            <div>
              <h2 class="font-sans font-black text-lg mb-2">
                {user?.name || "不明"}が{gummy?.name ||
                  "Unknown Gummy"}を食べたよ
              </h2>
              <p class="text-grape mb-2 font-sans font-bold text-sm">
                {flavor.ja}
              </p>
              <p class="text-gray-500 font-sans font-bold text-sm">
                {post.why}
              </p>
            </div>
            <div class="">
              <p class="text-gray-500 font-sans text-sm mb-4 text-right">
                30分前
              </p>
              <div class="flex">
                <div class="ml-1 text-center">
                  <p>👌</p>
                  <span class="text-[10px]">ナイグミ</span>
                </div>
                <div class="ml-1 text-center">
                  <p>😘</p>
                  <span class="text-[10px]">同じ！</span>
                </div>
                <div class="ml-1 text-center">
                  <p>🤤</p>
                  <span class="text-[10px]">うらやま</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
