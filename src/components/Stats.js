export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <p>
          <em>You got everything! Ready to go ✈️</em>
        </p>
      ) : (
        <p>
          {numItems === 0
            ? "Start adding items to your packing list! 🧳"
            : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </p>
      )}
    </footer>
  );
}
