import { Dialog, Combobox, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/outline'
import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import fetcher from '../lib/fetcher'
import { NowPlayingSong } from '../lib/types'
import useSWR from 'swr'
import SoundBars from './SoundBars'

export default function Command() {
  const { data: music } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onkeydown(event) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', onkeydown)
    return () => {
      window.removeEventListener('keydown', onkeydown)
    }
  }, [isOpen])

  const listData = [{ slug: 'Blog' }, { slug: 'About Me' }, { slug: 'B Projects' }]

  const filteredProjects = query
    ? listData.filter((link) => link.slug.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    : []
  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog onClose={setIsOpen} className="fixed inset-0 z-20 overflow-y-auto p-4 pt-[25vh]">
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            value=""
            onChange={(link) => {
              console.log(link)
              setIsOpen(false)
              router.push(link)
            }}
            className="relative mx-auto max-w-xl overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5"
          >
            <div className="flex items-center px-4">
              <SearchIcon className="mr-1 h-4 w-4 text-gray-500" />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                placeholder="Search..."
                onChange={(event) => {
                  setQuery(event.target.value)
                }}
              />
            </div>
            {filteredProjects.length > 0 && (
              <Combobox.Options static className="max-h-40 overflow-y-auto text-sm">
                {filteredProjects.map((link, idx) => (
                  <Combobox.Option value={link} key={idx}>
                    {({ active }) => (
                      <div
                        className={`space-x-1 px-4 py-3 ${active ? 'bg-slate-300' : 'bg-white'}`}
                      >
                        <span className={`font-medium  text-gray-900`}>{link.slug}</span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {query && filteredProjects.length === 0 && (
              <p className="p-4 text-sm text-gray-500">No results found</p>
            )}
            {!query && filteredProjects.length === 0 && (
              <>
                <p className="px-4 py-3 text-sm text-gray-500">Suggestions</p>
                <Combobox.Options static className="max-h-40 overflow-y-auto text-sm">
                  <Combobox.Option value="Blog">
                    {({ active }) => (
                      <div
                        className={`space-x-1 px-4 py-3 ${active ? 'bg-slate-300' : 'bg-white'}`}
                      >
                        <span className={`font-medium text-gray-900`}>Blog</span>
                      </div>
                    )}
                  </Combobox.Option>
                  <Combobox.Option value="Projects">
                    {({ active }) => (
                      <div
                        className={`space-x-1 px-4 py-3 ${active ? 'bg-slate-300' : 'bg-white'}`}
                      >
                        <span className={`font-medium text-gray-900`}>Projects</span>
                      </div>
                    )}
                  </Combobox.Option>{' '}
                </Combobox.Options>
              </>
            )}
            {music && music.isPlaying && (
              <div className={`bg-gray-100 px-4 py-3`}>
                <div
                  className={`overflow-hidden truncate text-ellipsis whitespace-nowrap text-xs font-medium text-gray-600`}
                >
                  <SoundBars /> Currently listening to:{' '}
                  <span className="">
                    <a href={music.songUrl} className="underline">
                      {music.title}
                    </a>{' '}
                    by {music.artist}
                  </span>
                </div>
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
