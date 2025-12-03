"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ArrowDownLeftFromCircle,
  Heart,
  ListOrdered,
  LogOut,
  User,
} from "lucide-react";

interface NavList {
  title: string;
  href: string;
  icon: React.ElementType;
}

const navList: NavList[] = [
  { title: "My Profile", icon: User, href: "/my-profile" },
  { title: "Address", icon: ArrowDownLeftFromCircle, href: "/address" },
  { title: "My List", icon: Heart, href: "/my-list" },
  { title: "My Orders", icon: ListOrdered, href: "/my-orders" },
  { title: "Logout", icon: LogOut, href: "/logout" },
];

function SidebarProfile() {
  const pathname = usePathname();

  return (
    <div className="sticky top-44">
      <Card className="rounded-sm pb-0">
        <CardContent>
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <div>
              <Image
                src={"/images/bla.png"}
                alt="sdsd"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <strong>Giorgi Kavtaradze</strong>
              <p className="text-sm">giorgi.kavtaradze2000@mail.ru</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-0 bg-gray-200">
          <div className="w-full">
            <div className="">
              {navList.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                const linkClasses = `
                  flex items-center gap-3 py-2 text-gray-700 transition-colors duration-150 w-full
                  ${
                    isActive
                      ? "text-black font-semibold border-l-2 border-red-500 pl-4 hover:bg-gray-300"
                      : "hover:bg-gray-300 pl-5"
                  }
                `;
                const iconClasses = `w-5 h-5 ${
                  isActive ? "text-red-600" : "text-black"
                }`;
                return (
                  <div key={item.title || index}>
                    <Link href={item.href} className={linkClasses}>
                      <IconComponent className={iconClasses} />
                      <span>{item.title}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SidebarProfile;
