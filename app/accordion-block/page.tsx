"use client";

import { useState } from "react";
import Link from 'next/link';
import styles from "./accordion-block.module.css";

export default function AccordionPage() {
  return (
    <>
      <div className="louwe_wrapper">
        <h1>アコーディオン（単体ブロック）</h1>
        <p>アコーディオンを実装してみました。</p>
        <Accordion />
      </div>
    </>
  );
}

// Add this function
function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <p className="">
        <button
          className="accordion_button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "閉じる" : "開く"}
        </button>
      </p>
      <div className={`${styles.accordion_content} ${isOpen ? styles.is_open : ""}`}>
        <p>単発アコーディオンの内容</p>
      </div>

      <p className="back"><Link href="/">≪ 戻る</Link></p>
    </div>
  );
}