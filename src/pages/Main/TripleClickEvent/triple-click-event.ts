function useMultipleClick(
  continuousTime: number,
  clickTime: number,
  callback: (e: number) => void
) {
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
  return {
    clickHandler
  }
}

export { useMultipleClick }
