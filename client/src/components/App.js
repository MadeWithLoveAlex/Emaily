import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { fetchUserAsync } from '../reducers/authSlice'

import Header from './Header'
import {Landing} from './Landing'
import 'materialize-css/dist/css/materialize.min.css'

const Dashboard = () => (<h2>Dashboard</h2>)
const SurveyNew = () => (<h2>SurveyNew</h2>)

class App extends Component {

    componentDidMount() {
        this.props.fetchUserAsync()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className='container'>
                        <Header />
                        <Route exact path='/' component={Landing}></Route>
                        <Route exact path='/surveys' component={Dashboard}></Route>
                        <Route path='/surveys/new' component={SurveyNew}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

const mapDispatchToProps = { fetchUserAsync }

export default connect(mapStateToProps, mapDispatchToProps)(App)