'use client';

import React from 'react'
import { useRouter } from 'next/navigation'

export default function OrderProduct() {

  const router = useRouter();

  const handleClick = async () => {
    console.log('Ordering product')
    router.push('/');
  }
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Order</button>
    </div>
  )
}
