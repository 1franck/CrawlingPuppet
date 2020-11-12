export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export function randomSleep(minMs: number, maxMs: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.random() * (+maxMs - +minMs) + +minMs)
  })
}
