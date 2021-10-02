export function scrollToTop(target) {
  return new Promise((resolve) => {
    if (window.scrollY === 0) return resolve()

    window.scroll({
      top: 0,
      left: target.scrollLeft,
      behavior: 'smooth',
    })

    function handleScroll() {
      if (window.scrollY !== 0) return
      window.removeEventListener('scroll', handleScroll)
      return resolve()
    }

    window.addEventListener('scroll', handleScroll)
  })
}
