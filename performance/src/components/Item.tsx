import { memo } from 'react';

type ItemProps = {
  title: string;
  onAddToWishlist: (item: string) => void;
  countItemsWithOne: number;
};

function ItemComponent(props: ItemProps) {
  return (
    <li>
      {props.title} - {props.countItemsWithOne}
      <button onClick={() => props.onAddToWishlist(props.title)}>
        Add to wishlist
      </button>
    </li>
  );
}

export const Item = memo(ItemComponent);
