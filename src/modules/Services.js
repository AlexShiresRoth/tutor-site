import React, { useState, useEffect } from "react"

export const Services = () => {
  const [count, setCount] = useState()
  useEffect(() => {
    setCount(2)
    return setCount()
  }, [])
  return (
    <div>
      <h1>Helo</h1>
      <p>{count}</p>
    </div>
  )
}
