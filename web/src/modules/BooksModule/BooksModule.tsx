import React, { useState } from 'react';
import { openaiService } from '../../../shared/services/openai.service';
import './BooksModule.css';

interface Book {
  id: string;
  title: string;
  genre: string;
  chapters: number;
  content: string;
  createdAt: string;
}

export const BooksModule: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Ficción');
  const [chapters, setChapters] = useState(5);
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const generateBook = async () => {
    setLoading(true);
    try {
      const content = await openaiService.generateBook(title, genre, chapters);
      setGeneratedContent(content);

      const newBook: Book = {
        id: Date.now().toString(),
        title,
        genre,
        chapters,
        content,
        createdAt: new Date().toISOString(),
      };
      setBooks([...books, newBook]);
      setTitle('');
    } catch (error) {
      console.error('Error generating book:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="module-container books-module">
      <h1>📚 Libros con IA</h1>
      <p>Genera libros completos con inteligencia artificial</p>

      <div className="generator-form">
        <input
          type="text"
          placeholder="Título del libro"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Ficción</option>
          <option>Ciencia Ficción</option>
          <option>Romance</option>
          <option>Misterio</option>
          <option>Educativo</option>
        </select>
        <input
          type="number"
          min="1"
          max="20"
          value={chapters}
          onChange={(e) => setChapters(parseInt(e.target.value))}
        />
        <button onClick={generateBook} disabled={loading || !title}>
          {loading ? '⏳ Generando...' : '✨ Generar Libro'}
        </button>
      </div>

      {generatedContent && (
        <div className="content-preview">
          <h2>Preview del contenido</h2>
          <div className="preview-text">{generatedContent.substring(0, 500)}...</div>
        </div>
      )}

      <div className="books-list">
        <h2>Mis Libros ({books.length})</h2>
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Género: {book.genre}</p>
            <p>Capítulos: {book.chapters}</p>
            <button>Leer</button>
          </div>
        ))}
      </div>
    </div>
  );
};
