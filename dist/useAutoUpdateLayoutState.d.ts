import { Dispatch, SetStateAction } from 'react';
export declare function AA<T>(a: T): T;
export default function useAutoUpdateLayoutState<T>(state: T, finalStateCallback?: (state: T) => T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateLayoutState<T>(finalStateCallback: (State: T) => T): [T, Dispatch<SetStateAction<T>>];
