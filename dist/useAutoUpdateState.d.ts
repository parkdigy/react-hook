import { Dispatch, SetStateAction } from 'react';
export default function useAutoUpdateState<T>(state: T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateState<T>(state: T, callback: (state: T) => T): [T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateState<T>(callback: () => T): [T, Dispatch<SetStateAction<T>>];
