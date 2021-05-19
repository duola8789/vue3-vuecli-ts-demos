export interface ExampleStates {
  count: number;
}

export interface ExampleActions {
  changeCountAct(payload: {newVal: number}): Promise<void>;
}
