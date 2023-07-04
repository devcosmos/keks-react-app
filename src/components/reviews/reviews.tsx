import Review from '../review/review';

function Reviews(): JSX.Element {
  return (
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper">
          <Review />
          <Review />
        </div>
        <div className="comments__show-more">
          <button className="btn btn--second comments__button" type="button">Показать еще</button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
