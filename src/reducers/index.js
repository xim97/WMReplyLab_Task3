export const initialState = {
    showingDate: new Date(),
    viewType: "full",
    title: "",
    date: new Date(),
    startTime: "",
    finishTime: "",
    isEveryYear: false,
    events: [
        {
            title: "title5",
            startTime: new Date((new Date()).setHours(11, 11, 0)),
            finishTime: new Date((new Date()).setHours(12, 12, 0)),
            isEveryYear: false
        },
        {
            title: "title2",
            startTime: new Date((new Date()).setHours(16, 22, 0)),
            finishTime: new Date((new Date()).setHours(17, 0, 0)),
            isEveryYear: false
        },
        {
            title: "title1",
            startTime: new Date((new Date()).setHours(13, 22, 0)),
            finishTime: new Date((new Date()).setHours(14, 0, 0)),
            isEveryYear: false
        }
    ]
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_SHOWING_DATE_NEXT_MONTH":
            return {
                ...state,
                showingDate: new Date(state.showingDate.setMonth(state.showingDate.getMonth() + 1))
            }
        case "SET_SHOWING_DATE_PREV_MONTH":
            return {
                ...state,
                showingDate: new Date(state.showingDate.setMonth(state.showingDate.getMonth() - 1))
            }
        case "SET_SHOWING_DATE_TODAY":
            return {
                ...state,
                showingDate: new Date()
            }
        case "SET_VIEW_TYPE":
            return {
                ...state,
                viewType: action.viewType
            }
        case "SET_INPUT_TITLE":
            return {
                ...state,
                title: action.title
            }
        case "SET_INPUT_DATE":
            return {
                ...state,
                date: action.date
            }
        case "SET_INPUT_START_TIME":
            return {
                ...state,
                startTime: action.time
            }
        case "SET_INPUT_FINISH_TIME":
            return {
                ...state,
                finishTime: action.time
            }
        case "SET_INPUT_EVERYYEAR":
            return {
                ...state,
                isEveryYear: action.isEveryYear
            }
        case "ADD_EVENT":
            return {
                ...state,
                title: "",
                date: new Date(),
                startTime: "",
                finishTime: "",
                isEveryYear: false,
                events: state.events.concat(action.event)
            }

    }

    return state;
}