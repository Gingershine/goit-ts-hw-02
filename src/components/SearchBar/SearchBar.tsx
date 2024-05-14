import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FC, FormEvent } from'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar:FC<SearchBarProps> = ({ onSearch }) => {
  
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    
    const form = evt.target as HTMLFormElement;
    const query = (form.elements.namedItem('imageName') as HTMLInputElement).value;
    
    
    if (query.trim() === '') {
toast.error('Please enter a valid image name');
      return;
    }
    onSearch(query);
    form.reset();
  }
  

  return (
    <div className={css.wraper}>
      <header>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
            name='imageName'
          />
          
          <button className={css.button} type="submit"  >Search</button>
          <div><Toaster/></div>
        </form>
      </header>
    </div>
  )
}

export default SearchBar