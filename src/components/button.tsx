import { cva, VariantProps } from "class-variance-authority";

const button = cva("rounded-md relative", {
  variants: {
    variant: {
      default: "bg-white shadow-button border-gray-400",
      primary: "bg-primary text-white",
      destructive: "bg-destructive text-white",
      monochrome: "bg-white text-text border-gray-400",
    },
    modifier: {
      outline:
        "bg-transparent border border-current shadow-[0_0_0_1px_currentColor]",
      plain: "shadow-none bg-transparent border-none px-2 py-1 text-sm",
    },
    size: {
      slim: "text-sm",
      medium: "text-sm",
      large: "text-base",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "bg-surfaceDisabled text-textDisabled",
    },
  },
  compoundVariants: [
    {
      modifier: ["outline", "plain"],
      variant: "destructive",
      className: "text-destructive",
    },
    {
      modifier: ["outline", "plain"],
      variant: "primary",
      className: "text-primary",
    },
    {
      modifier: ["outline"],
      size: "slim",
      className: "px-3 py-[3px]",
    },
    {
      modifier: undefined,
      size: "medium",
      className: "px-4 py-2",
    },
    {
      modifier: "outline",
      size: "medium",
      className: "px-4 py-2",
    },
    {
      modifier: undefined,
      size: "large",
      className: "px-6 py-3",
    },
    {
      modifier: "outline",
      size: "large",
      className: "px-6 py-3",
    },
    {
      disabled: true,
      variant: "default",
      className: "border-borderDisabled",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
});


function LoadingSVG() {
  return (
    <svg
      className="animate-spin"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
      ></path>
    </svg>
  );
}

interface ButtonProps extends VariantProps<typeof button> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({
  children,
  variant,
  modifier,
  size,
  fullWidth,
  disabled,
  loading,
}: ButtonProps) => {
  return (
    <button
      className={button({ variant, modifier, size, fullWidth, disabled })}
    >
      <span
        className={`leading-[1.25rem] ${ loading && 'text-transparent'}`}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-4">
          <LoadingSVG />
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  );
};
