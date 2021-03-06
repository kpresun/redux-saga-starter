import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios'; no longer needed axios rempved and replaced with dispatch, axios on index.js now

function App() {
  const dispatch = useDispatch();
  const reduxState = useSelector(reduxState => reduxState)
  const [newElement, setNewElement] = useState('');


  const handleChange = (event) => {
    setNewElement(event.target.value);
  }

  const getElements = () => {
    dispatch({
      type: 'FETCH_ELEMENTS'
    })
    // axios.get('/api/element').then(response => {
    //   dispatch({ type: 'SET_ELEMENTS', payload: response.data });
    // })
    //   .catch(error => {
    //     console.log('error with element get request', error);
    //   });
  }

  useEffect(() => {
    getElements();
  }, []);

  const handleClick = () => {

    // axios.post('/api/element', {newElement}).then(() => {
    //   dispatch({ type: 'FETCH_ELEMENT'})
    //   // getElements(); no longer needed here
    //   setNewElement('');
    // })
    //   .catch(error => {
    //     console.log('error with element get request', error);
    //   });
    dispatch({
      type: 'ADD_ELEMENT',
      payload: newElement
    });
    setNewElement('');
  }


  return (
    <div>
      <button onClick={() => dispatch({ type: 'BUTTON_ONE' })}>Button One</button>
      <button onClick={() => dispatch({ type: 'BUTTON_TWO' })}>Button Two</button>
      <input value={newElement} onChange={handleChange} />
      <button onClick={handleClick}>Add Element</button>
      <pre>{JSON.stringify(reduxState)}</pre>
    </div>
  );
}


export default App;
