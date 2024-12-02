
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const AdminPaymentData = () => {
    const {allPayment} =useContext(AppContext)
    console.log(allPayment)
  return (
    <>
        page
        { allPayment}
    </>
  )
}

export default AdminPaymentData