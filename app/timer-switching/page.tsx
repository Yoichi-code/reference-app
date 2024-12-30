import { switchStringByDate } from "@/lib/switchStringByDate"; // Add this line
import Link from 'next/link';

export default function TimerSwitchingPage() {

  const defaultString = "デフォルトの表示";

  const changeText = switchStringByDate (
    [
      {
        dateAfter: "2025-01-01",
        string: "2025年1月1日以降の表示"
      },
      {
        dateAfter: "2024-12-29",
        string: "2024年12月29日以降の表示"
      },
      {
        dateAfter: "2024-12-30",
        string: "2024年12月30日以降の表示"
      },
    ],
    defaultString
  );

  return (
    <>
      <div className="louwe_wrapper">
        <h1>時間によって表示を切り替える</h1>
        <p>{changeText}</p>

      <p className="back"><Link href="/">≪ 戻る</Link></p>
    </div>
    </>
  );
}