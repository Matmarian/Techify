import { ReactNode } from "react";

interface CardListProps {
  children: ReactNode;
  className?: string;
}

const CardList = ({ children, className = "" }: CardListProps) => {
  return (
    <div className={`grid gap-4 auto-rows-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${className}`}>
      {children}
    </div>
  );
};

export default CardList;
