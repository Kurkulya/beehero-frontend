import { mockRegions } from "__mocks__/regions";

const initialState = mockRegions;

export function regionsReducer(state = initialState, action) {
    switch (action.type) {
    default:
        return state;
    }
}
