import Link from "next/link";
import Logo from "./logo";
import Button from "./button";
import OutlineButton from "./outline-button";

const Navbar = () => {
    return (<div className="flex gap-4 w-full bg-violet-100 h-16">
        <div className="container mx-auto flex items-center justify-between">
            <Logo />
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
            </div>
            <div className="flex gap-4 items-center">
                <OutlineButton title="Login" />
                <Button title="Sign Up" />
            </div>

        </div>
    </div>);
}

export default Navbar;