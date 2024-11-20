const initialState = {
    value: 0,
};

export type InitialStateType = typeof initialState;

export const counterReducer = (
    state: InitialStateType = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case "INC_VALUE":
            return { ...state, value: state.value + 1 };
        case "SET_VALUE_FROM_LOCAL_STORAGE":
            return { ...state, value: action.payload.value };
        case "DEC_VALUE":
            return { ...state, value: initialState.value };
        default:
            return state;
    }
};

export const incCounterValueAC = () =>
    ({ type: "INC_VALUE" } as const);

export const setValueFromLocalStorageAC = (value: number) =>
    ({ type: "SET_VALUE_FROM_LOCAL_STORAGE", payload: { value } } as const);

export const decCounterValueAC = () =>
    ({ type: "DEC_VALUE" } as const);


export type IncCounterValueActionType = ReturnType<typeof incCounterValueAC>;
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>;
export type DecCounterValueActionType = ReturnType<typeof decCounterValueAC>;

export type ActionsType =
    | IncCounterValueActionType
    | SetValueFromLocalStorageActionType
    | DecCounterValueActionType;
