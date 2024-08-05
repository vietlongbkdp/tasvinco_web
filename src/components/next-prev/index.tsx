export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'none',
        right: '10px',
        zIndex: 1,
        width: '50px',
        height: '50px',
      }}
      onClick={onClick}
    />
  );
};

export const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'none',
        left: '-65px',
        zIndex: 1,
        width: '50px',
        height: '50px',
      }}
      onClick={onClick}
    />
  );
};
