import React, { useState, useEffect } from "react";
import Layout from "../Organisms/Layout/Layout";
import ListContainer from "../Molecules/ListContainer/ListContainer";
import Section from "../Organisms/Section/Section";
import Gallery from "../Molecules/Gallery/Gallery";
import Polygon from "../Polygon/Polygon";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// import "firebase/compat/storage"; // 주의: compat 레이어를 사용합니다.

const firebaseConfig = {
  apiKey: "AIzaSyBZWRZbF9qikx-pmZpBboEqb8l9pMfwOO0",
  authDomain: "portfolio-3e970.firebaseapp.com",
  projectId: "portfolio-3e970",
  storageBucket: "portfolio-3e970.appspot.com",
  messagingSenderId: "1081830641845",
  appId: "1:1081830641845:web:1417efc9d314fbdc9faefc",
  measurementId: "G-ZZEJKE3SQ9",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// function ImageComponent() {
//   const imageUrl =
//     "https://firebasestorage.googleapis.com/v0/b/portfolio-3e970.appspot.com/o/icon%2Ficon_brick.svg?alt=media&token=964b9740-de5e-4043-8232-4f862d020214";

//   return <img src={imageUrl} alt="Icon from Firebase" />;
// }

function ImageComponent({ src, alt }) {
  return <img src={src} alt={alt} />;
}

const PageMain = () => {
  const iconBrick =
    "https://firebasestorage.googleapis.com/v0/b/portfolio-3e970.appspot.com/o/icon%2Ficon_brick.svg?alt=media&token=964b9740-de5e-4043-8232-4f862d020214";
  const iconPyramid =
    "https://firebasestorage.googleapis.com/v0/b/portfolio-3e970.appspot.com/o/icon%2Ficon_pyramid.svg?alt=media&token=86d9862c-4809-4be7-b864-e28522164e24";

  /* data 예시 */
  const dataSkill = {
    skill: {
      icon: iconBrick,
      title: "Development SKill",
      skills: [
        "HTML/CSS",
        "Javascript/React",
        "Version Management",
        "Developement Optimized / QA",
      ],
    },
    communication: {
      icon: iconPyramid,
      title: "Communication Design",
      skills: [
        "Commnuication",
        "Project Experience",
        "Collaborate Tools",
        "Creative Front-end",
      ],
    },
  };
  const dataExperience = {
    subtitle:
      "개발팀에서 프론트 개발 담당 팀원으로 근무하며 개발한 서비스 목록입니다.",
    gallery: [
      {
        id: 1,
        albumId: 1,
        title: "aaaaaa",
        url: "https://via.placeholder.com/600/f66b97",
      },
      {
        id: 2,
        albumId: 2,
        title: "bbbbbb",
        url: "https://via.placeholder.com/600/56a8c2",
      },
      {
        id: 3,
        albumId: 3,
        title: "bbbbbb",
        url: "https://via.placeholder.com/600/24f355",
      },
    ],
  };

  return (
    <div className="page-main">
      <ImageComponent />
      <Section title="hero">
        <Polygon backgroundColor={0xffffff} lineColor={0x79809e} />
      </Section>
      <Section title="About" innerWrapper={true}>
        <Layout split="horizontal">
          <ListContainer data={dataSkill.skill} />
          <ListContainer data={dataSkill.communication} />
        </Layout>
      </Section>
      <Section
        title="Work Experience"
        data={dataExperience.subtitle}
        innerWrapper={true}
      >
        <Layout>
          <Gallery data={dataExperience.gallery} />
        </Layout>
      </Section>
      {/* 아이콘 URL이 있을 때 아이콘을 표시합니다. */}
      {/* 이미지 URL이 있을 때 이미지를 표시합니다. */}
    </div>
  );
};

export default PageMain;
