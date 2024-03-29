import { Dispatch, SetStateAction } from 'react';
export default function useAutoUpdateState<T>(state: Exclude<T, (...args: any[]) => any>): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateState<T>(state: Exclude<T, (...args: any[]) => any>, callback: (state: T) => T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateState<T = never, StateT = never>(state: Exclude<StateT, (...args: any[]) => any>, callback: (state: T | StateT) => T extends never ? StateT : T): [T extends never ? StateT : T, Dispatch<SetStateAction<T extends never ? StateT : T>>];
