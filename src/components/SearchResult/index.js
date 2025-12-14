import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const SearchResult = props => {
  const {statename, statecode} = props

  return (
    <Link to={`/state/${statecode}`} className="link-search">
      <li>
        <div className="search-result">
          <h1 className="search-result-heading font-face-gm">{statename}</h1>

          <button type="button" className="search-button">
            {statecode}
            <BiChevronRightSquare
              testid="searchResultChevronRightIcon"
              alt="line icon"
              className="icon-right"
            />
          </button>
        </div>
      </li>
    </Link>
  )
}

export default SearchResult
