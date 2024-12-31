

function Toolbar() {
    
    return(
        <div className="App">
            <div id="toolbar">
                <button className="ql-bold"></button>
                <button className="ql-italic"></button>
                <button className="ql-underline"></button>
                <button className="ql-list" value="ordered"></button>
                <button className="ql-list" value="bullet"></button>
                <button className="ql-link"></button>
            </div>
        </div>
    );
}

export default Toolbar;