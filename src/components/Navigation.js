'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Github } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/posts', label: 'Articles' },
  { path: '/posts', label: 'Tools' },
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true;
    const checkLoginStatus = async () => {
      if (!isMounted) return;
      setIsLoading(true);
      try {
        const response = await fetch('/api/check-auth');
        const data = await response.json();
        if (isMounted) setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error('Failed to check auth status:', error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    checkLoginStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-primary">Xiaohongshu Wiki</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  item.path === pathname && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
         
          {!isLoading && (
            isLoggedIn ? (
              <>
                <Link href="/admin">
                  <Button variant="ghost">Admin</Button>
                </Link>
                <Button onClick={handleLogout} variant="outline">Logout</Button>
              </>
            ) : (
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  )
}