export interface PopularProps {
  isSelected?: {
    stream?: boolean;
    TV?: boolean;
    rent?: boolean;
    theaters?: boolean;
  };
  onClickStream?: () => void;
  onClickTV?: () => void;
  onClickRent?: () => void;
  onClickTheaters?: () => void;
  tvPopular: string[];
}

export interface PopularStyledProps {
  stream?: boolean;
  TV?: boolean;
  rent?: boolean;
  theaters?: boolean;
}
