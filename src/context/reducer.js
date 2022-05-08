
const Reducer =(state, action)=>{
    switch (action.type) {
        case "SET_SLIDE":
            return {
                ...state,
                currentSlide: action.payload,
            }
            break;
        case "SET_TAG":
            return {
                ...state,
                portofolio: action.payload,
                totalPortofolio: action.payload.length
            }
            break;
        default:
            return {
                state
            }
            break;
    }
}

export default Reducer