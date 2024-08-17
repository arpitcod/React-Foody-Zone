import React, { useState } from 'react'
import Header from './Header'
import FoodCard from './FoodCard'

const HomePage = () => {
  const [filterData,setFilterData] = useState('');

  const [selectedType,setSelectedType] = useState("All")

  // const filter = 
  // console.log(filterData)
  return (
        <>
            <Header 
                filterData={filterData}
                setFilterData={setFilterData}
                setSelectedType={setSelectedType}
                selectedType={selectedType}
            />
            <FoodCard 
             filterData={filterData}
             selectedType={selectedType}
            />        
         </>
  )
}

export default HomePage