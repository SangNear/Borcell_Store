"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.png'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { CircleUserRound, Menu, ShoppingCart } from 'lucide-react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { User, auth } from '@clerk/nextjs/server'
import { UserButton, useUser } from '@clerk/nextjs'
const Navbar = () => {
    const path = usePathname()
    const {user} = useUser()
    console.log("user", user);

    return (
        <nav className=' sticky top-0 w-full  flex justify-between px-10 py-4 max-sm:px-5 items-center shadow-xl'>
            <Link href="/">
                <Image src={logo} alt='logo' width={150} height={70} />
            </Link>
            <div className='flex gap-10 w-1/2 items-center justify-evenly max-md:hidden  '>
                {navLinks.map((navLink) => (

                    <Link key={navLink.route} href={navLink.route} className={`font-semibold p-2 rounded-3xl  hover:text-blue-400 transition-all ${path === navLink.route ? "bg-blue-500 text-white" : ""}`}>
                        {navLink.label}
                    </Link>
                ))}
            </div>
            <div className='flex gap-3 items-center max-md:hidden'>
                <Link href="/cart" className='flex w-[120px] px-2 py-1 gap-3 items-center hover:bg-black transition-all  hover:text-white rounded-full'>
                    <ShoppingCart />
                    <p className='text-base-bold'>Cart (0)</p>
                </Link>
                {user ?
                    <UserButton afterSignOutUrl='/sign-in' />
                    :
                    <Link href="/sign-in" className='hover:text-blue-500' >
                        <CircleUserRound />
                    </Link>
                }
            </div>





            {/* //Mobile menu */}
            <div className='md:hidden'>

                <Sheet>
                    <SheetTrigger asChild>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <div className='w-full h-full flex flex-col justify-baseline gap-3'>
                            {navLinks.map((navLink) => (
                                <Link href={navLink.route} key={navLink.route} className='text-lg font-medium p-4 hover:text-blue-500' >{navLink.label}</Link>
                            ))}
                        </div>

                    </SheetContent>
                </Sheet>
            </div>
            {/* //Mobile menu */}
        </nav>
    )
}

export default Navbar