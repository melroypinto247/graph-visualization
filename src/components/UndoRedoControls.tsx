import React from 'react'

type PropType={
    futureLength:number,
    pastLength:number,
    handleUndo:()=>void,
    handleRedo:()=>void,
}

const UndoRedoControls:React.FC<PropType> = ({handleUndo,handleRedo,futureLength,pastLength}) => {
  return (
    <div className='btns-wrapper'>
      <button aria-labelledby='undo' tabIndex={1} disabled={!pastLength} onClick={handleUndo}>Undo</button>
      <button   aria-labelledby='redo' disabled={!futureLength} onClick={handleRedo}>Redo</button>
    </div>
  )
}

export default UndoRedoControls