enum Type {
  GROUP_STAGE,
  ROUND_OF_EIGHT,
  QUARTER_FINAL,
  SEMI_FINAL,
  FINAL,
}

export class Match {
  id: number;
  type: Type;
  name: string;
  teams: Array<string>;
  matches: Array<Match>;
}
