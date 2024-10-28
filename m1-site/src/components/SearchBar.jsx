// src/components/SearchBar.jsx

const SearchBar = ({ onSearch }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Rechercher..."
                className="border rounded py-2 px-4 w-full"
            />
        </div>
    );
};

export default SearchBar;
