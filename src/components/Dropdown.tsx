import { useEffect, useState } from 'react';
import styled from 'styled-components';

import categories from '../mock-ups/categories';

const Dropdown = () => {
  const [selectCategories, setSelectCategories] = useState<String[]>([]);
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  const [dropdownTriggerText, setDropdownTriggerText] = useState<String>('Please select category for the text');

  useEffect(() => {
    const result = Object.keys(categories);
    setSelectCategories(result);
  }, []);

  const interactWithDropdownTrigger = () => {
    setShowDropdownOptions(!showDropdownOptions);
    console.log('clicked dropdown');
  };

  const selectCategory = (category: String) => {
    setDropdownTriggerText(category);
    setShowDropdownOptions(false);

    //TODO: there should be a button, which onClick triggers an api call with the new category
    // and the change from the dropdown itself should not trigger any further action than a simple change in the UI like now
  };

  return (
    <Wrap>
      <DropdownWrapper>
        <DropdownTrigger onClick={() => interactWithDropdownTrigger()}>{dropdownTriggerText}</DropdownTrigger>

        <CategoriesWrapper>
          {showDropdownOptions &&
            selectCategories.length > 0 &&
            selectCategories.map(category => (
              <CategoryInner onClick={() => selectCategory(category)}>{category}</CategoryInner>
            ))}
        </CategoriesWrapper>
      </DropdownWrapper>
    </Wrap>
  );
};

export default Dropdown;

const Wrap = styled.div`
  margin-bottom: 36px;
  padding: 4px;
  padding-top: 12px;

  border: 1px solid #74a9b3;
  border-radius: 4px;
`;

const DropdownWrapper = styled.div``;

const DropdownTrigger = styled.div`
  cursor: pointer;

  //TODO: styling so it shows more clearly that it's clickable
`;

const CategoriesWrapper = styled.div`
  margin-top: 16px;
`;

const CategoryInner = styled.div`
  margin-bottom: 4px;
  padding: 4px;
  border: 1px solid lightgray;
  cursor: pointer;
  //TODO: styling so it shows more clearly that it's clickable
`;
