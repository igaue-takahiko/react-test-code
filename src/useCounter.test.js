import { useCounter } from './useCounter'
import { act, renderHook } from '@testing-library/react-hooks'
import { cleanup } from '@testing-library/react'

afterEach(() => {
    cleanup()
})

describe('useCounter custom Hooks', () => {
    test('should increment by 1', () => {
        const { result } = renderHook(() => useCounter(3))
        expect(result.current.count).toBe(3)
        act(() => {
            result.current.increment()
        })
        expect(result.current.count).toBe(4)
    })
    test('should decrement by 1', () => {
        const { result } = renderHook(() => useCounter(3))
        expect(result.current.count).toBe(3)
        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(2)
    })
    test('should double the counter value', () => {
        const { result } = renderHook(() => useCounter(3))
        expect(result.current.count).toBe(3)
        act(() => {
            result.current.double()
        })
        expect(result.current.count).toBe(6)
    })
    test('should triple the counter value', () => {
        const { result } = renderHook(() => useCounter(3))
        expect(result.current.count).toBe(3)
        act(() => {
            result.current.triple()
        })
        expect(result.current.count).toBe(9)
    })
    test('should reset to zero', () => {
        const { result } = renderHook(() => useCounter(3))
        expect(result.current.count).toBe(3)
        act(() => {
            result.current.reset()
        })
        expect(result.current.count).toBe(0)
    })
})

