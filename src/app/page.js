const HomePage = () => {
  return (
    <div>

      <input list="items" />
      <datalist id="items">
        <option value="one" />
        <option value="two" />
        <option value="three" />
        <option value="four" />
        <option value="five" />
      </datalist>
    </div>
  );
}

export default HomePage;