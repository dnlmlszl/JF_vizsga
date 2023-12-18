export const Product = ({ id, title, description, category, thumbnail }) => {
  return (
    <article className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={thumbnail} alt={title} className="card-img-top" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>{' '}
          <span>{category}</span>
        </div>
        <div className="m-3">
          <a
            href={`/products/${id}`}
            className="btn"
            style={{ color: 'gray', marginLeft: '-1rem', letterSpacing: '2px' }}
          >
            More details...
          </a>
        </div>
      </div>
    </article>
  );
};
