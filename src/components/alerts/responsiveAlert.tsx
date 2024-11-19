'use client'

import React, { useState, useEffect } from 'react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowDown } from 'lucide-react'

export default function ResponsiveAlert() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2250) // Alert will disappear after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <Alert className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-md animate-in fade-in slide-in-from-top-5 duration-300">
      <AlertDescription className='font-semibold'>
        Scroll Down 👇
      </AlertDescription>
    </Alert>
  )
}