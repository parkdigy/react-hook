import { RefObject, SetStateAction } from 'react';
import { Func } from '@pdg/types';
export declare function useAutoUpdateRefState<T extends Func, Result = never>(state: T): Result;
export declare function useAutoUpdateRefState<T, Result = [RefObject<T>, T, (value: SetStateAction<T>) => T]>(state: T): Result;
export declare function useAutoUpdateRefState<T extends Func, Callback extends (state: never) => never, Result = never>(state: T, callback: Callback): Result;
export declare function useAutoUpdateRefState<T, TCallbackValue, TCallbackResult, Result = [
    RefObject<TCallbackResult>,
    TCallbackResult,
    (value: SetStateAction<TCallbackValue>, skipCallback?: boolean) => TCallbackResult
]>(state: T, callback: (state: TCallbackValue) => TCallbackResult): Result;
