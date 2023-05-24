const Container: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`px-4 sm:px-[3.875rem] w-full mx-auto ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;

