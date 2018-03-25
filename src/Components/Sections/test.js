import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class testSection extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.clear();
        // if (this.props.user.list.length == 0)
            this.props.fetchObjects();
    }



    render() {

        const props = this.props;

        return (
            <div>
                <h3> TEST</h3>
                <h4>{props.state.collection.age} </h4>
                <h4>{props.state.collection.name} </h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.test
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchObjects() {
            React.actions.actionsTest.fetchObjects(dispatch)
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(testSection));
