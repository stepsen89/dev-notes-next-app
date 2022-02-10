import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-900 text-gray-100">
      <div className='container mx-auto flex flex-wrap p-7 pt-9 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 text-2xl font-medium items-center md:justify-start mb-4 md:mb-0 tracking-wider'>
            DEV NOTES
          </a>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/notes'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300 tracking-wider'>
              {" "}
              Notes{" "}
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300 tracking-wider'>
              {" "}
              About{" "}
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
