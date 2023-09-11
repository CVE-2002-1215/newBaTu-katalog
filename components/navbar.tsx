import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import MainNavMobile from "./main-nav-mobile";
import MainNavMobile6 from "./main-nav-mobile-6";

export const revalidate = 0;

const Navbar = async () => {

  const categories = await getCategories();
  // console.log(categories);

  const navigationComponent = categories.length > 6 ? (
    <MainNavMobile6 data={categories} />
  ) : (
    <MainNav data={categories} />
  );
  
  return ( 
    <div className="border-b fixed top-0">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl lg:hidden text-center">New Ba&Tu</p>
            <p className="font-bold text-xl lg:block hidden text-center">New Ba&Tu Hırdavat</p>
          </Link>
          <div className="ml-4" /> {/* Boşluk eklemek için div */}
          {navigationComponent}
          <MainNavMobile data={categories}/>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;