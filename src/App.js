import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Items from "./components/Items";
import AddItem from "./components/AddItem";
import DeleteChecked from "./components/DeleteChecked";
import DeleteList from "./components/DeleteList";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { resetIDs, sortArr } from "./components/helperFuncs";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || [{ name: "Todo", id: 1, items: [] }]);
  const [currentTab, setCurrentTab] = useState(parseInt(localStorage.getItem("tab")) || 0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("tab", currentTab);
  }, [data, currentTab])

  useEffect(() => {
    document.title = data[currentTab].name;
    document.getElementById("todo-search").value = "";
    document.body.classList = theme;
    setSearch("");
    localStorage.setItem("theme", theme);
  }, [currentTab, data, theme])

  const handleCheckClick = (id) => {
    const updatedItems = data[currentTab].items.map(item => id === item.id ? { ...item, checked: !item.checked } : item);
    const sorted = sortArr(updatedItems);
    var updatedData = data.map(list => list.id - 1 === currentTab ? { ...list, items: sorted } : list);
    setData(updatedData);
  }

  const handleDelete = (id) => {
    var updatedItems = data[currentTab].items.filter(item => item.id !== id);
    updatedItems = resetIDs(updatedItems);
    var updatedData = data.map(list => list.id - 1 === currentTab ? { ...list, items: updatedItems } : list);
    setData(updatedData);
  }

  const handleDeleteChecked = () => {
    var updatedItems = data[currentTab].items.filter(item => !item.checked);
    updatedItems = resetIDs(updatedItems);
    var updatedData = data.map(list => list.id - 1 === currentTab ? { ...list, items: updatedItems } : list);
    setData(updatedData);
  }

  const addNewItem = (val) => {
    const nextId = data[currentTab].items.length + 1;
    const newItem = { item: val, id: nextId, checked: false };
    const updatedItems = [...data[currentTab].items, newItem];
    const sorted = sortArr(updatedItems);
    var updatedData = [...data];
    updatedData[currentTab].items = sorted;
    setData(updatedData);
  }

  const date = new Date();

  return (
    <div className="App">

      <NavBar
        data={data}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setData={setData} />

      <main className="container">
        <div className="todo">

          <Heading
            currentTab={currentTab}
            setData={setData}
            data={data} />

          <Search
            setSearch={setSearch}
            currentTab={currentTab} />

          <Items
            items={data[currentTab].items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}
            handleCheckClick={handleCheckClick}
            handleDelete={handleDelete} />

          <AddItem
            addNewItem={addNewItem} />

        </div>

        <DeleteChecked
          handleDeleteChecked={handleDeleteChecked} />

        <DeleteList
          data={data}
          setData={setData}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab} />

      </main>

      <footer className="footer">
        {theme === "light" && <MdDarkMode className="theme-icon" onClick={() => setTheme("dark")} />}
        {theme === "dark" && <MdLightMode className="theme-icon" onClick={() => setTheme("light")} />}
        <a href="http://thomasflensted.com" target="_blank" rel="noopener noreferrer">{`Thomas Flensted ${date.getFullYear()}`}</a>
      </footer>

    </div>
  );
}

export default App;
