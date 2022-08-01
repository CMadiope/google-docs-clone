import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

function Docs({ database }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("");
  const collectionRef = collection(database, "docsData");
  const
  const addData = () => {
    addDoc(collectionRef, {
      title: title,
      docsDesc: "",
    })
      .then(() => {
        alert("Data Added");
        handleClose();
      })
      .catch(() => {
        alert("Cannot add data");
      });
  };

  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      console.log(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  const isMounted = useRef();

  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    isMounted.current = true;
    getData();
  }, []);

  return (
    <div className='docs-main'>
      <h1>Docs Clone</h1>

      <button className='add-docs' onClick={handleOpen}>
        Add a Document
      </button>

      <Modal
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        addData={addData}
      />
    </div>
  );
}

export default Docs;
