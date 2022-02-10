import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

export default function Note({ note, compact }) {
  console.log(note);
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-2xl mt-6   ">
      <Image
        src={note.frontmatter.cover_image}
        alt={note.frontmatter.title}
        height={420}
        width={600}
        className="mb-4 rounded"
      />
      <div className="flex justify-between items-center">
        <span className="font-light">{note.frontmatter.date}</span>
        <div>
          {/* {note.frontmatter.categories.map((cat) => {
            return <span key={cat}> {cat} </span>;
          })} */}
          <CategoryLabel>{note.frontmatter.category}</CategoryLabel>
        </div>
      </div>

      <div className="mt-2">
        <Link href={`/notes/${note.slug}`}>
          <a className="text-2xl font-bold hover:underline">
            {note.frontmatter.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-400">{note.frontmatter.excerpt}</p>
      </div>
      {!!compact && (
        <div className="flex justify-between items-center mt-6">
          <Link href={`/notes/${note.slug}`}>
            <a className="text-gray-900 hover:text-blue-600">Read More</a>
          </Link>
          <div className="flex items-center">
            {/* <img
              src={note.frontmatter.author_image}
              alt="test"
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            /> */}
            {/* <h3 className="text-gray-700 font-bold">
              {post.frontmatter.author}
            </h3> */}
          </div>
        </div>
      )}

      {/* <div className="flex justify-end items-center h-1/4">
        <Link href={`/notes/${note.slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read More</a>
        </Link>
      </div> */}
    </div>
  );
}
