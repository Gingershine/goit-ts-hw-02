import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';


const SearchBar = ({ onSearch }) => {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    const form = evt.target;
    const query = form.elements.imageName.value;
    
    if (form.elements.imageName.value.trim() === '') {
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
            autoComplete="off"
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