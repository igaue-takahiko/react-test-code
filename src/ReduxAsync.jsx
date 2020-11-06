import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDummy, fetchJSON, selectCount, selectUsername } from './features/CustomCounter/CustomCounterSlice'

const ReduxAsync = () => {
    const dispatch = useDispatch()
    const username = useSelector(selectUsername)
    const count = useSelector(selectCount)

    return (
        <div>
            <span data-testid="count-value">{count}</span>
            <button onClick={() => dispatch(fetchDummy(5))}>Fetch Dummy</button>
            {username && <h1>{username}</h1>}
            <button onClick={() => dispatch(fetchJSON())}>Fetch JSON</button>
        </div>
    )
}

export default ReduxAsync
