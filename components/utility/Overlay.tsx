type OutlineProps = {
  handleClose?: (e: React.MouseEvent<HTMLElement>) => void;
};

const Overlay = ({ handleClose }: OutlineProps) => {
  return (
    <div
      onClick={handleClose}
      className="overlay fixed inset-0 z-30 opacity-60 bg-black top-0 left-0 w-[100vw] h-[100vh]"
    ></div>
  );
};

export default Overlay;
