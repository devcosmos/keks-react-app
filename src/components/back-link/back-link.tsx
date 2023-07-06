import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';

function BackLink(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="back-link">
      <div className="container">
        <Link className="back-link__link" to={AppRoute.Main} onClick={() => navigate(-1)}>
          Назад
          <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
            <use xlinkHref="#icon-arrow-left" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BackLink;
