function useMultipleClick(
  continuousTime: number,
  clickTime: number,
  callback: (e: number) => void
) {
  // https://zh-hans.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
  // in <StrictMode> & dev env, useMemo will be called one more time
  // then developer may discover side effects caused by their poor logic
  console.log(1)
  let clicks: number[] = []
  const clickHandler = () => {
    // add precise time of current click event
    const now = performance.now()
    const len = clicks.push(now)
    // has enough click events
    if (clicks.length >= clickTime) {
      // compare to event {clickTime} before
      const timeDiff = now - (clicks.at(-clickTime) || 0)
      if (timeDiff <= continuousTime) {
        clicks = []
        // TODO can pass more info
        callback(timeDiff)
      } else {
        // abandon useless event records
        clicks = clicks.slice(len - clickTime + 1)
      }
    }
  }
  return clickHandler
}

export { useMultipleClick }
