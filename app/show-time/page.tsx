import dayjsTz, { dateFormat } from "@/lib/dayjsTz";
import Link from 'next/link';

export default function ShowTimePage() {
  // const tokyoTime = dayjsTz('2024-11-13T12:00:00');
  // console.log(tokyoTime.format(dateFormat["2024/11/13 14:00:00"]));
  // "2024/11/13 12:00:00" と出力

  const formattedDate = dayjsTz("2024-12-29T15:30:00Z", "Asia/Tokyo").format(dateFormat.japaneseYearMonth);

  return (
    <>
      <div className="louwe_wrapper">
        <h1>時間のフォーマット表示</h1>
        <dl>
          <dt>元データ「2024-12-29T15:30:00Z（UTC または ISO 8601 の形式）」を日本語フォーマットで表示</dt>
          <dd><b>{formattedDate}</b></dd>
        </dl>

        <p className="back"><Link href="/">≪ 戻る</Link></p>
      </div>
    </>
  );
}