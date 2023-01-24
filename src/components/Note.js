import React from 'react';
import XMark from './XMark';

export default function Note(props) {
    const { obj, onDelete } = props;
    return (
        <div className='noteandbutton'>           
            {obj.content}           
            <button className="notebutton" onClick={(e)=> onDelete(e, obj.id)}><XMark className="iconXMark"/></button>
        </div>
    )
} 




/* <div className='noteandbutton'>      
        consectetur adipiрлрлорлорлор щшоьждьджь павпаывпав олрлаопап 
        алварвоавар  рвларвлоар папопдлавал sicing elit.jhfdfhdfhefjh Atque, itaque! agfgafcffcf sghghsht!       
        <button className="notebutton"><XMark className="iconXMark"/></button>
        </div> */