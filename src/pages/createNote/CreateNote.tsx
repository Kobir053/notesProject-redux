import React, { useState } from 'react';
import { addNote, Category, INote } from '../../store/features/notesSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

const CreateNote: React.FC = () => {

    const [title, setTitle] = useState<string | null>(null);
    const [content, setContent] = useState<string | null>(null);
    const [category, setCategory] = useState<Category | null>(null);

    const dispatch: AppDispatch = useDispatch();

    const createNote = () => {
        let newNote: INote = {
            title: title!,
            content: content!,
            category: category!,
            createdAt: new Date().toString()
        };
        dispatch(addNote({note: newNote}));
    }

  return (
    <div className='save-note'>
        <input type="text" onChange={(e: any) => setTitle(e.target.value)}/>
        <input type="text" onChange={(e: any) => setContent(e.target.value)}/>
        <select value={Category.PERSONAL} onChange={(e: any) => setCategory(e.target.value)}>
            <option value={Category.PERSONAL}>{Category.PERSONAL}</option>
            <option value={Category.SHOPPING}>{Category.SHOPPING}</option>
            <option value={Category.WORK}>{Category.WORK}</option>
        </select>
        <input type="date" />
        <button onClick={createNote}>Add Note</button>
    </div>
  )
}

export default CreateNote;