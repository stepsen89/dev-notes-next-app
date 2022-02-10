import Link from 'next/link';

export default function Note({ note }) {
  return (
    <div className='w-full px-10 py-4 bg-red-200 rounded-lg shadow-2xl mt-6   text-gray-600 flex flex-col h-80' >
      <div className='flex justify-between items-center relative h-1/4' >
        <span className='font-light'>{note.frontmatter.date}</span>
      </div>

      <div className='mt-2 h-2/4'>
        <Link href={`/notes/${note.slug}`}>
          <a className='text-2xl font-bold hover:underline'>
            {note.frontmatter.title}
          </a>
        </Link>
        <p className='mt-2'>{note.frontmatter.excerpt}</p>
      </div>

      <div className='flex justify-end items-center h-1/4'>
        <Link href={`/notes/${note.slug}`}>
          <a className='text-gray-900 hover:text-blue-600'>Read More</a>
        </Link>
      </div>
    </div>
  );
}
