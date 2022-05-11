import { createRoot } from 'react-dom/client'

/**
 * define right click menu to el
 * @param el element to triggrt @contextmenu event
 * @param menu DIY menu
 * @returns clear event handler and DOM Element
 */
function useRightClickMenu(
  el: HTMLElement | null,
  menu: (hide: () => void) => JSX.Element
) {
  if (el === null)
    return () => {
      /* empty func */
    }
  // create container <div>
  const menuEl = document.createElement('div')
  menuEl.style.position = 'absolute'
  menuEl.style.top = '0px'
  menuEl.style.left = '0px'
  menuEl.style.visibility = 'hidden'
  document.body.appendChild(menuEl)
  // render DIY menu to the container
  const hideMenu = () => {
    menuEl.style.visibility = 'hidden'
  }
  createRoot(menuEl).render(menu(hideMenu))
  // add contextmenu event handler
  const contextmenuHandler = (e: MouseEvent) => {
    menuEl.style.cssText = `position: absolute; top: ${e.clientY}px; left: ${e.clientX}px; visibility: visible;`
    e.preventDefault()
  }
  el.addEventListener('contextmenu', contextmenuHandler)
  // add click event handler to hide menu

  const clickHandler = () => {
    hideMenu()
  }
  el.addEventListener('click', clickHandler)

  return () => {
    el.removeEventListener('contextmenu', contextmenuHandler)
    el.removeEventListener('click', clickHandler)
    document.body.removeChild(menuEl)
  }
}

export { useRightClickMenu }
