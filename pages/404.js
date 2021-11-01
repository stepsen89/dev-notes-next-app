import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/images/undraw_page_not_found_su-7-k.svg'
          width={400}
          height={400}
          alt='Logo'
        />
        <h2 className='text-4xl text-gray-400 mb-5'>
          This page does not exist
        </h2>
      </div>
    </Layout>
  );
}
