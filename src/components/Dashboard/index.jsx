import { Navbar } from "../Navbar";
export const Dashboard = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}