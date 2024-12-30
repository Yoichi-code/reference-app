import dayjs, {type Dayjs} from 'dayjs';
import timezone from 'dayjs/plugin/timezone';   // タイムゾーンを考慮した日付操作を可能にするプラグイン。
import utc from 'dayjs/plugin/utc';             // UTC（協定世界時）を基準とした日時計算を可能にするプラグイン。

//プラグインをdayjsに登録
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

// タイムゾーン付きのdayjs関数を型付きで定義
/**
 * "Dayjs" 型を拡張して、タイムゾーンを設定できる "tz" メソッドを持つカスタム型 "DayjsTz" を定義しています。
 * これにより、タイムゾーンを指定した日時操作と型を安全に実現。
 */
type DayjsTz = Dayjs & {
  tz: (tz: string) => DayjsTz;
};

// カスタム dayjs 関数の定義
/**
 * 通常の dayjs() 関数にタイムゾーン指定の引数 "tz" を追加したカスタム関数
 * タイムゾーンを考慮した日付操作を可能にする "dayjs" 関数を返します。
 * タイムゾーンが指定されていない場合は、デフォルトのタイムゾーン "Asia/Tokyo" が適用されます。
 */
type DayjsTzFunction = (date?: dayjs.ConfigType, tz?: string) => DayjsTz;
const dayjsTz: DayjsTzFunction = (date, tz) => {
  if (tz) {
    return dayjs(date).tz(tz);
  }
  return dayjs(date);
}
export default dayjsTz;


// 日付フォーマットの管理
/**
 * プロジェクト内で利用する日付フォーマットの定義を一元化
 * フォーマット名がサンプル日付としてキーに設定されており、統一性を保ちながら参照
 */
// export const dateFormat = {
//   "2024-11-13": "YYYY-MM-DD",
//   "2024-11-13 14:00:00": "YYYY-MM-DD HH:mm:ss",
//   "2024/11/13": "YYYY/MM/DD",
//   "2024/11/13 14:00:00": "YYYY/MM/DD HH:mm:ss",
//   "2024年11月": "YYYY年MM月",
//   "2024.11.13": "YYYY.MM.DD",
// } as const;
export const dateFormat = {
  simpleDate: "YYYY-MM-DD",
  detailedDateTime: "YYYY-MM-DD HH:mm:ss",
  slashDate: "YYYY/MM/DD",
  detailedSlashDateTime: "YYYY/MM/DD HH:mm:ss",
  japaneseYearMonth: "YYYY年MM月",
  dotDate: "YYYY.MM.DD",
} as const;