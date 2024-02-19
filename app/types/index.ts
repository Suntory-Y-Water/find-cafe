/**
 *
 * @example
 *  storeName = "スターバックスコーヒー 東京ミッドタウン日比谷店"
 *  storeId = "store00000" // Google Place APIのplace_id
 *  businessHours = "月曜日 9:00 ~ 17:00"
 *  distance = 1200
 *  isCompany = true // true: チェーン店, false: 個人店
 *  companyName = "スターバックス・コーヒー"
 * @interface ShopCardProps
 * @description 店舗情報を表示するカードのProps
 */
export interface ShopCardProps {
  storeName: string;
  storeId: string;
  businessHours: string;
  distance: number;
  isCompany: boolean;
  companyName?:
    | 'スターバックス・コーヒー'
    | 'ドトール・コーヒー'
    | 'コメダ珈琲店'
    | 'タリーズ・コーヒー'
    | 'サンマルクカフェ'
    | '星乃珈琲店'
    | 'プロント・コーヒー'
    | '珈琲館'
    | 'カフェ・ド・クリエ'
    | 'ベローチェ'
    | 'エクセルシオール'
    | 'ホリーズカフェ'
    | '上島珈琲店'
    | 'ルノアール'
    | 'ベックス'
    | 'むさしの森珈琲'
    | 'シアトルズベストコーヒー'
    | '倉式珈琲店'
    | 'コナズ珈琲'
    | 'コロラド'
    | 'さかい珈琲'
    | '丸福珈琲店'
    | '元町珈琲'
    | 'ブルーボトルコーヒー'
    | 'セガフレード・ザネッティ・エスプレッソ'
    | '猿田彦珈琲'
    | '宮越屋珈琲'
    | 'サザコーヒー'
    | 'モリバコーヒー'
    | 'CAFEDIESPRESSO'
    | 'ナガハマコーヒー'
    | 'UCCカフェプラザ'
    | 'イノダコーヒ'
    | '小川珈琲'
    | 'エスプレッソ・アメリカーノ'
    | '進々堂'
    | 'カフェミヤマ'
    | 'グリーンベリーズコーヒー'
    | 'ニューヨーカーズカフェ';
}
