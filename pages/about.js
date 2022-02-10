import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout title='About DevNotes'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>
      <div className='rounded-lg py-6 mt-6'>
        <h3 className='text-2xl mb-5'> DevNotes Notes</h3>
        <p className='mb-3'> This is a personal blog build with NextJS and Markdown</p>
        <h5> Version 1.0.0 </h5>
      </div>
    </Layout>
  );
}
