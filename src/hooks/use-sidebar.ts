import { useEffect } from "react"
import { atom, useAtom } from "jotai"

const sidebarAtom = atom(false)

export const useSidebar = () => {
  const [open, setOpen] = useAtom(sidebarAtom)
  const onClose = () => open !== false && setOpen(false)
  const onOpen = () => setOpen(true)

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [open])

  return { open, onClose, onOpen }
}
