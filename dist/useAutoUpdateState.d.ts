import { Dispatch, SetStateAction } from 'react';
export default function useAutoUpdateState<T>(state: T, finalStateCallback?: (state: T) => T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateState<T>(finalStateCallback: (State: T) => T): [T, Dispatch<SetStateAction<T>>];
