class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleVisbility(){
        return !visibility;
    }

    
    render(){
        return (
            <div>
                <h1>{}</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}
