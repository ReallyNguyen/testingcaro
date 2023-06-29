import styles from "@/styles/About.module.css";
import Head from "next/head";
import Image from "next/image";
import leftarrow from "@/public/icons/leftArrow.png";
import rightarrow from "@/public/icons/rightArrow.png";
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import jsonData from "@/data/data.json";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [info, updateInfo] = useState([]);
  const carousel = require(`@/public/carousel-images/${currentSlide}.jpg`);

  useEffect(() => {
    updateInfo(jsonData);
  }, []);

  const clickArrow = (direction) => {
    if (direction === "left") {
      if (currentSlide === 0) {
        setCurrentSlide(info.length - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    } else {
      if (currentSlide === info.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const router = useRouter()

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.carousel}>
          <Image className={styles.carousel_image} src={carousel} />
          <div id="carouselImage">
            <div className={styles.carousel_contents}>
              <Image src={leftarrow} className={styles.left_arrow} onClick={() => clickArrow("left")} />
              {info.map((caption, index) => {
                if (index === currentSlide) {
                  return (
                    <>
                      <div key={index} id="testOnImageHere">
                        <div>
                          {index === currentSlide && caption.value}
                        </div>

                      </div>
                    </>
                  );
                }
              })}
              <Image src={rightarrow} className={styles.right_arrow} onClick={() => clickArrow("right")} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
