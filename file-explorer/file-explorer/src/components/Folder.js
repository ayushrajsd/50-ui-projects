import { useState } from "react";
const Folder = ({ explorer }) => {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState(explorer.items);

  const handleFolderClick = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleCreateFile = (e) => {
    e.stopPropagation();
    const newFile = {
      id: "112",
      name: "",
      isFolder: false,
      items: [],
    };
    setItems([newFile, ...items]);
  };
  if (explorer.isFolder) {
    console.log(items);
    return (
      <div
        onClick={(event) => handleFolderClick(event)}
        style={{ cursor: "pointer" }}
        className="folder"
      >
        <div className="folder__items">
          <span className="name">🗂{explorer.name}</span>
          <div>
            <button className="btn" onClick={(e) => handleCreateFile(e)}>
              Create File
            </button>
            <button className="btn">Create Folder</button>
          </div>
        </div>
        <div
          style={{ display: expanded ? "block" : "none", paddingLeft: "25px" }}
        >
          {explorer.items.map((item) => (
            <Folder explorer={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="file">📄{explorer.name}asd</div>;
  }
};

export default Folder;
