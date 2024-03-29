import * as S from "../styles";

const index = ({setCurrentState, setLevel}) => {
  return (
    <S.Restart onClick={() => {
      setCurrentState('level');
      setLevel("");
    }}>
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.64784 5C2.78886 2.49297 5.31587 0.75 8.24998 0.75C12.254 0.75 15.5 3.99594 15.5 8C15.5 12.0041 12.254 15.25 8.24998 15.25C5.31587 15.25 2.78886 13.507 1.64784 11M6.24998 5.25008L1 5.25005L1.00001 0"
          stroke="#1F1F1F"
          strokeWidth="1.5"
        />
      </svg>
    </S.Restart>
  );
};

export default index;