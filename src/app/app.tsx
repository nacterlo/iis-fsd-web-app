import { RouterProvider } from "react-router";
import { routes } from "./router/router-config";
import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";
import { Provider } from "react-redux";
import { store } from "./store/store";



export default function App() {
    return (

        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Transition-duration': '.5s', // set to `none` to disable transition
                    },
                }}
            />
            <Provider store={store}>
                <RouterProvider router={routes} />
            </Provider>
        </CssVarsProvider>
    )
}