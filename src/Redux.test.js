import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import customCounterReducer from '../src/features/CustomCounter/CustomCounterSlice'
import Redux from './Redux'

afterEach(() => {
    cleanup()
})

describe('Redux Integration Test', () => {
    let store;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                customCounter: customCounterReducer
            }
        })
    })
    it('should display value increment by 1 per click', () => {
        render(
            <Provider store={store}>
                <Redux />
            </Provider>
        )
        userEvent.click(screen.getByText("+"))
        userEvent.click(screen.getByText("+"))
        userEvent.click(screen.getByText("+"))
        expect(screen.getByTestId("count-value")).toHaveTextContent(3)
    })
    it('should display value decrement by 1 per click', () => {
        render(
            <Provider store={store}>
                <Redux />
            </Provider>
        )
        userEvent.click(screen.getByText("-"))
        userEvent.click(screen.getByText("-"))
        userEvent.click(screen.getByText("-"))
        expect(screen.getByTestId("count-value")).toHaveTextContent(-3)
    })
    it('should display value with incrementByAmount', () => {
        render(
            <Provider store={store}>
                <Redux />
            </Provider>
        )
        userEvent.type(screen.getByPlaceholderText("Enter"), "30")
        userEvent.click(screen.getByText("incrementByAmount"))
        expect(screen.getByTestId("count-value")).toHaveTextContent(30)
    })
})

