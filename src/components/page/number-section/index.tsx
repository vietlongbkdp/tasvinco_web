import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from 'react-intersection-observer';
import { ContentStyles, IconStyles, MainStyles, StylesNumber } from './styled';

export const NumberStyles = ({ content, number, isbolean }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1.0,
  });

  const calculateInterval = (number) => {
    if (number < 1000) return 30;
    if (number < 5000) return 10;
    return 1;
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (inView && count < number) {
      setHasStarted(true);
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < number) {
            return prevCount + 1;
          }
          clearInterval(interval);
          return prevCount;
        });
      }, calculateInterval(number));

      return () => clearInterval(interval);
    }
  }, [inView, count, number]);

  return (
    <MainStyles ref={ref}>
      <ContentStyles>{content}</ContentStyles>
      {hasStarted && (
        <StylesNumber>
          {count.toLocaleString()}
          {isbolean && <IconStyles />}
        </StylesNumber>
      )}
    </MainStyles>
  );
};
