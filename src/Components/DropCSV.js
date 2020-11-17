import React from "react";
import { parse } from "papaparse";
import './DropCSV.css';
import { useStateValue } from "../ContextApi/StateProvider";
import { actionTypes } from "../ContextApi/reducer";

function DropCSV({toStep3}) {
    
    const [{ user }, dispatch] = useStateValue();

    return (
        <div>
      <h1 className="text-center text-4xl">Drop The CSV for Details</h1>
      <div 
        className="drag-drop-zone"
        onDragEnter={() => {
            console.log("enter");
          }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={ async (e) => {
            
          e.preventDefault();
          console.log("file dropped");
          console.log(e.dataTransfer.files[0]);
          Array.from(e.dataTransfer.files)
            .filter(async (file) => {
            //     const text = await file.text();
            //   const result = parse(text, { header: true });
            //   console.log(result);
                console.log("filtr");
                return file.type === "text/csv"})
            .forEach(async (file) => {
                console.log("file check");
              const text = await file.text();
              const result = parse(text, { header: true });
              console.log(result.data[0].address);
              dispatch({
                type: actionTypes.SET_ADDRESS,
                address: result.data[0].address,
              },
              {
                type: actionTypes.SET_BEDROOM,
                bedroom: result.data[0].bedroom,
              },
              {
                type: actionTypes.SET_BATHROOM,
                bathroom: result.data[0].bathroom,
              },
              {
                type: actionTypes.SET_DESCRIPTION,
                description: result.data[0].description,
              });

              toStep3();
            });


        }}
      >
        DROP CSV HERE
      </div>

    </div>
    )
}

export default DropCSV
