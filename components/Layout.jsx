


import Navbar from "./Navbar";
import { useTheme } from "./ThemeProvider";

export default function Layout({children}) {
    const [theme, setTheme] = useTheme()

    return <div  data-theme={theme}>
        <Navbar/>
        {children}
        {/*Footer*/}
    </div>
}