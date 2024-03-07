import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ option, handleClick }) => {
  return (
    <div>
      {option.map(nameBtn => {
        return (
          <Button key={nameBtn} onClick={() => handleClick(nameBtn)}>
            {nameBtn}
          </Button>
        );
      })}
    </div>
  );
};
