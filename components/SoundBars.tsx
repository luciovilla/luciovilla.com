import { useEffect } from 'react'
import { animate } from 'motion'

export default function SoundBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    )
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    )
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    )
  }, [])

  return (
    <div className='inline-block'>
      <div className="flex items-end overflow-hidden">
        <span id="bar1" className="mr-[3px] h-2 w-1 bg-gray-300 opacity-75 dark:bg-gray-500" />
        <span id="bar2" className="mr-[3px] h-1 w-1 bg-gray-300 dark:bg-gray-500" />
        <span id="bar3" className="h-3 w-1 bg-gray-300 opacity-80 dark:bg-gray-500" />
      </div>
    </div>
  )
}
