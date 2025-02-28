import React from 'react'
import NavButton from './NavButton'
import { FilesIcon, HomeIcon, LogOutIcon, UserRoundSearchIcon } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggleButton } from './ThemeToggleButton'
import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

const Header = () => {
  return (
    <header
        className='animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20'
    >
        <div className="flex h-8 items-center justify-between w-full">

            <div className="flex items-center gap-2">
                <NavButton href='/home' label='Home' icon={HomeIcon} />

                <Link href='/home' className='flex font-bold justify-center items-center gap-2 ml-0' title='Home'>
                <h1 className="hidden sm:block">Stevans Auto Parts Shop</h1></Link>
            </div>
            
            <div className="flex items-center">
              <NavButton href='/tickets' label='Tickets' icon={FilesIcon} />

              <NavButton href='/customers' label='Customers' icon={UserRoundSearchIcon} />

              <ThemeToggleButton />

              <Button 
                variant="ghost"
                size='icon'
                aria-label='Log Out'
                title='Log Out'
                className='rounded-full'
                asChild
              >
                <LogoutLink>
                  <LogOutIcon />
                </LogoutLink>
              </Button>

            </div>

        </div>
    </header>
  )
}

export default Header