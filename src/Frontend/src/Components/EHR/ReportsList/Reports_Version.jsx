import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import StaticListUpdate from './StaticListUpdate';
import Static_Version_Create from './StaticVersionCreate';

const Static_Version = () => {
  const [listId, setListId] = useState();
  
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(()=> {
    if(ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.staticversionslider_id);
    }
  },[ifExists]);

  //  console.log(listId)
  return (
    <>
      {listId ? <StaticListUpdate listId={listId} /> : <Static_Version_Create />}
    </>
  )
}

export default Static_Version