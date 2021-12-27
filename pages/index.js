import Head from "next/head";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | kanglaeheon</title>
      </Head>
    </div>
  );
}

// axios
