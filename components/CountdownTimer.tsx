'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  endDate: Date
  title?: string
}

export default function CountdownTimer({ endDate, title = '限時優惠' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="glass-effect rounded-lg p-6 text-center">
      <h3 className="text-white text-sm md:text-base mb-4 font-light tracking-wide">
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {[
          { label: '天', value: timeLeft.days },
          { label: '時', value: timeLeft.hours },
          { label: '分', value: timeLeft.minutes },
          { label: '秒', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg w-full aspect-square flex items-center justify-center mb-2">
              <span className="text-2xl md:text-4xl font-light text-white">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs text-white/60">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
