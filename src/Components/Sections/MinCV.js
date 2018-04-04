import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Parser from 'html-react-parser';


class MinCV extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.clear();
        // if (this.props.user.list.length == 0)
        this.props.fetchEstudies();
        this.props.fetchExperiences();
    }



    render() {


        const setEstudiesContent = (props, index) => {

            return (
                <article key={index}>

                    {/*<i className="icon-android"></i><h2>{props.title}</h2>*/}
                    <h3>{props.title}</h3>

                    {props.content.length > 0 ? props.content.map((item, index) => { return <li key={index}>{item} </li> }) : null}

                    {/*{props.img.length > 0 ? props.img.map((item, index) => { return <amp-img key={index} src={item} layout="fixed" width="266" height="150"></amp-img> }) : null}*/}
                </article>
            );

        }
        const setExperiences = (props, index) => {

            return (
                <div>

                    <h3>{props.position} <a target="_blank" href={props.link}>@{props.company}</a></h3>
                    <h4>{props.beginDate} - {props.endDate}</h4>


                    {props.content.length > 0 ? props.content.map((item, index) => { return <li key={index}>{Parser(item)} </li> }) : null}

                    {/*{props.img.length > 0 ? props.img.map((item, index) => { return <amp-img key={index} src={item} layout="fixed" width="266" height="150"></amp-img> }) : null}*/}
                </div>
            );

        }

        const props = this.props;


        return (
            <main>
                {/*<div className="content">{thisIsMyCopy}</div>*/}
                {/*<div className="content">{Parser(thisIsMyCopy)}</div>*/}
                <aside className="aside-left-container">
                    <div className="img-profile-container">
                        <amp-img src='https://firebasestorage.googleapis.com/v0/b/test-74eeb.appspot.com/o/images%2Ffoto-cv.jpg?alt=media&token=2909595b-f623-4b24-a019-a488cbb06b25' layout="responsive" width="100" height="100"></amp-img>
                        <img className="img-perfil" />
                        <div className="content-img">
                            <h1 className="name">Federico Croce</h1>
                            <p>Front-End Develop</p>
                        </div>
                    </div>
                </aside>
                <container className="main-right-section">
                    {/*<h1 className="name">Croce</h1>*/}
                    <section>
                        <h2>Estudios</h2>
                        {props.estudies.estudies.length > 0 ? props.estudies.estudies.map((item, index) => { return <article key={index}>{setEstudiesContent(item.details, index)}</article> }) : null}
                    </section>

                    {props.experiences.experiences.length > 0 ?
                        <section className="table">
                            <i className={props.experiences.generic.icon}></i>
                            <div className="container-detail">
                                <h2>{props.experiences.generic.title}</h2>
                                {props.experiences.experiences.map((item, index) => { return <article key={index}>{setExperiences(item.details, index)}</article> })}
                            </div>
                        </section>
                        : null}
                </container >
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        estudies: state.estudies,
        experiences: state.experiences
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEstudies() {
            React.actions.actionsEstudies.fetchObjects(dispatch)
        },
        fetchExperiences() {
            React.actions.actionsExperiences.fetchObjects(dispatch)
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MinCV));
