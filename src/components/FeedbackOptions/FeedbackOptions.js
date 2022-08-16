import PropTypes from 'prop-types';
import { Feedbackbar } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Feedbackbar>
      {options.map(option => (
        <li key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>
      ))}
    </Feedbackbar>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
