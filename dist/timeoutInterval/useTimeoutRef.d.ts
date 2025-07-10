import React from 'react';
export type UseTimeoutReturnValue = [
    React.RefObject<NodeJS.Timeout | undefined>,
    (callback: (args: void) => void, ms?: number) => void
];
export declare function useTimeoutRef(): UseTimeoutReturnValue;
