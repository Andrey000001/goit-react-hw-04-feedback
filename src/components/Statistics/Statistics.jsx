import { List, Total, Positive } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <Total>Total: {total}</Total>
        <Positive>Positeve feedback: {positivePercentage}%</Positive>
      </List>
    </div>
  );
};
