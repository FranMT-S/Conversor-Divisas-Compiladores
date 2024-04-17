import Button from "../UI/Button";

type Props = {
  interchangeCurrencies: () => void;
};

function Divider({ interchangeCurrencies }: Props) {
  const onClickHandler = () => {
    interchangeCurrencies();
  };

  return (
    <Button
      variant="text"
      className="bg-[#32374A] rounded-lg"
      onClick={onClickHandler}
    >
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 4L21 7M21 7L18 10M21 7H7C4.79086 7 3 8.79086 3 11M6 20L3 17M3 17L6 14M3 17H17C19.2091 17 21 15.2091 21 13"
          stroke="#65CDC4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}

export default Divider;
