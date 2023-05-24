const CardInfoCharacter: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...rest }) => {
  return (
    <section
      className={`h-48 bg-[#111111] border border-cardInfoCharacter rounded flex flex-col items-center justify-center ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default CardInfoCharacter;

