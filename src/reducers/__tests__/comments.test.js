import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('saves comments correctly', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "New comment"
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([action.payload]);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {});

    expect(newState).toEqual([]);
});

