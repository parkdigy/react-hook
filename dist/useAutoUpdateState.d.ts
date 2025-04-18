import { SetStateAction } from 'react';
export declare function useAutoUpdateState<T>(state: Exclude<T, (...args: any[]) => any>): [T, (value: SetStateAction<T>) => T];
export declare function useAutoUpdateState<T>(state: Exclude<T, (...args: any[]) => any>, callback: (state: T) => T): [T, (value: SetStateAction<T>, skipCallback?: boolean) => T];
export declare function useAutoUpdateState<T = never, StateT = never>(state: Exclude<StateT, (...args: any[]) => any>, callback: (state: T | StateT) => T extends never ? StateT : T): [
    T extends never ? StateT : T,
    (value: SetStateAction<T | StateT>, skipCallback?: boolean) => T extends never ? StateT : T
];
export default useAutoUpdateState;
