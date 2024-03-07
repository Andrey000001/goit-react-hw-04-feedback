import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionTitle } from 'components/Section-Title/SectionTitle';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = button => {
    this.setState(prevState => ({
      [button]: prevState[button] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = (good / total) * 100 || 0;
    return positiveFeedback.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return (
      <Container>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            option={['good', 'neutral', 'bad']}
            handleClick={this.handleClick}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {!totalFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </SectionTitle>
      </Container>
    );
  }
}

export default App;
