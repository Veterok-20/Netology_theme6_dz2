import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Note from './components/Note';
import { nanoid } from 'nanoid';
import NewNote from './components/NewNote';
import Rotate from './components/Rotate';


function App() {
  const [form, SetForm] = useState({
    content: '',
  });

  const [data, SetData] = useState({
    loading: true,
    notes: [{
      id: '',
      content: '',
      key: ''
    }]
  })

  const url = 'http://localhost:7777/notes';
  let id = 0;
  // var notes = [];

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return SetForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    id = id + 1;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        content: form.content,
        id: id,
        key: nanoid(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    SetForm({
      content: ''
    })
  }

  function handleDelete(e, id) {
    let deleteurl = url + '/' + id;
    fetch(deleteurl, {
      method: "DELETE",
    })
  }

  function handleUpdate() {
    SetData((prevData) => {
      return {
        loading: true,
        notes: prevData.notes
      }
    })
  }

  useEffect(() => {
    LoadData();
  })

  const LoadData = () => {
    setTimeout(() => {
      fetch(url).then(response => response.json())
        .then((data) => {
          SetData({
            loading: false,
            notes: JSON.parse(JSON.stringify(data)),
          })
        })
    }, 1000)
  }

  return (
    <div className='main'>
      <div>
        <h2>Notes
          <button className="updatebutton" onClick={handleUpdate}><Rotate className="iconRotate" /></button>
        </h2>
      </div>
      <div className='notecontainer'>
        {(data.loading) ? (<div>Loading...</div>) : (
          data.notes.map((obj) => {
            if (obj.content !== '') {
              return (
                <Note key={obj.key} onDelete={handleDelete} obj={obj} />
              )
            }
          }))
        }
      </div>
      <NewNote form={form} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}



export default App;
