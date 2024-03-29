import { Dispatch, MutableRefObject, SetStateAction } from 'react';
export default function useAutoUpdateRefState<T>(state: T): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateRefState<T>(state: T): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateRefState<T>(state: T, callback: (state: T) => T): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
export default function useAutoUpdateRefState<T>(callback: () => T): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
