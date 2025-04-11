import React from 'react';
export type UseTimeoutReturnValue = [
    React.MutableRefObject<NodeJS.Timeout | undefined>,
    (callback: (args: void) => void, ms?: number) => void
];
export declare function useTimeoutRef(): UseTimeoutReturnValue;
export default useTimeoutRef;
