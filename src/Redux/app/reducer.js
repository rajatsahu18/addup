import * as toodActions from "./actionTypes";

const initState = {
    todo: [],
    isLoading: false,
    isError: false,
    theme: [
        "https://mcdn.wallpapersafari.com/medium/10/9/5SG0VL.jpg",
        "https://wallpaperaccess.com/full/1841209.jpg",
        "https://wallpaperaccess.com/full/2490621.jpg",
        "https://wallpaperaccess.com/full/2490637.jpg",
        "https://wallpaperaccess.com/full/2470792.jpg",
        "https://media.istockphoto.com/photos/pink-defocused-blurred-motion-abstract-background-picture-id1291503765?k=20&m=1291503765&s=612x612&w=0&h=2VpuYZ1hkd2qDnt7hE_sPL8PFRK5DuDMXN9pij9W0dk=",
        "https://cdn.wallpapersafari.com/78/60/iIxM4H.jpg",
        "https://media.istockphoto.com/photos/pink-and-purple-defocused-blurred-motion-atmospheric-abstract-picture-id1138688074?k=20&m=1138688074&s=612x612&w=0&h=Q_ieV3W1SIsL2hYapcLW9VXxU3s7EzaW8n_ZUMX96O4=",
        "https://c4.wallpaperflare.com/wallpaper/614/482/576/spot-background-dark-wallpaper-preview.jpg"
    ],
    newTheme: ''
};

const reducer = (state = initState, { type, data, link }) => {
    switch (type) {
// Get Data
        case toodActions.GET_TODO_REQUEST:
            return {
                ...state,
                isError: false,
                isLoading: true
            };
        case toodActions.GET_TODO_SUCCESS:
            return {
                ...state,
                todo: data,
                isError: false,
                isLoading: false
            }
        case toodActions.GET_TODO_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        
// Post Data           
        case toodActions.POST_TODO_REQUEST:
            return {
                ...state,
                isError: false,
                isLoading: true
            };
        case toodActions.POST_TODO_SUCCESS:
            return {
                ...state,
                todo: data,
                isError: false,
                isLoading: false
            }
        case toodActions.POST_TODO_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
            
        case toodActions.CHANGE_THEME: {
            return {
                ...state,
                newTheme: link
            }
        }
        default:
            return state;
    }
}

 

export { reducer };
