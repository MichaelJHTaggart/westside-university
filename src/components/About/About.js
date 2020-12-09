import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History} />
            <Route path='/about/contact' component={Contact} />
            <Route exact path='/about' render={() => (
              <div>
                <h1> About the University </h1>
                <p>
                  The cat was chasing the mouse purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow , or scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in but hit you unexpectedly find empty spot in cupboard and sleep all day for catty ipsum and lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Mesmerizing birds. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good go into a room to decide you didn't want to be in there anyway and trip on catnip kick up litter for ooooh feather moving feather!. Sun bathe when owners are asleep, cry for no apparent reason, so groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked yet look at dog hiiiiiisssss for fall asleep on the washing machine naughty running cat, so stretch out on bed. Sit on human.

              </p>
              </div>
            )} />
          </Switch>

        </div>
      </div>
    )
  }
}