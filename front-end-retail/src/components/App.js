import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './login';
import Register from './register';
import Product from './product';

import {PrivateRoute} from './privateRoute'
class App extends Component {
  constructor(props){
    super(props);
    const { dispatch } = this.props;
  }
  render() {
    return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <BrowserRouter>
                            <div>
                               <PrivateRoute exact path="/" component={Product} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
    );
  }
}

export default App;