import React from "react";
import { useState } from "react";
import "../style/ShoppingList.css";
import { Button } from "antd";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: "mango", bought: false },
    { id: 2, name: "potato", bought: false },
    { id: 3, name: "banana", bought: false },
    { id: 4, name: "pineapple", bought: false },
  ]);
  const [newItem, setNewItem] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, { id: Date.now(), name: newItem, bought: false }]);
    setNewItem("");
  };

  const toggleBought = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id, newName) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
    setEditingItem(null);
  };
  return (
    <>
      <div className="container">
        <div className="shopping-list">
          <h1>Shopping List</h1>
        </div>
        <div className="first-box">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new item"
          />
          <Button onClick={addItem} type="primary">
            Add
          </Button>
        </div>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={item.bought ? "bought" : ""}
            onClick={() => toggleBought(item.id)}
          >
            {editingItem === item.id ? (
              <input
                type="text"
                defaultValue={item.name}
                onBlur={(e) => editItem(item.id, e.target.value)}
                autoFocus
              />
            ) : (
              <>
                <span>{item.name}</span>
                <div className="button-group">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingItem(item.id);
                    }}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(item.id);
                    }}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
