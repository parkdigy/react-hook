import React from 'react';
export type UseIntervalReturnValue = [
    React.MutableRefObject<NodeJS.Timeout | undefined>,
    (callback: (ref: React.MutableRefObject<NodeJS.Timeout | undefined>) => void, ms?: number) => void
];
export declare function useIntervalRef(): UseIntervalReturnValue;
export default useIntervalRef;
