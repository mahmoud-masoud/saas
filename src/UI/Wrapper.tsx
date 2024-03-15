const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`mx-auto container ${className}`}>{children}</div>;
};
export default Wrapper;
