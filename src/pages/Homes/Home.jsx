import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {counterActions} from '@stores/slices/counter.slice'
import Banner from './components/Banners/Banner'
import Introduce from './components/Introduces/Introduce'

export default function Home() {
  // const dispatch = useDispatch();
  // const counterStore = useSelector(store => store.counterStore);

  // useEffect(() => {
  //   console.log("counterStore", counterStore)
  // }, [])
  return (
    <div>
      <h1>Home</h1>
      <Banner />
      <Introduce />
      {/* <p>Counter: {counterStore.counter}</p>
      <button onClick={() => {
        dispatch(
          counterActions.increment()
        )
      }}>Tăng Counter</button>
      <br></br>
      <button onClick={() => {
        dispatch(
          counterActions.decrement()
        )
      }}>Giảm Counter</button>
      <br></br>
      <button onClick={() => {
        dispatch(
          counterActions.resetCounter(
            {
              number: 100,
              temp: 2
            }
          )
        )
      }}>Restet Counter</button> */}
    </div>
  )
}
