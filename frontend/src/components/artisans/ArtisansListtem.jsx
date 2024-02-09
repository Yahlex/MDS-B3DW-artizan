import PropTypes from 'prop-types' 
import './ArtisansList.css' 

function ArtisansListItem({artisan}) {
    return (
        <div className='card' >
            <img src={'http://localhost:1337' + artisan.attributes.photo.data.attributes.url} alt={artisan.attributes.name} className='profile-picture'/>
            <h3>{artisan.attributes.name}</h3>
            <p>{artisan.attributes.description}</p>
            <a href={'/artisans/' + artisan.attributes.slug}>Voir plus de détails</a>
        </div>
    )
}

ArtisansListItem.propTypes = {
    artisan: PropTypes.object 
}

export default ArtisansListItem