import classNames from 'classnames';

type ReviewEmptyProps = {
  title: string;
  className?: string;
  children?: JSX.Element;
}

function ReviewEmpty({title, className, children}: ReviewEmptyProps): JSX.Element {
  return (
    <section
      className={classNames(
        'empty-results',
        [className]
      )}
    >
      <div className="container">
        <div className="empty-results__wrapper">
          <h2 className="empty-results__title">
            {title}
          </h2>
          {children}
          <svg width="180" height="166" aria-hidden="true">
            <use xlinkHref="#icon-cake" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default ReviewEmpty;
