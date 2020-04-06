import { userActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: userActionTypes.SetCurrentUser,
    payload: user
})