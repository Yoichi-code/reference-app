"use client";

import { useState } from "react";
import Link from 'next/link';
import styles from "./accordion-list.module.css";

export default function AccordionPage() {
  return (
    <>
      <div className="louwe_wrapper">
        <h1>アコーディオン（リスト）</h1>
        <p>アコーディオンをリストで実装してみました。</p>
        <AccordionList
          items={[
            {
              title: "タイトル1",
              content: "内容1"
            },
            {
              title: "タイトル2",
              content: "内容2"
            },
            {
              title: "タイトル3",
              content: "内容3"
            }
          ]}
          />

        <p className="back"><Link href="/">≪ 戻る</Link></p>
      </div>
    </>
  );
}

function AccordionList({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className={styles.accordion_list}>
      {items.map((item, index) => (
        <li key={index} className={styles.accordion_item}>
          <button
            className={styles.accordion_button}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.title}
          </button>
          {/* <div>に"is_open"のclassをつけ外しする */}
          {/* {openIndex === index && (
            <div className={styles.accordion_content}>
              <p>{item.content}</p>
            </div>
          )} */}
          <div
            className={`${styles.accordion_content} ${
              openIndex === index ? styles.is_open : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
