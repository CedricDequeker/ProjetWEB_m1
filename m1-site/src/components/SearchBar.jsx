// src/components/SearchBar.jsx

const SearchBar = ({ value,onSearch }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Rechercher..."
                className="border rounded py-2 px-4 w-full"
            />
        </div>
    );
};

export default SearchBar;