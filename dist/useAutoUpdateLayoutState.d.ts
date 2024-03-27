import { Dispatch, SetStateAction } from 'react';
export default function useAutoUpdateLayoutState<T>(state: T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateLayoutState<T>(state: T, callback: (state: T) => T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateLayoutState<T>(callback: () => T): [T, Dispatch<SetStateAction<T>>];
