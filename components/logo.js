import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link href="/">
             <Image
                src={"/assets/logo.svg"}
                alt="Logo"
                width={50}
                height={50}
                className="w-10 h-10"
            />
            </Link>
        </div>
    );
}

export default Logo;