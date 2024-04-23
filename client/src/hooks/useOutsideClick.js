import { useEffect, useRef, useState } from 'react'

export const useOutsideClick = (initialIsOpen, onOutsideClick) => {
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false)
      onOutsideClick()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return { ref, isOpen, setIsOpen }
}
