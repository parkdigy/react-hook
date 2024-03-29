import { MutableRefObject, SetStateAction } from 'react';
export default function useAutoUpdateLayoutRefState<T>(state: Exclude<T, (...args: any[]) => any>): [MutableRefObject<T>, T, (value: SetStateAction<T>) => T];
export default function useAutoUpdateLayoutRefState<T>(state: Exclude<T, (...args: any[]) => any>, callback: (state: T) => T): [MutableRefObject<T>, T, (value: SetStateAction<T>) => T];
export default function useAutoUpdateLayoutRefState<T = never, StateT = never>(state: Exclude<StateT, (...args: any[]) => any>, callback: (state: T | StateT) => T extends never ? StateT : T): [
    MutableRefObject<T extends never ? StateT : T>,
    T extends never ? StateT : T,
    (value: SetStateAction<T extends never ? StateT : T>) => T extends never ? StateT : T
];
