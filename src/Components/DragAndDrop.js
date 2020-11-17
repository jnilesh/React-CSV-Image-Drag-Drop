import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import { actionTypes } from "../ContextApi/reducer";
import { useStateValue } from "../ContextApi/StateProvider";
import "./DragAndDrop.css"

function DragAndDrop() {
  const [files, setFiles] = useState([])
  const [{ user }, dispatch] = useStateValue();

  const setImg = () => {

    
    dispatch({
      type: actionTypes.SET_IMAGES,
      images: files,
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            featured: 0,
          })
        )
      )
    },
  })

//   const myFunction = (index) => {
//     let newfiles = files;
    
//     console.log(newfiles);
//     console.log(index);
//     newfiles[index].featured = 1
//     // setFiles(newfiles)
//     console.log(newfiles);
// //      // Get the checkbox
// //   var checkBox = document.getElementById("myCheck");
// //   // Get the output text
// //   var text = document.getElementById("text");

// //   // If the checkbox is checked, display the output text
// //   if (checkBox.checked === true){
// //     text.style.display = "block";
    
// //   } else {
// //     text.style.display = "none";
// //   }
//   }

  const images = files.map((file,index) => (
    <div key={file.name}>
      <div>

        <p>{file.name}</p>
        <p>{file.preview}</p>
        <p>{file.featured}</p><br/>

        <label>Make it Featured </label>
        <input type="radio" value={index} required name="featured" id={index} 
        // onClick={(file) => {
        //     let newfiles = files;
    
        //     console.log(newfiles);
        //     console.log(index);
        //     newfiles[index].featured = 1
        //     setFiles(newfiles)
        //     console.log(files[index].featured);
        // }}
        ></input> <br/>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ))

  return (
    <div className="App">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="drag-drop-zone" > Drop Images here</p>
      </div>
      <form onSubmit={setImg}> 
      <div>{images}</div>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default DragAndDrop;
