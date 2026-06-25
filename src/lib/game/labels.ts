const knownLabels: Record<string, string> = {
  AlertPrompt: 'アラート',
  AttachEnergyPrompt: 'エネルギーをつける',
  ChooseAttackPrompt: 'ワザを選ぶ',
  ChooseCardsPrompt: 'カードを選ぶ',
  ChooseEnergyPrompt: 'エネルギーを選ぶ',
  ChoosePokemonPrompt: 'ポケモンを選ぶ',
  ChoosePrizePrompt: 'サイドを選ぶ',
  CoinFlipPrompt: 'コインを投げる',
  ConfirmCardsPrompt: 'カードを確認',
  ConfirmPrompt: '確認',
  DiscardEnergyPrompt: 'エネルギーをトラッシュ',
  MoveDamagePrompt: 'ダメカンを移動',
  MoveEnergyPrompt: 'エネルギーを移動',
  OrderCardsPrompt: 'カードを並べる',
  PutDamagePrompt: 'ダメカンをのせる',
  RemoveDamagePrompt: 'ダメカンを取り除く',
  SelectOptionPrompt: '選択',
  SelectPrompt: '選ぶ',
  ShowCardsPrompt: 'カードを見せる',
  ShowMulliganPrompt: 'マリガン',
  ShuffleDeckPrompt: 'デッキをシャッフル',
  WaitPrompt: '相手のターン',
  CANNOT_ATTACK_ON_FIRST_TURN: '最初のターンはワザを使えない',
  CANNOT_RETREAT: 'にげることができない',
  CHOOSE_ATTACK_TO_DISABLE: '封じるワザを選ぶ',
  CHOOSE_CARD_TO_DISCARD: 'トラッシュするカードを選ぶ',
  CHOOSE_CARD_TO_HAND: '手札に加えるカードを選ぶ',
  CHOOSE_CARD_TO_PUT_ONTO_BENCH: 'ベンチに出すポケモンを選ぶ',
  CHOOSE_ENERGIES_TO_DISCARD: 'トラッシュするエネルギーを選ぶ',
  CHOOSE_ENERGIES_TO_HAND: '手札に加えるエネルギーを選ぶ',
  CHOOSE_ENERGY_FROM_DECK: 'デッキからエネルギーを選ぶ',
  CHOOSE_ENERGY_FROM_DISCARD: 'トラッシュからエネルギーを選ぶ',
  CHOOSE_ENERGY_TO_DISCARD: 'トラッシュするエネルギーを選ぶ',
  CHOOSE_ENERGY_TO_PAY_RETREAT_COST: 'にげるためのエネルギーを選ぶ',
  CHOOSE_ENERGY_TYPE: 'エネルギーの種類を選ぶ',
  CHOOSE_STARTING_POKEMONS: 'バトル場に出すポケモンを選ぶ',
  GO_FIRST: '先攻になりますか？',
  LOG_PLAYER_ATTACHES_CARD: 'カードをつけた',
  LOG_PLAYER_DEALS_DAMAGE: 'ダメージを与えた',
  LOG_PLAYER_DISABLES_ATTACK: 'ワザを封じた',
  LOG_PLAYER_DRAWS_CARD: 'カードをドローした',
  LOG_PLAYER_ENDS_TURN: 'ターン終了',
  LOG_PLAYER_CONCEDED: '投了した',
  LOG_GAME_FINISHED: 'ゲーム終了',
  LOG_GAME_FINISHED_DRAW: 'ゲーム終了（引き分け）',
  LOG_GAME_FINISHED_WINNER: 'ゲーム終了',
  LOG_PLAYER_PLAYS_BASIC_POKEMON: 'たねポケモンを出した',
  LOG_PLAYER_RETREATS: 'にげた',
  LOG_PLAYER_USES_ATTACK: 'ワザを使った',
  LOG_PLAYER_USES_ABILITY: 'とくせいを使った',
  LOG_TURN: '新しいターン',
  RETREAT_ALREADY_USED: 'このターンはもうにげている',
  SETUP_WHO_BEGINS_FLIP: '先攻・後攻をコインで決める',
  WANT_TO_DISCARD_ENERGY: 'エネルギーをトラッシュしますか？',
};

export function labelFor(value: unknown): string {
  if (typeof value !== 'string') {
    return '';
  }
  if (knownLabels[value]) {
    return knownLabels[value];
  }
  if (/^[A-Z0-9_]+$/.test(value)) {
    return value
      .replace(/^LOG_/, '')
      .split('_')
      .filter(Boolean)
      .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
      .join(' ');
  }
  return value;
}
