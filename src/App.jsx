
import React,{Component} from "react";
import axios from 'axios';
import Search from './component/search';
import Lists from './component/list';
import Videoplayer from './component/videoplayer';

class App extends Component{
    constructor(){
        super();
        this.state={
            videos:[],
            selectedvideo:'' 
        }
    }

    componentDidMount(){
        this.fetchdata("");
    }


    fetchdata = async(data) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search" , {
            params:{
                q:data,
                part:'snippet',
                type:'video',
                maxResults:15,
                key:'AIzaSyC8T_6Dr5YQs4gOZA-DpQU9M_TgSC3Jzio'
            }
        });

        this.setState({videos : response.data.items})
        this.setState({selectedvideo : response.data.items[0]})



    };
    selectedvideodata = (data)=>{
        this.setState({selectedvideo:data})
        console.log(data);
        
    }
 

    render(){
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                   <Search inputdata={this.fetchdata}/>
                   
                </div>
            </div>
            <div className="row">
                    <div className="col-md-8">
                      <Videoplayer player={this.state.selectedvideo}/>
                    </div>
                    <div className="col-md-4" >
                        <h3>Video List</h3>

                        <Lists videolist = {this.state.videos} videoData={this.selectedvideodata}/>
                    </div>
            </div>
        </div>)}
};




export default App;
