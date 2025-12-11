import { Dispatch, RefObject, SetStateAction } from 'react';
export declare function useRefState<S>(initialState: S | (() => S)): [RefObject<S>, S, Dispatch<SetStateAction<S>>];
export declare function useRefState<S = undefined>(): [
    RefObject<S | undefined>,
    S | undefined,
    Dispatch<SetStateAction<S | undefined>>
];
