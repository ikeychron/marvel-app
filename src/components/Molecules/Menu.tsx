const smsWhatsapp =
  "https://api.whatsapp.com/send?phone=584121556808&text=Hola%20Carlos,%20estoy%20viendo%20tu%20proyecto%20de%20Marvel%20y%20me%20encantaría%20platicar%20contigo%20para%20contratarte";

const Menu = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div
      data-cy="menu"
      className="absolute z-10 right-4 top-20 flex flex-col text-sm bg-[#111111] rounded-lg shadow-md w-60"
    >
      <a
        href={smsWhatsapp}
        onClick={handleClose}
        target="_blank"
        className="text-golden-1 font-spiegel hover:text-golden-3 w-full py-3 px-4 text-left z-[11]"
      >
        No olvides mandar un mensaje para contratar a Carlos Barrios. 📱
      </a>
    </div>
  );
};

export default Menu;

