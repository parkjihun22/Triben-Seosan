import React, { useState } from "react";
import styles from "./EmodelInline.module.scss";

// Emodel.jsx 에 정의된 탭과 URL을 그대로 복사합니다.
const menuContents = [
  // { title: "59A", key: "59A" },
  // { title: "59B", key: "59B" },
  { title: "84A", key: "84A" },
  { title: "128", key: "128" },
];

const vrUrls = {
  // "59A": "https://www.prugio.com/hb/2025/onecluster/vr/59a.html",
  // "59B": "https://www.prugio.com/hb/2025/onecluster/vr/59b.html",
  "84A": "http://trivn-doosan-seosan.com/vr/84a.html?v=251022",
  "128": "http://trivn-doosan-seosan.com/vr/128.html?v=251022",
};

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState("84A");

  return (
    <div className={styles.inlineWrapper}>
      {/* ─── 타입 탭 메뉴 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 뷰어 ─── */}
      <div className={styles.vrSection}>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}
