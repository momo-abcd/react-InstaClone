import reducers from "./redux/reducers";

const Loading = (props) => {
    const divStyle={
        width:window.innerWidth,
        height:window.innerHeight,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }
    console.log(window.innerHeight);
    return (
        <div style={divStyle}>
            <img src='/images/loading.PNG' width="50px" height="50px" />
        </div>
    )
}

export default Loading;