import React from 'react';

const ContentContainerCard = props => {

    return (
        <div>
            <i className='icon-delete actions-item remove-icon' onClick={() => removeItem(props.id)}></i>
            <h3>{Parser(props.details.title)} {props.details.institution ? <a target="_blank" href={props.details.link}>@{Parser(props.details.institution)}</a> : null}</h3>
            <h4>{props.details.beginDate} - {props.details.endDate}</h4>

            {props.details.content.length > 0 ? props.details.content.map((item, index) => { return <li key={index}>{Parser(item)} </li> }) : null}
        </div>
    );
}

export default ContentContainerCard;