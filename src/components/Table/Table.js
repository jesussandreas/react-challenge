import React from 'react';

import './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      week: this.props.data.sales[0].week,
    };
  }

  toggleDropdown = () => {
    document.querySelector('.dropdown').classList.toggle('show')
    document.querySelector('.dropdown-menu').classList.toggle('show')
  }

  hidePercentages = () => {
    const badges = document.querySelectorAll('.cbadge');
    badges.forEach(item => {
      item.classList.toggle('is-active');
    })
  }

  reverseArray = (event) => {
    this.setState({
      week: this.props.data.sales[0].week.reverse()
    })
  }

  sortArray = (event) => {
    this.setState({
      week: this.props.data.sales[0].week.sort((a, b) => a > b ? 1 : -1)
    })
  }

  filterArray = (event) => {
    this.setState({
      week: this.props.data.sales[0].week.find(arr => arr.total.total > 50.000)
    })
  }

  
  render() {
    // Get Weeks
    const weeks = this.state.week;
    console.log(this.props.data.sales[0].week.find(arr => arr.total.total > 50.000))

    return (
      <div className="ctable">

        <div className="ctable__head">
          <h4 className="ctable--title">Sales</h4>

          <div className="btn_group d-flex">
            <button onClick={this.hidePercentages} type="button" className="btn btn-dark">Percentages</button>

            <div className="dropdown">
              <button onClick={this.toggleDropdown} className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
                Sort By
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href onClick={ this.reverseArray }>Reverse</a>
                <a className="dropdown-item" href onClick={ this.sortArray }>Order ABC</a>
              {
                /* <a className="dropdown-item" href onClick={ this.filterArray }>Something else here</a> */
              }
              </div>
            </div>
          </div>

        </div>
  
        <div className="ctable__box">
          { /* header */}
          <div className="ctable__header">
            <h6>Monday</h6>
            <h6>Tuesday</h6>
            <h6>Wedneday</h6>
            <h6>Thursday</h6>
            <h6>Friday</h6>
            <h6>Saturday</h6>
            <h6>Sunday</h6>
            <h6>Total</h6>
          </div>
  
          <div className="ctable__body">
            {
              // Iterate Over Weeks
              weeks.map(week => {
                // create array of objects (each week)
                const weekArray = Object.keys(week).map(function (key) { return week[key]; });

                return (
                  <div className="ctable__body--cell">
                    {
                      weekArray.map(day => {
                        /*eslint-disable */
                        if (day.total) return;
                        /*eslint-enable */

                        return (
                          <div className="ctable__body--col">
                            {
                              day.map(brand => {
                                let finalItem = brand;
                                if (finalItem.brand === undefined) {
                                  return (
                                    <article>
                                      <h6 className="ctable__body--title"><span className="amount">{ finalItem.total }</span></h6>
                                      <span className="cbadge is-active">{ finalItem.percentages }</span>
                                    </article>
                                  )
                                } else {
                                  return (
                                    <article key={ finalItem.id }>
                                      <h6 className="ctable__body--title">{ finalItem.brand } - <span className="amount">{ finalItem.numbers }</span></h6>
                                      <span className="cbadge is-active">{ finalItem.percentages }</span>
                                    </article>
                                  )
                                }
                              })
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Table;