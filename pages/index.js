import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function HomePage({ notes }) {
  return (
    <Layout>
      <div className='bg-blue-500'> hello from home </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('notes'));
  console.log(files);

  const notes = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('notes', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { notes },
  };
}
