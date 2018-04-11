import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Parser from 'html-react-parser';
import classNames from 'classnames';


class MinCV extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            darkThem: this.props.darkThem
        };
    }

    componentDidMount() {
        // this.props.clear();
        // if (this.props.user.list.length == 0)
        this.props.fetchEstudies();
        this.props.fetchExperiences();
        this.props.fetchPersonalData();
        this.props.fetchFooter();
    }



    render() {


        const setContent = (props, index) => {

            return (
                <div key={index}>
                    <h3>{Parser(props.title)} {props.institution ? <a target="_blank" href={props.link}>@{Parser(props.institution)}</a> : null}</h3>
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
        const footer = props.footer;

        const content = [
            props.experiences,
            props.estudies

        ];

        const mainClass = classNames({
            'table': true,
            'dark-them': this.state.darkThem,
        });

        const setThem = () => {
            this.setState({ darkThem: !this.state.darkThem })
        }


        return (

            <div className="app-container">
                <main className={mainClass}>

                    {/*<div className="content">{thisIsMyCopy}</div>*/}
                    {/*<div className="content">{Parser(thisIsMyCopy)}</div>*/}
                    <aside className="aside-left-container">
                        <i className='icon-them icon-brightness_medium' onClick={() => setThem()}></i>



                        {Object.keys(personalData.mainData).length != 0 ?
                            <div className="img-profile-container">
                                <amp-img src={personalData.mainData.img} layout="responsive" width="100" height="100"></amp-img>
                                <div className="content-img">
                                    <h1 className="name">{personalData.mainData.name}</h1>
                                    <p>{personalData.mainData.position}</p>
                                </div>
                            </div>
                            : null}



                        {personalData.list.length > 0 ?
                            <section>
                                {personalData.list.map((data, index) => {
                                    return (
                                        <a href={data.link} key={index} className="container-detail-personal-data table">
                                            <i className={data.icon}></i>
                                            <div className="container-detail">
                                                <p>{Parser(data.content)}</p>
                                                <p>{Parser(data.subcontent)}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </section>
                            : null
                        }

                    </aside>
                    <section className="main-right-section">
                        <i className='icon-add' onClick={() => this.props.createExperiences()}></i>
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

                    </section >

                </main>
                <footer className="container-footer">
                    {footer.list.length > 0 ?
                        <section>
                            {footer.list.map((data, index) => {
                                return (
                                    <a target="_blank" href={data.link} key={index} className="img-tecnologies">
                                    <amp-img src={data.img} width="70" height="70"></amp-img>
                                    </a>
                                );
                            })}
                        </section>
                        : null
                    }
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        estudies: state.estudies,
        experiences: state.experiences,
        personalData: state.personalData,
        footer: state.footer,
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
        createExperiences() {
            React.actions.actionsExperiences.createAutoID()
        },
        fetchPersonalData() {
            React.actions.actionsPersonalData.fetchObjects(dispatch)
        },
        fetchFooter() {
            React.actions.actionsFooter.fetchObjects(dispatch)
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MinCV));
