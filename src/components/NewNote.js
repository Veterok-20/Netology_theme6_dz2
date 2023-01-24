import React from 'react';
import Arrow from './Arrow';

export default function NewNote(props) {
    const { onSubmit, form, onChange } = props;
    return (
        <div className='formandbutton'>
            <label>New note:</label>
            <form className='form' onSubmit={onSubmit}>
                <div>
                    <input className='inputfild' type="text" name="content" value={form.content} onChange={onChange}></input>
                </div>
                <button  type='submit' className="newnotebutton"><Arrow className='iconarrow'/></button>
            </form>
            

        </div>
    )
}  