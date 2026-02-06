import Item from './item';
import items from './items.json';

export default function ItemList() {
    const categories = [
    "bakery",
    "canned goods",
    "dairy",
    "dry goods",
    "produce",
    "meat",
    "household",
  ];

    return (
          <div className="space-y-8">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-xl font-semibold capitalize mb-3 text-white">
            {category}
          </h2>

          <ul className="space-y-2">
            {items.filter((item) => item.category === category)
              .map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
          </ul>
        </div>
      ))}
    </div>
    );
}