import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionTitle } from 'components/Section-Title/SectionTitle';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = button => {
    switch (button) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = totalFeedback();
    const positiveFeedback = (good / total) * 100 || 0;
    return positiveFeedback.toFixed(0);
  };
  return (
    <Container>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          option={['good', 'neutral', 'bad']}
          handleClick={handleClick}
        />
      </SectionTitle>

      {totalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <SectionTitle title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </SectionTitle>
      )}
    </Container>
  );
}
