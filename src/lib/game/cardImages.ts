export type CardImageSource = 'scrydex' | 'scrydex-jp' | 'pkmncards' | 'pokemontcg';

export type SetImageInfo = {
  id: string;
  source?: CardImageSource;
};

export type CardImageInput = {
  imageUrl?: string;
  set?: string;
  setNumber?: string;
  name?: string;
  fullName?: string;
};

// setImageMap: CABT set code -> pokemontcg.io set id (英語版デフォルト) or SetImageInfo
// 日本語版がある場合は source: 'scrydex-jp' で日本語版を優先使用
export const setImageMap: Record<string, string | SetImageInfo> = {
  // レガシーセット（英語版のみ）
  BASE: 'base1',
  JUNGLE: 'base2',
  FOSSIL: 'base3',
  SIT: 'swsh12',
  ASR: 'swsh10',
  LOR: 'swsh11',
  OBF: 'sv3',
  MEW: 'sv3pt5',
  PAR: 'sv4',
  PAF: 'sv4pt5',

  // SVシリーズ → scrydex 日本語版
  SVI: { id: 'jp-sv1s', source: 'scrydex-jp' },   // スカーレットex
  SVE: { id: 'jp-sve', source: 'scrydex-jp' },     // 基本エネルギー
  PAL: { id: 'jp-sv2a', source: 'scrydex-jp' },    // ポケモンカード151
  TEF: { id: 'jp-sv5K', source: 'scrydex-jp' },    // ワイルドフォース
  TWM: { id: 'jp-sv6', source: 'scrydex-jp' },     // 変幻の仮面
  SFA: { id: 'jp-sv6pt5', source: 'scrydex-jp' },  // 夜のワンダリング
  SCR: { id: 'jp-sv7', source: 'scrydex-jp' },     // 超電ブレイカー
  SSP: { id: 'jp-sv8', source: 'scrydex-jp' },     // 熱風のアリーナ
  PRE: { id: 'jp-sv8pt5', source: 'scrydex-jp' },
  JTG: { id: 'jp-sv9', source: 'scrydex-jp' },
  DRI: { id: 'jp-sv10', source: 'scrydex-jp' },
  BLK: { id: 'jp-zsv10pt5', source: 'scrydex-jp' },
  WHT: { id: 'jp-rsv10pt5', source: 'scrydex-jp' },

  // MEシリーズ（ポケカABC独自 / scrydex経由）
  MEP: { id: 'mep', source: 'scrydex' },
  MEE: { id: 'mee', source: 'pkmncards' },
  MEG: { id: 'me1', source: 'scrydex' },
  M1L: { id: 'me1', source: 'scrydex' },
  M1S: { id: 'me1', source: 'scrydex' },
  PFL: { id: 'me2', source: 'scrydex' },
  ASC: { id: 'me2pt5', source: 'scrydex' },
  POR: { id: 'me3', source: 'scrydex' },
  CRI: { id: 'me4', source: 'scrydex' },
};

export function resolveCardImageUrl(card: CardImageInput): string | undefined {
  if (card.imageUrl) {
    return card.imageUrl;
  }
  if (card.name === 'Unknown' || card.fullName === 'Unknown') {
    return undefined;
  }
  const setInfo = getSetImageInfo(card.set);
  if (!setInfo || !card.setNumber) {
    return undefined;
  }
  const rawSetNumber = String(card.setNumber);

  if (setInfo.source === 'scrydex-jp') {
    // 日本語版scrydex: setNumberを3桁ゼロパディング
    const paddedSetNumber = encodeURIComponent(rawSetNumber.padStart(3, '0'));
    return `https://images.scrydex.com/pokemon/${setInfo.id}-${paddedSetNumber}/large`;
  }
  if (setInfo.source === 'scrydex') {
    const setNumber = encodeURIComponent(rawSetNumber);
    return `https://images.scrydex.com/pokemon/${setInfo.id}-${setNumber}/large`;
  }
  if (setInfo.source === 'pkmncards') {
    const paddedSetNumber = encodeURIComponent(rawSetNumber.padStart(3, '0'));
    return `https://pkmncards.com/wp-content/uploads/${setInfo.id}_en_${paddedSetNumber}_std.png`;
  }
  const setNumber = encodeURIComponent(rawSetNumber);
  return `https://images.pokemontcg.io/${setInfo.id}/${setNumber}.png`;
}

export function getSetImageInfo(setCode: string | undefined): SetImageInfo | undefined {
  const info = setCode ? setImageMap[setCode] : undefined;
  if (!info) {
    return undefined;
  }
  return typeof info === 'string' ? { id: info, source: 'pokemontcg' } : info;
}
