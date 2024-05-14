import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({onClick}) => {
  return (
      <div className={css.wraper}>
          <button onClick={onClick} className={css.button}>
              Load More
          </button>
    </div>
  )
}

export default LoadMoreBtn