const Button = ({ text, classname }: IProps) => {
  return (
    <button type="button" className={classname}>
      {text}
    </button>
  );
};

type IProps = {
  text: string;
  classname?: string;
};

export { Button };
