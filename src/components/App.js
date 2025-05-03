import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;

  function handleAddItems(item) {
    setItems((items) => [...items, item]); // add the new item to the list of items
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); // remove the item with the given id from the list of items
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list? This action cannot be undone."
    );
    if (!confirmed) return;
    setItems([]); // clear the list of items
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
