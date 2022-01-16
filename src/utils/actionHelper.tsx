export interface Action<T> {
  type: T;
}

export interface IActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(
  type: T,
  payload?: undefined
): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): IActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload: P) {
  return payload === undefined ? { type } : { type, payload };
}

type FunctionType = (...args: any[]) => any;

interface ActionCreatorsMapObject {
  [actionCreator: string]: FunctionType;
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
