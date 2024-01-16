import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

import answers from '../mock-ups/answers';
import colorTheme from '../colorTheme';

interface IHeading {
  $fontColor: string;
}

interface AccordionDataState {
  question: string;
  correct_answer: string;
  is_answer_shown: boolean;
}

//TODO: dropdown component & search for the themes of the questions

const TriviaPage = (): JSX.Element => {
  const [dataForAccordion, setDataForAccordion] = useState<AccordionDataState[]>();

  useEffect(() => {
    const addedShowState = answers.results.map(answer => {
      const { question, correct_answer } = answer;

      const result = {
        question,
        correct_answer,
        is_answer_shown: false,
      };

      return result;
    });

    setDataForAccordion(addedShowState);
  }, []);

  const showOrHideAnswer = (entry: AccordionDataState) => {
    const result = dataForAccordion?.map(question => {
      return question.question === entry.question
        ? { ...question, is_answer_shown: !question.is_answer_shown }
        : question;
    });
    console.log('result: ', result);
    setDataForAccordion(result);
  };

  return (
    <Wrap>
      <Heading $fontColor={colorTheme.attention}>Let`s play a game</Heading>

      {dataForAccordion &&
        dataForAccordion.map(entry => (
          <QandAWrap key={entry.question}>
            <QuestionWrap onClick={() => showOrHideAnswer(entry)}>{entry.question}</QuestionWrap>
            {entry.is_answer_shown && <AnswerWrap>{entry.correct_answer}</AnswerWrap>}
          </QandAWrap>
        ))}

      {dataForAccordion === undefined && <div>No data to show</div>}
    </Wrap>
  );
};

export default TriviaPage;

const Wrap = styled.div``;

const Heading = styled.h1<IHeading>`
  color: ${props => props.$fontColor};
  margin-bottom: 48px;
`;

const QandAWrap = styled.div`
  width: 350px;

  border: 1px solid orange;
`;

const QuestionWrap = styled.div`
  width: 100%;
  //TODO: add hover state & styling

  border: 1px solid red;
`;

const AnswerWrap = styled.div`
  width: 100%;

  border: 1px solid limegreen;
`;
