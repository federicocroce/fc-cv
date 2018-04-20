import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Parser from 'html-react-parser';
import classNames from 'classnames';


class MinCV extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            darkThem: this.props.darkThem,
            activeActions: false
        };
    }

    componentDidMount() {

        this.props.onAuthStateChanged();

        this.props.fetchEstudies();
        this.props.fetchExperiences();
        this.props.fetchPersonalData();
        this.props.fetchFooter();
    }



    render() {


        const setContent = (props, removeItem) => {

            return (
                <div>
                    <i className='icon-delete actions-item remove-icon' onClick={() => removeItem(props.id)}></i>
                    <h3>{Parser(props.details.title)} {props.details.institution ? <a target="_blank" href={props.details.link}>@{Parser(props.details.institution)}</a> : null}</h3>
                    <h4>{props.details.beginDate} - {props.details.endDate}</h4>

                    {props.details.content.length > 0 ? props.details.content.map((item, index) => { return <li key={index}>{Parser(item)} </li> }) : null}
                </div>
            );
        }

        const toogleAuth = (user) => {
            if (user.loginState) {
                props.signOut();
            }
            else {
                props.hadleAuth();
            }

        }

        const toogleManu = (user) => {
            // if (user.loginState) {
            //     props.signOut();
            // }
            // else {
            //     props.hadleAuth();
            // }

        }

        const props = this.props;
        const personalData = props.personalData;
        const footer = props.footer;

        props.experiences.createItem = this.props.createExperiences;
        props.experiences.removeItem = this.props.removeExperiences;

        props.estudies.createItem = this.props.createEstudies;
        props.estudies.removeItem = this.props.removeEstudies;


        // props.experiences.createItem = () => console.log('Exp');
        // props.estudies.createItem = () => console.log('Est');

        const content = [
            props.experiences,
            props.estudies

        ];

        const mainClass = classNames({
            'table': true,
            'dark-them': this.state.darkThem,
        });

        // const loginClass = classNames({
        //     'icon-lock_open': this.props.login.loginState == false,
        //     'icon-lock_outline': this.props.login.loginState == true,
        // });
        const loginClass = classNames({ 'icon-lock_open': true }, { 'icon-lock_outline': this.props.login.loginState });

        const setThem = () => {
            this.setState({ darkThem: !this.state.darkThem })
        }

        const setMessages = (messages) => {
            return (
                <div className='message-content'>
                    {messages.map((data, index) => {
                        return (
                            <div className={data.type} key={index}>
                                <span>{Parser(data.text)}</span>
                            </div>
                        );
                    })}
                </div>
            );
        };

        return (

            <div className="app-container">

                {setMessages(props.messages.list)}
{/*
                {props.loading.isLoading ? <div className="loading loader ">
                    <div class="loader-inner">
                        <div class="spinner"></div>
                        <div class="blue static"></div>
                        <div class="white active"></div>
                    </div>
                </div> : null}*/}
                <div className="loading loader ">
                    <div className="loader-inner">
                        <div className="spinner"></div>
                        <div className="blue static"></div>
                        <div className="white active"></div>
                    </div>
                </div>

                <header>
                    <div className={classNames({ "container-actions": true }, { 'active': this.state.activeActions })}>
                        <i className='icon-chat' onClick={() => props.setToast('Fede')}></i>
                        <i className='icon-brightness_medium' onClick={() => setThem()}></i>
                        <i className="icon-print" onClick={() => window.print()}></i>
                        <i className={loginClass} onClick={() => toogleAuth(props.login)}></i>
                    </div>
                    <i className='icon-menu' onClick={() => this.setState({ activeActions: !this.state.activeActions })}></i>
                    {/*{JSON.stringify(props.login.user) != '{}' ? <i className={loginClass} onClick={() => toogleAuth(props.login)}></i> : null}*/}
                </header>

                <main className={mainClass}>
                    {/*<div className="content">{thisIsMyCopy}</div>*/}
                    {/*<div className="content">{Parser(thisIsMyCopy)}</div>*/}
                    <aside className="aside-left-container">

                        {/* {JSON.stringify(props.login.user) != '{}' 
                        ? <div>
                        <p> {props.login.user.displayName}</p>
                        <p>Estad: {props.login.loginState}</p> </div> : null} */}

                        {Object.keys(personalData.mainData).length != 0 ?
                            <div className="img-profile-container">
                                {/*<img src={personalData.mainData.img}></img>*/}
                                <amp-img src={personalData.mainData.img} layout="responsive" width={personalData.mainData.width} height={personalData.mainData.height}></amp-img>
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
                                                <span className='text'>{Parser(data.content)}</span>
                                                <span className='text'>{Parser(data.subcontent)}</span>
                                            </div>
                                        </a>
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

                                        <i className='icon-playlist_add actions-item add-icon' onClick={() => data.createItem()}></i>

                                        <div className="container-detail">
                                            <h2>{data.generic.title}</h2>
                                            {data.list.map((item, index) => { return <article key={index}>{setContent(item, data.removeItem, props.login.loginState)}</article> })}
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
                                        <img src={data.img} width="40" height="40"></img>
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
        login: state.login,
        messages: state.messages,
        loading: state.loading,
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
            React.actions.actionsExperiences.createAutoID(dispatch)
        },
        removeExperiences(id) {
            React.actions.actionsExperiences.removeItem(dispatch, id)
        },
        fetchPersonalData() {
            React.actions.actionsPersonalData.fetchObjects(dispatch)
        },
        createEstudies() {
            React.actions.actionsEstudies.createAutoID(dispatch)
        },
        removeEstudies(id) {
            React.actions.actionsEstudies.removeItem(dispatch, id)
        },
        fetchFooter() {
            React.actions.actionsFooter.fetchObjects(dispatch)
        },
        hadleAuth() {
            React.actions.actionsLogin.hadleAuth(dispatch)
        },
        onAuthStateChanged() {
            React.actions.actionsLogin.onAuthStateChanged(dispatch)
        },
        signOut() {
            React.actions.actionsLogin.signOut(dispatch)
        },
        setToast(text) {
            React.actions.actionsToast.setToast(dispatch, text)
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MinCV));
