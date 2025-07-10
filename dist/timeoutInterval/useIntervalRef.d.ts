import React from 'react';
export type UseIntervalReturnValue = [
    React.RefObject<NodeJS.Timeout | undefined>,
    (callback: (ref: React.RefObject<NodeJS.Timeout | undefined>) => void, ms?: number) => void
];
export declare function useIntervalRef(): UseIntervalReturnValue;
