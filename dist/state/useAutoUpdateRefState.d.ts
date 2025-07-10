import { RefObject, SetStateAction } from 'react';
export declare function useAutoUpdateRefState<T>(state: Exclude<T, (...args: any[]) => any>): [RefObject<T>, T, (value: SetStateAction<T>) => T];
export declare function useAutoUpdateRefState<T>(state: Exclude<T, (...args: any[]) => any>, callback: (state: T) => T): [RefObject<T>, T, (value: SetStateAction<T>, skipCallback?: boolean) => T];
export declare function useAutoUpdateRefState<T = never, StateT = never>(state: Exclude<StateT, (...args: any[]) => any>, callback: (state: T | StateT) => T extends never ? StateT : T): [
    RefObject<T extends never ? StateT : T>,
    T extends never ? StateT : T,
    (value: SetStateAction<T | StateT>, skipCallback?: boolean) => T extends never ? StateT : T
];
