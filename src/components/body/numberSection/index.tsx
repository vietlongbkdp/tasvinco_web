import { NumberData } from 'components/page/number-section/constant';
import { NumberStyles } from 'components/page/number-section';
import { ContentStyles, NumberMainStyles, StylesNumber } from './styled';

export const NumberMain = () => {
  return (
    <NumberMainStyles>
      <ContentStyles>Con số ấn tượng</ContentStyles>
      <StylesNumber>
        {NumberData.length &&
          NumberData.map((data) => (
            <NumberStyles content={data.content} number={data.number} isbolean={data.isbolean} key={data.id} />
          ))}
      </StylesNumber>
    </NumberMainStyles>
  );
};
