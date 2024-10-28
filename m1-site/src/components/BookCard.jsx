// src/components/BookCard.jsx

const BookCard = ({ title, author }) => {
    return (
        <div className="border rounded-lg shadow-md m-2 p-4 bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">{author}</p>
        </div>
    );
};

export default BookCard;
