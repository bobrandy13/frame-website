import Image from "next/image";
import logo from "../public/pear.jpg";
import Link from "next/link";
import ProductType from "../pages/productType"

function Navbar() {
  return (
    <div className="flex items-center h-20 w-full bg-gray-100 rounded-sm sticky top-0">
      <div className="flex items-center ml-2.5 w-full">
        <Link href="/">
          <Image src={logo} alt="pear logo" width={"50"} height={"50"} />
        </Link>
        <div className="w-full float-right">
          <ul className="float-right">
            <li className="float-left mx-5">
              <Link href="/Frames">Frames</Link>
            </li>
            <li className="float-left mx-5">
              <Link href="/paintings">Paintings</Link>
            </li>
            <li className="float-left mx-5">
              <Link href="/customFrames">Custom</Link>
            </li>
            <li className="float-left mx-5">
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
