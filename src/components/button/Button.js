export default function Button({ variant, size, disabled, type, outline, className, children }) {
  const renderClasses = () => {
    let classes = "btn btn-";
    classes += outline ? "outline-" + variant : variant;
    classes += size ? ` btn-${size}` : "";
    classes += disabled ? " disabled" : "";
    classes += className ? ` ${className}` : "";
    return classes;
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <button className={renderClasses()} disabled={disabled} type={type} role="button">
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
  outline: false,
  disabled: false,
  type: "button",
};
