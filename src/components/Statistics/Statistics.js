import propTypes from 'prop-types';
import { BlockStatistis } from "./Statistic.styled";
import { Item } from "./Statistic.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <BlockStatistis>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>

      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positivePercentage}%</Item>
    </BlockStatistis>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.string
}