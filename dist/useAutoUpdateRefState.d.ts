import { Dispatch, MutableRefObject, SetStateAction } from 'react';
export default function useAutoUpdateRefState<T>(state: Exclude<T, (...args: any[]) => any>): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateRefState<T = never, StateT = never>(state: Exclude<StateT, (...args: any[]) => any>, callback: (state: T | StateT) => T extends never ? StateT : T): [
    MutableRefObject<T extends never ? StateT : T>,
    T extends never ? StateT : T,
    Dispatch<SetStateAction<T extends never ? StateT : T>>
];
