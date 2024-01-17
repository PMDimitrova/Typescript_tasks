import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

import colorTheme from '../colorTheme';

type Heading = {
  $fontColor: string;
};

type EntryWrap = {
  $borderColor: string;
};

//TODO: in separate file I should implement encapsulated logic for storing the data from this list in local storage

const ToLearnPage = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [listOfEntries, setListOfEntries] = useState<String[]>([]);

  useEffect(() => {
    listOfEntries.length && localStorage.setItem('inputEntries', JSON.stringify(listOfEntries));
  }, [listOfEntries]);

  useEffect(() => {
    const entriesInLocalStorage = JSON.parse(localStorage.getItem('inputEntries') || '');
    entriesInLocalStorage.length && setListOfEntries([...entriesInLocalStorage]);
  }, []);

  const addToList = () => {
    setListOfEntries([...listOfEntries, inputValue]);
  };

  const onInputChange = (inputValue: string) => {
    setInputValue(inputValue);

    //TODO: add key event "enter" so that the user can submit with enter, when he's typing into the input
  };

  const editEntry = (index: number) => {
    //TODO: logic to add the item in te input field again and then edit it there OR change the div into input ?
  };

  const deleteEntry = (index: number) => {
    const newEntries = listOfEntries.filter((entry, i) => i !== index);

    setListOfEntries(newEntries);
    localStorage.setItem('inputEntries', JSON.stringify(newEntries));
  };

  return (
    <Wrap $fontColor={colorTheme.textDark}>
      <h1>Things I need to learn more about:</h1>

      <div>
        <input
          type="text"
          id="add-thing"
          name="add-thing"
          placeholder="Add topic"
          onChange={ev => onInputChange(ev.target.value)}
        />
        <button name="Add" onClick={() => addToList()}>
          Add
        </button>
      </div>

      <div>
        {listOfEntries.length > 0 &&
          listOfEntries.map((item, index) => (
            <EntryWrap $borderColor={colorTheme.attentionSecondary} key={index}>
              <div>
                {index + 1}. {item}
              </div>

              <div>
                <button name="Edit" onClick={() => editEntry(index)}>
                  Edit
                </button>

                <button name="Delete" onClick={() => deleteEntry(index)}>
                  Delete
                </button>
              </div>
            </EntryWrap>
          ))}
      </div>
    </Wrap>
  );
};

export default ToLearnPage;

const Wrap = styled.div<Heading>`
  color: ${props => props.$fontColor};
`;

const EntryWrap = styled.div<EntryWrap>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 400px;
  margin-bottom: 12px;
  padding: 4px;
  border: 1px solid ${props => props.$borderColor};
`;
