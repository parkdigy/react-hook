import { SetStateAction } from 'react';
import { Func } from '@pdg/types';
export declare function useAutoUpdateState<T extends Func, Result = never>(state: T): Result;
export declare function useAutoUpdateState<T, Result = [T, (value: SetStateAction<T>) => T]>(state: T): Result;
export declare function useAutoUpdateState<T extends Func, Callback extends (state: never) => never, Result = never>(state: T, callback: Callback): Result;
export declare function useAutoUpdateState<T, TState, Callback extends (state: T) => TState, Result = [TState, (value: SetStateAction<TState>, skipCallback?: boolean) => TState]>(state: T, callback: Callback): Result;
