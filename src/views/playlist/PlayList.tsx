import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const PlayList = () => {
  // const [categoriesList, setCategoriesList] = useState();
  // useEffect(() => {
  //   const fetchCategoriesList = async () => {
  //     const data = await SpotyfyService.getHomePage(9, 30)
  //     console.log(data)
  //   }
  //   fetchCategoriesList()
  // }, [])

  return (
    <>
      <Outlet />
    </>
  );
};

export default PlayList;