import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="트리븐 서산-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (
        text === '홍보영상' ||
        text === '장기일반민간임대' ||
        text === '당첨자서류안내' ||
        text === '트리븐 서산'
    ) {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    서산 예천동 신흥주거벨트의 중심에서 시작되는 프리미엄 라이프
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    도심의 편리함과 자연의 여유를 모두 누리는 새로운 주거가치
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    중대형 프리미엄 단지, 트리븐 서산
                </div>
            </>
        );
    } else if (
        text === '사업개요' ||
        text === '세대안내' ||
        text === '인테리어' ||
        text === '청약안내' ||
        text === '모집공고안내' ||
        text === '인지세납부안내'||
        text === '프리미엄'
    ) {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    서산의 새로운 중심, 예천동에서 시작되는 프리미엄 라이프
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    차별화된 설계와 여유로운 공간이 만드는 새로운 주거기준
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    트리븐 서산
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    교통, 교육, 생활 인프라를 모두 갖춘 예천동 중심 입지
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    도시의 편리함과 자연의 여유를 동시에 누리는 프리미엄 라이프
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    남향 위주의 배치와 판상형 중심 설계로 완성한 쾌적한 단지
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    수납과 공간 활용을 강화한 중대형 프리미엄 평면
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    서산 예천동의 새로운 랜드마크, 트리븐 서산
                </div>
            </>
        );
    }
};
