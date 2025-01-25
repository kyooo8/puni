import Icon from "../components/Icon.tsx";

export default function Home() {
  const links = [
    { href: "/sns", name: "gummy", text: "SNS" },
    { href: "/gummy-list", name: "book", text: "Book" },
    { href: "/game", name: "game", text: "Game" },
    { href: "/user", name: "user", text: "User" },
  ];

  return (
    <div class="fixed bottom-0 w-screen bg-grape h-20 pt-3 rounded-t-xl">
      <footer class="flex justify-around">
        {links.map((link) => (
          <a href={link.href} class="flex flex-col items-center space-y-2">
            <Icon
              name={link.name}
              size={32}
            />
            <span class="text-sm text-white">{link.text}</span>
          </a>
        ))}
      </footer>
    </div>
  );
}
