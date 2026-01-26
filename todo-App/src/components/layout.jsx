import SearchBar from "./Searchbar";
import Content from "./Content";
export default function Layout() {
  return (
    <>
      <div className="layout-container">
        <SearchBar text="ADD" color="blue" />
      </div>
      <div>
        <Content text="Delete" color="red"></Content>
      </div>
    </>
  );
}
