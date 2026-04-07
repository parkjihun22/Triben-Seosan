import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/FloorPlan/FloorPlan1/unit01.jpg"



const FloorPlan1 = () => {
  const menuContents = [
		{ title: "84A", url: "/FloorPlan/59A" },
		{ title: "84B", url: "/FloorPlan/59B" },
		{ title: "98", url: "/FloorPlan/84A" },
		{ title: "110", url: "/FloorPlan/84B" },
		{ title: "128", url: "/FloorPlan/114A" },
    { title: "84C", url: "/FloorPlan/114B" },
		// { title: "세대안내영상", url: "/FloorPlan/videos" }, // 세대안내영상 링크
		{ title: "E-모델하우스", url: "/FloorPlan/Emodel" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
    <Helmet>
    {/* 기본 문자셋 및 모바일 최적화 */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="robots" content="index, follow" />
    <html lang="ko" />

    {/* SEO 최적화 */}
    <title>트리븐 서산 | 84A 평면안내</title>
    <meta
      name="description"
      content="트리븐 서산 84A 평면안내입니다. 세대 구조와 공간 활용, 수납 및 동선 구성을 확인하고 라이프스타일에 맞는 타입을 확인하세요."
    />
    <meta
      name="keywords"
      content="트리븐 서산, 트리븐서산, 84A 평면도, 서산 아파트 평면도, 예천동 아파트, 예천동 분양, 세대구조, 평면안내"
    />
    <link rel="canonical" href="https://www.ifors2020.kr/FloorPlan/84A" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ko_KR" />
    <meta property="og:site_name" content="트리븐 서산" />
    <meta property="og:title" content="트리븐 서산 | 84A 평면안내" />
    <meta
      property="og:description"
      content="트리븐 서산 84A 평면안내 – 세대 구조와 공간 활용 포인트를 확인하세요."
    />
    <meta property="og:image" content="https://www.ifors2020.kr/Main1.png" />
    <meta property="og:image:alt" content="트리븐 서산 84A 평면도" />
    <meta property="og:url" content="https://www.ifors2020.kr/FloorPlan/84A" />

    {/* Twitter 카드 */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="트리븐 서산 | 84A 평면안내" />
    <meta
      name="twitter:description"
      content="트리븐 서산 84A 평면안내 – 구조, 동선, 수납 포인트를 확인하세요."
    />
    <meta name="twitter:image" content="https://www.ifors2020.kr/Main1.png" />
    <meta name="twitter:url" content="https://www.ifors2020.kr/FloorPlan/84A" />

    {/* 구조화된 데이터 (JSON-LD) */}
    <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "트리븐 서산 | 84A 평면안내",
      "description": "트리븐 서산 84A 평면안내 페이지입니다. 세대 구조와 공간 활용, 동선 구성을 확인할 수 있습니다.",
      "url": "https://www.ifors2020.kr/FloorPlan/84A",
      "inLanguage": "ko-KR"
    }`}
    </script>
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="세대안내" />
    <MenuBar contents={menuContents} />

    <h1 className={styles.screenReaderOnly}>
    트리븐 서산 84A 평면안내
    </h1>
    <p className={styles.screenReaderOnly}>
    트리븐 서산 평면안내 페이지입니다.
    세대 구조와 공간 활용 포인트를 확인하고 84A, 84B, 98, 110, 128 타입 중
    라이프스타일에 맞는 구성을 확인할 수 있습니다.
    </p>

    <div className={styles.textBox}>
    <div>타입별 공간 구성 포인트</div>
    <div>트리븐 서산 84A</div>
    </div>

      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="트리븐 서산84A 타입 평면안내 이미지"
        onLoad={handleImageLoad}
      />

   

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 전시품목과 유상옵션이 포함된 견본주택을 촬영한 것으로
          타입별 유상옵션 적용학몽, 특화범위 및 위치는 상이하며 실제 시공시
          차이가 있을 수 있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlan1;
