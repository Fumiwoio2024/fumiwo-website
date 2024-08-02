import { ReactNode } from "react";
import { H5, P } from "./Typography";

type TAccordion = {
  small?: boolean;
  name: string;
  selected: string;
  setSelected: (name: string) => void;
  headerTextComp?: ReactNode;
  children: ReactNode;
};

const Accordion = ({
  small,
  name,
  selected,
  headerTextComp,
  setSelected,
  children,
}: TAccordion) => {
  const selectedType = small ? "selected-small" : "selected";
  return (
    <section className="py-2">
      <div
        role="button"
        onClick={() => setSelected(name === selected ? "" : name)}
        className="flex h-16 items-center justify-between gap-4 py-3 pb-0"
      >
        {headerTextComp || (
          <H5 className="!text-lg font-semibold text-textHeader">{name}</H5>
        )}
        {selected === name ? (
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 1.09375L13.5938 7.15625C13.875 7.46875 13.875 7.9375 13.5938 8.21875L12.875 8.9375C12.5938 9.21875 12.125 9.21875 11.8125 8.9375L7 4.125L2.15625 8.9375C1.84375 9.21875 1.375 9.21875 1.09375 8.9375L0.375 8.21875C0.09375 7.9375 0.09375 7.46875 0.375 7.15625L6.46875 1.09375C6.75 0.8125 7.21875 0.8125 7.5 1.09375Z"
              fill="#1B3447"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.46875 8.9375L0.375 2.875C0.09375 2.5625 0.09375 2.09375 0.375 1.8125L1.09375 1.09375C1.375 0.8125 1.84375 0.8125 2.15625 1.09375L7 5.90625L11.8125 1.09375C12.125 0.8125 12.5938 0.8125 12.875 1.09375L13.5938 1.8125C13.875 2.09375 13.875 2.5625 13.5938 2.875L7.5 8.9375C7.21875 9.21875 6.75 9.21875 6.46875 8.9375Z"
              fill="#1B3447"
            />
          </svg>
        )}
      </div>

      <div className={`content ${selected === name ? selectedType : " "}`}>
        {children}
      </div>
    </section>
  );
};

export default Accordion;
