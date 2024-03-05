import React, { useContext } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addFolowers, addFolowing, minusFolowers, minusFolowing } from '../features/mySlice';

const Stats = () => {
    const statFolowers = useAppSelector(state => state.followers);
    const statFolowing = useAppSelector(state => state.following);
    const dispatch = useAppDispatch()
    const { user, stats, changeStats } = useContext(TwitterContext);

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => changeStats('followers', 1)}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeStats('followers', -1);
                    }}
                >Followers: {statFolowers}</div>
                <button onClick={() => dispatch(addFolowers(1))}>+</button>
                <button onClick={() => dispatch(minusFolowers(1))}>-</button>
                <div
                    onClick={() => changeStats('following', 1)}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeStats('following', -1);
                    }}
                >Following: {statFolowing}</div>
                <button onClick={() => dispatch(addFolowing(1))}>+</button>
                <button onClick={() => dispatch(minusFolowing(1))}>-</button>
            </div>
        </div>
    )
}

export default Stats