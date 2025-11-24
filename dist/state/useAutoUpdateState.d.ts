import { SetStateAction } from 'react';
import { Func } from '@pdg/types';
export declare function useAutoUpdateState<T, V extends T extends Func ? never : T, Result = T extends Func ? never : [V, (value: SetStateAction<V>) => V]>(state: T): Result;
export declare function useAutoUpdateState<T, V extends T extends Func ? never : T, Callback extends (state: V) => V, Result = T extends Func ? never : [V, (value: SetStateAction<V>, skipCallback?: boolean) => V]>(state: T, callback: Callback): Result;
