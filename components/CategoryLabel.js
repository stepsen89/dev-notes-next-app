import Link from "next/link";

function CategoryLabel({ children, color }) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
    AWS: "purple",
    React: "red",
  };

  let background = `bg-${colorKey[children]}-600`;
  return (
    <div
      className={`px-2 py-1 ${background} text-gray-200 text-sm font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}

export default CategoryLabel;
