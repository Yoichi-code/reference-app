import dayjsTz from "./dayjsTz";

type DateAndString = {
  dateAfter: string;
  string: string;
}

export function switchStringByDate(
  dateAndStrings: DateAndString[],
  defaultString: string
) {
  // 現在日時を取得
  const now = dayjsTz();

  // 返答する文字列のデフォルト値を設定
  let result = defaultString;

  // 日付と文字の組を日付順にソート（過去のものから）
  const sortedDateAndStrings = dateAndStrings.sort((a, b) => {
    return dayjsTz(a.dateAfter).diff(dayjsTz(b.dateAfter));
  });

  // 日付順にソートした日付と文字の組をループ
  for (const dateAndString of sortedDateAndStrings) {
    // もし、現在時刻を過ぎていたら、結果を文字列に設定する
    if (now.isAfter(dayjsTz(dateAndString.dateAfter))) {
      result = dateAndString.string;
    }
  }

  // 結果として：
  //  現在時刻を過ぎていない場合は、デフォルト値を返す
  //  現在時刻を過ぎている場合は、最後に設定した文字列を返す
  return result;
}