import PropTypes from 'prop-types';
import './ArtisanHeader.css';

function ArtisanHeader ( { attributes } ) {

    const imgUrl = 'http://localhost:1337' + attributes.photo.data.attributes.url;  // This is the URL of the image


    return (
        <div className="header">
        <div className="card_artisan">
        <h1 className="card__title">{attributes.name}</h1>
          <div className="card__container">
            <div className="card__content">
              <p className="card__description">{attributes.description}</p>
            </div>
          </div>
        </div>
        <img src={imgUrl} alt={attributes.title} className="header__image" />
      </div>
    );

}

ArtisanHeader.propTypes = {
    attributes: PropTypes.object
};

export default ArtisanHeader;