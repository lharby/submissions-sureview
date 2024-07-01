type MainProps = {
    title: string
  };

const Main: React.FC<MainProps> = (props) => {
    return (
        <p>{props.title}</p>
    );
};

export { Main };