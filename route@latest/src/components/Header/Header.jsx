import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/Page1">Page1</Link></li>
                        <li><Link to="/Page2">Page2</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}