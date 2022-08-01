import React, {useState} from 'react'
import Modal from './Modal'


function Docs() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  return (
    <div className='docs-main'>
      <h1>Docs Clone</h1>

      <button className='add-docs' onClick={handleOpen}>
        Add a Document
      </button>

      <Modal
        open={open}
        setOpen= {setOpen}
      />

    </div>
  )
}

export default Docs
