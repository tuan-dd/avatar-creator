import React, { useState, useEffect } from "react";
import Display from "./Display";
import Item from "./Item";
import List from "./List";
import Animation from "./Animation";
const total = { // object folder names of parts and numbles
  body: 17,
  "style-clothes-1": 5,
  "style-clothes-2": 5,
  "style-clothes-3": 9,
  eyes: 17,
  eyebrows: 15,
  facial_hair: 17,
  hair: 73,
  mouths: 24,
  noses: 1,
  hats: 28,
  glasses: 17,
  neckwear: 17,
  earrings: 32,
  "earrings left": 32
};
const numblesOfPart = Object.values(total) // convert  numbles folder names of parts to array
const listOfPart = Object.keys(total) // convert folder names of parts to array
const accessoriesFolder = ["hats", "glasses", "earrings", "neckwear",] // These folders in the accessories folder so declared as an array to filter
const StyleClothesFolder = ["style-clothes-1", "style-clothes-2", "style-clothes-3"] // 



export default function Container() {
  // convert string position of localStorage to object after that take saveAvatarObject to chooses
  const saveAvatarObject = window.localStorage.getItem("saveAvatar")
    ? window.localStorage.getItem("saveAvatar").split(",").map(Number).map((item, index) => {
      if ((index === 1 || index === 2 || index === 3) && item !== 0) {
        item = {
          className: `${listOfPart[index]}`,
          src: `character-part/clothes/layer_${index}/${item}.png`,
          display: "block",
          key: `${index}`,
          alt: `img_${item}`
        }
      } else if ((index === 13 || index === 12 || index === 11 || index === 10) && item !== 0) {
        item = {
          className: `${listOfPart[index]}`,
          src: `character-part/accessories/${listOfPart[index]}/${item}.png`,
          display: "block",
          key: `${index}`,
          alt: `img_${item}`
        }
      } else if (index === 14 && item !== 0) {
        item = {
          className: `${listOfPart[index]}`,
          src: `character-part/accessories/${listOfPart[index].slice(0, 8)}/${item}.png`,
          display: "block",
          key: `${index}`,
          alt: `img_${item}`
        }
      } else if (item !== 0) {
        item = {
          className: `${listOfPart[index]}`,
          src: `character-part/${listOfPart[index]}/${item}.png`,
          display: "block",
          key: `${index}`,
          alt: `img_${item}`
        }
      } else {
        item = { className: `${listOfPart[index]}`, src: '', display: "none", key: index }
      }
      return item
    }) : listOfPart.map((item, index) => ({ className: item, src: '', display: "none", key: index }))

  const [itemOfPart, setitemOfPart] = useState([])
  const [chooses, setChooses] = useState(saveAvatarObject)

  const [saveAvatar, setSaveAvatar] = useState(Array(numblesOfPart.length).fill(null)) // save numbles position img 
  const [clickSave, setClickSave] = useState(false)



  // click item.js it will show item in display
  const handleClickOption = (e) => {
    e.preventDefault()
    const element = e.target
    const object = {
      className: element.id,
      src: element.src,
      display: "block",
      key: new Date(),
      alt: element.alt
    }
    setChooses(chooses.map((item, index) => {
      if (item.className === object.className) {
        return item = object
      } else {
        return item
      }
    }))
    setSaveAvatar(saveAvatar.map((item, index) => {
      if (listOfPart[index] === object.className) {
        return item = parseInt(object.alt.slice(4))
      } 
      else {
        return item
      } // save numbles position of img
    }))
    // console.log(saveAvatar)
  }


  // click it will random all item in list and show in display
  const handleClickRandom = () => {
    const objectRandom = Object.entries(total).map(e => ({ [e[0]]: Math.floor(Math.random() * e[1]) + 1 })) // random numbles position of img
    setSaveAvatar(saveAvatar.map((item, index) => item = parseInt(Object.values(objectRandom[index])))) // save numbles position of img
    const objectAvatarRandom = objectRandom.map((e, index) => {
      e =
        accessoriesFolder.includes(Object.keys(e).toString()) ? // check to scr enable correct  directory link
          {
            className: Object.keys(e).toString(),
            src: `character-part/accessories/${Object.keys(e).toString()}/${Object.values(e)}.png`,
            display: "block",
            key: `${index}`,
            alt: `img_${Object.values(e)}`
          } :
          StyleClothesFolder.includes(Object.keys(e).toString()) ?
            {
              className: Object.keys(e).toString(),
              src: `character-part/clothes/layer_${index}/${Object.values(e)}.png`,
              display: "block",
              key: `${index}`,
              alt: `img_${Object.values(e)}`,
            } :
            Object.keys(e).toString().includes('left') ?
              {
                className: Object.keys(e).toString(),
                src: `character-part/accessories/${Object.keys(e).toString().slice(0, 8)}/${Object.values(e).toString()}.png`,
                display: "block",
                key: `${index}`,
                alt: `img_${Object.values(e)}`,
              } :
              {
                className: Object.keys(e).toString(),
                src: `character-part/${Object.keys(e).toString()}/${Object.values(e)}.png`,
                display: "block",
                key: `${index}`,
                alt: `img_${Object.values(e)}`,
              }
      return e
    })
    setChooses([...objectAvatarRandom])
  }
  // click gender male or female or other and it will show hair of gender that you choose in item.js
  // folders  male , female in hair folders  But total no key boy and girl
  const handleClickGender = (e) => {
    const element = e.target.textContent
    if (element === "Male") {
      document.querySelector('h1').innerHTML = element
      const img = Array(17)
      for (let i = 0; i < img.length; i++) {
        img[i] = {
          className: "btn btn-choose-part-img",
          src: `character-part/hair/boy/${i + 1}.png`,
          alt: `img_${i + 1}`,
          id: "hair"
        }
      } setitemOfPart([...img])
    } else if (element === "Female") {
      document.querySelector('h1').innerHTML = element
      const img = Array(46)
      for (let i = 0; i < img.length; i++) {
        img[i] = {
          className: "btn btn-choose-part-img",
          src: `character-part/hair/girl/${i + 1}.png`,
          alt: `img_${i + 1}`,
          id: "hair",
        }
      } setitemOfPart([...img])
    } else {
      document.querySelector('h1').innerHTML = element
      const img = Array(73)
      for (let i = 0; i < img.length; i++) {
        img[i] = {
          className: "btn btn-choose-part-img",
          src: `character-part/hair/${i + 1}.png`,
          alt: `img_${i + 1}`,
          id: "hair",
        }
      } setitemOfPart([...img])
    }

  }
  // click list it will show item in item.js
  const handleClickName = (e) => {
    const content = e.target.textContent
    document.querySelector('h1').innerHTML = content
    listOfPart.forEach((item, index) => {
      if (item === content) {
        const img = Array(numblesOfPart[index])
        for (let i = 0; i < numblesOfPart[index]; i++) {
          img[i] = accessoriesFolder.includes(item) ?
            {
              className: "btn btn-choose-part-img",
              src: `character-part/accessories/${item}/${i + 1}.png`,
              alt: `img_${i + 1}`,
              id: `${item}`
            } : StyleClothesFolder.includes(item) ?
              {
                className: "btn btn-choose-part-img",
                src: `character-part/clothes/layer_${index}/${i + 1}.png`,
                alt: `img_${i + 1}`,
                id: `${item}`
              } : item.includes("left") ?
                {
                  className: "btn btn-choose-part-img",
                  src: `character-part/accessories/${item.slice(0, 8)}/${i + 1}.png`,
                  alt: `img_${i + 1}`,
                  id: `${item}`
                } : {
                  className: "btn btn-choose-part-img",
                  src: `character-part/${item}/${i + 1}.png`,
                  alt: `img_${i + 1}`,
                  id: `${item}`
                }
        }
        return setitemOfPart([...img])
      }
    })
  }
  const handleClickDelete = () => {
    setChooses(listOfPart.map((item, index) => ({ className: item, src: '', display: "none", key: index })));
    setSaveAvatar(Array(numblesOfPart.length).fill(null));
    setClickSave(true) // automatically randomize whenever the user visits
  }

  // if you don't save auto handleClickRandom()
  useEffect(() => {
    if (!window.localStorage.getItem("saveAvatar")) {
      handleClickRandom()
    } else if (window.localStorage.getItem("saveAvatar").length < 15) { // when you delete localStorage === 14 commas
      handleClickRandom()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // save  numbles avatar localStorage
  useEffect(() => {
    if (clickSave) {
      window.localStorage.setItem('saveAvatar', saveAvatar.toString())
    }
    setClickSave(false)
  }, [clickSave, saveAvatar])


  return (
    <div className="container">
      <Display chooses={chooses} handleClickGender={handleClickGender} handleClickRandom={handleClickRandom}
        setClickSave={setClickSave} handleClickDelete={handleClickDelete} />
      <List listOfPart={listOfPart} handleClickName={handleClickName} />
      <Item itemOfPart={itemOfPart} handleClickOption={handleClickOption} />
      <Animation />
    </div >
  );
}
