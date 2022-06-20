const variants = {
  primary:
    'bg-neutral-black border-transparent text-neutral-white hover:bg-transparent hover:text-neutral-black hover:border-neutral-black',
  secondary:
    'bg-transparent border-neutral-gray text-neutral-gray hover:border-neutral-black hover:text-neutral-black',
  tertiary:
    'bg-transparent border-none text-neutral-gray hover:text-neutral-black',
};

const Button = ({ children, variant = 'primary' }) => {
  const styles = variants[variant];

  return (
    <button
      className={`px-5 py-2.5 rounded-2xl border-2 font-medium transition ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
