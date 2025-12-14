import {useState} from 'react'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import IndianState from '../IndianState'
import './index.css'

const AllStatesCases = props => {
  const {covidData, statesList} = props

  const initialStatesData = statesList.map(eachState => ({
    stateName: eachState.state_name,
    stateCode: eachState.state_code,
    confirmed: covidData[eachState.state_code]?.total?.confirmed || 0,
    recovered: covidData[eachState.state_code]?.total?.recovered || 0,
    deceased: covidData[eachState.state_code]?.total?.deceased || 0,
    other: covidData[eachState.state_code]?.total?.other || 0,
    population: covidData[eachState.state_code]?.meta?.population || 0,
  }))

  const [statesinfo, setStatesInfo] = useState(initialStatesData)

  const whenAscendingSortButtonClicked = () => {
    const sortedList = [...statesinfo].sort((a, b) =>
      a.stateName.localeCompare(b.stateName),
    )
    setStatesInfo(sortedList)
  }

  const whenDescendingSortButtonClicked = () => {
    const sortedList = [...statesinfo].sort((a, b) =>
      b.stateName.localeCompare(a.stateName),
    )
    setStatesInfo(sortedList)
  }

  return (
    <div className="stats-table" testid="stateWiseCovidDataTable">
      <div className="table-header">
        <div className="states-name-column">
          <p className="table-header-title">States/UT</p>
          <div className="icons-container">
            <button
              className="order"
              type="button"
              testid="ascendingSort"
              onClick={whenAscendingSortButtonClicked}
            >
              <FcGenericSortingAsc className="order-icon" />
            </button>
            <button
              className="order"
              type="button"
              testid="descendingSort"
              onClick={whenDescendingSortButtonClicked}
            >
              <FcGenericSortingDesc className="order-icon" />
            </button>
          </div>
        </div>
        <div className="table-column">
          <p className="table-header-title">Confirmed</p>
        </div>
        <div className="table-column">
          <p className="table-header-title">Active</p>
        </div>
        <div className="table-column">
          <p className="table-header-title">Recovered</p>
        </div>
        <div className="table-column">
          <p className="table-header-title">Deceased</p>
        </div>
        <div className="table-column">
          <p className="table-header-title">Population</p>
        </div>
      </div>
      <hr className="line" />
      <ul className="state-stats-container">
        {statesinfo.map(state => (
          <IndianState key={state.stateCode} state={state} />
        ))}
      </ul>
    </div>
  )
}

export default AllStatesCases
