import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { configureStore } from '@reduxjs/toolkit'

import customCounterReducer from '../src/features/CustomCounter/CustomCounterSlice'
import ReduxAsync from './ReduxAsync'

afterEach(() => {
    cleanup()
})

describe('ReduxAsync test', () => {
    let store
    beforeEach(() => {
        store = configureStore({
            reducer: {
                customCounter: customCounterReducer
            }
        })
    })
    test('should display value with 100 * payload', async () => {
        render(
            <Provider store={store}>
                <ReduxAsync />
            </Provider>
        )
        userEvent.click(screen.getByText('Fetch Dummy'))
        expect(await screen.findByTestId('count-value')).toHaveTextContent('105')
    })
})

