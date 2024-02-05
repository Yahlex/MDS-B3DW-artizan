import PropTypes from 'prop-types'
import ArtisansListItem from './ArtisansListtem'
import './ArtisansList.css'


function ArtisansList ({artisans = []}) {
    if (!artisans || artisans.length < 1) {
        return "No artisans found"
    }
     return (
        <>
        <div className='title'>
        <h2>Listes des Artisans de l'univers de One Piece</h2>
        </div>
        <div style={{ display: 'flex'}} className='list'>

        {
        artisans.map(artisan => (
            <ArtisansListItem key={artisan.id} artisan={artisan} />
        ))
        }
         </div>   
        </>
    )
}

ArtisansList.propTypes = {
    artisans: PropTypes.arrayOf(PropTypes.object)
}
export default ArtisansList;