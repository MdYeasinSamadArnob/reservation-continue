import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { DatePicker } from 'antd';
import Sidebar from '../components/share/SideBar';

export default function Home() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world! <DatePicker />
    // </h1>
    <Sidebar />
  );
}
