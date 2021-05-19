export interface RootStates {
  count: number;
}

export interface RootActions {
  changeCountAct(payload: {newVal: number}): Promise<void>;
}
