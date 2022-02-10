import fs from "fs";

import Layout from "../components/Layout";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Note from "../components/Note";

import { sortByDate } from "../utils";

export default function HomePage({ notes }) {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold "> Latest Posts </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {notes.map((note, index) => (
          // eslint-disable-next-line react/jsx-key
          <Note note={note} key={index} compact={false} />
        ))}
      </div>
      <Link href="/notes">
        <a className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-1/2">
          All Posts
        </a>
      </Link>
    </Layout>
  );
}

// this is backend
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("notes"));

  const notes = files.map((filename) => {
    const slug = filename.replace(".md", "");

    // to read the md files and get the meta information
    const markdownWithMeta = fs.readFileSync(
      path.join("notes", filename),
      "utf-8"
    );

    // this { data: formatter } can rename it when destructuring
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { notes: notes.sort(sortByDate).slice(0, 8) },
  };
}
