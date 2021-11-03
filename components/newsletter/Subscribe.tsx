import React, { useState, useRef } from 'react'

import { Form, FormState } from '../../lib/types'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'
import LoadingSpinner from '../LoadingSpinner'

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial })
  const inputEl = useRef(null)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setForm({ state: Form.Loading })

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      })
      return
    }

    inputEl.current.value = ''
    setForm({
      state: Form.Success,
      message: `Yay! You're now on the list.`
    })
  }

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full">
      <p className="text-lg md:text-xl font-bold text-gray-900">Subscribe to my newsletter</p>
      <p className="my-1 text-gray-800">
        Get emails from me about web development, tech and random <i className="italic">chisme</i>.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="hi@luciovilla.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white text-gray-900"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 text-gray-900 rounded w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error && <ErrorMessage>{form.message}</ErrorMessage>}
      {form.state === Form.Success && <SuccessMessage>{form.message}</SuccessMessage>}
    </div>
  )
}
