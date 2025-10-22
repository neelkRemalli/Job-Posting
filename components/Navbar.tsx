'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { logout } from '@/lib/auth';

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex '>
            <Link href={'/'} className='flex items-center'>
              <Image
                src='/logo.png'
                alt='job board logo'
                width={40}
                height={40}
                className='h-8 w-auto'
              />
              <span className='ml-2 text-xl font-semibold text-gray-800'>
                Job board
              </span>
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            {session ? (
              <>
                <Link
                  href={'/jobs'}
                  className='text-gray-600 text-sm font-medium px-3 py-2 rounded-md hover:text-gray-900'
                >
                  Browse Job
                </Link>
                <Link
                  href={'/jobs/post'}
                  className='text-gray-600 text-sm font-medium px-3 py-2 rounded-md hover:text-gray-900'
                >
                  Post Job
                </Link>
                <Link
                  href={'dashboard'}
                  className='text-gray-600 text-sm font-medium px-3 py-2 rounded-md hover:text-gray-900'
                >
                  Dashboard
                </Link>
                <button
                  className='text-gray-600 text-sm font-medium px-3 py-2 rounded-md hover:text-gray-900'
                  onClick={logout}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href={'/auth/signin'}
                className='text-gray-600 text-sm font-medium px-3 py-2 rounded-md hover:text-gray-900'
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
