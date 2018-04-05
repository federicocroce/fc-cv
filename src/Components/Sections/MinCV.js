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
        this.props.fetchPersonalData();
    }



    render() {


        const setContent = (props, index) => {

            return (
                <div key={index}>
                    <h3>{props.title} {props.institution ? <a target="_blank" href={props.link}>@{props.institution}</a> : null}</h3>
                    <h4>{props.beginDate} - {props.endDate}</h4>

                    {props.content.length > 0 ? props.content.map((item, index) => { return <li key={index}>{Parser(item)} </li> }) : null}
                </div>
            );

        }
        // const setExperiences = (props, index) => {
        //     return (
        //         <div>
        //             <h3>{props.position} <a target="_blank" href={props.link}>@{props.company}</a></h3>
        //             {renderCommunContentDetail(props)}
        //         </div>
        //     );
        // }

        // const renderCommunContentDetail = props => {

        //     return (
        //         <div>
        //             <h4>{props.beginDate} - {props.endDate}</h4>

        //             {props.content.length > 0 ? props.content.map((item, index) => { return <li key={index}>{Parser(item)} </li> }) : null}
        //         </div>
        //     );
        // }

        const props = this.props;
        const personalData = props.personalData;

        const content = [
            props.experiences,
            props.estudies

        ];


        return (
            <main className="table">
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

                    {personalData.list.length > 0 ?
                        <section>
                            {personalData.list.map((data, index) => {
                                return (
                                    <article key={index} className="table">
                                        <i className={data.icon}></i>
                                        <div className="container-detail">
                                            <p>{data.content}</p>
                                            <p>{data.subcontent}</p>
                                        </div>
                                    </article>
                                );
                            })}
                        </section>
                        : null
                    }

                </aside>
                <section className="main-right-section">

                    {content.map((data, index) => {
                        return (
                            data.list.length > 0 ?
                                <section key={index} className="table">
                                    <i className={data.generic.icon}></i>
                                    <div className="container-detail">
                                        <h2>{data.generic.title}</h2>
                                        {data.list.map((item, index) => { return <article key={index}>{setContent(item.details, index)}</article> })}
                                    </div>
                                </section>
                                : null
                        );
                    })}

                    {/* {estudies.list.length > 0 ?
                        <section className="table">
                            <i className={estudies.generic.icon}></i>
                            <div className="container-detail">
                                <h2>{estudies.generic.title}</h2>
                                {estudies.list.map((item, index) => { return <article key={index}>{setEstudiesContent(item.details, index)}</article> })}
                            </div>
                        </section>
                        : null}

                    {experiences.list.length > 0 ?
                        <section className="table">
                            <i className={experiences.generic.icon}></i>
                            <div className="container-detail">
                                <h2>{experiences.generic.title}</h2>
                                {experiences.list.map((item, index) => { return <article key={index}>{setExperiences(item.details, index)}</article> })}
                            </div>
                        </section>
                        : null} */}
                </section >
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        estudies: state.estudies,
        experiences: state.experiences,
        personalData: state.personalData,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEstudies() {
            React.actions.actionsEstudies.fetchObjects(dispatch)
        },
        fetchExperiences() {
            React.actions.actionsExperiences.fetchObjects(dispatch)
        },
        fetchPersonalData() {
            React.actions.actionsPersonalData.fetchObjects(dispatch)
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MinCV));
