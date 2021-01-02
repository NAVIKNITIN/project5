import React, { Component } from 'react';
class Search extends Component{
    constructor(){
        super();
        this.state={
            searchvideo:''
        }
    };
    submit=(e)=>{ 
        e.preventDefault();
        this.props.inputdata(this.state.searchvideo);
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={this.submit}>
                                <div className="form-group">
                                    <input type="search" placeholder="enter to search"
                                    className="form-control" 
                                    name='searchvideo' value={this.state.searchvideo}
                                    onChange={(e)=>this.setState({searchvideo:e.target.value})}
                                    >

                                    </input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};
export default Search;
