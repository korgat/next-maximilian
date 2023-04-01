import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Button from '@/components/common/Button/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="text-red-300 font-bold">
        <Button text="My button" />
      </div>
    </>
  );
}
