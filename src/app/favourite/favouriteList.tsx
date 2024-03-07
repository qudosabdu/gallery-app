"use client";
import React from 'react'
import View from './view'
import { MyImage } from './page'
import { useState, useEffect } from 'react';

function FavouriteList({resources}: {resources: MyImage[]}) {
  const [intialState, setIntialState] = useState(resources)
  useEffect(() => {
    setIntialState(resources)
  }, [resources])
  return (
    <div className="columns-4 gap-4 space-y-4 mx-auto px-4">
        {intialState.map((image) => (
          <div key={image.public_id} className="">
            <View src={image.public_id} tag = {image.tags} fun={(publicId:string)=>{
              setIntialState(intialState.filter((image)=> image.public_id !== publicId))
            }}/>
          </div>
        ))}
      </div>
  )
}

export default FavouriteList
