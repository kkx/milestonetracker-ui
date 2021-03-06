/**
 * Component for a campaign to be shown in a list of campaigns
 *
 * Expects following properties:
 */

import React from "react";
//
import { Table } from "react-bootstrap";
import moment from "moment";

export default function Milestone(props) {
    const dn = moment.unix(props.minCompletionDate);
    const dm = moment.unix(props.maxCompletionDate);
    const rt = moment.duration(props.reviewTime, "s");

    function format(duration) {
        let formatedDuration = "";
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        if (days) {
            const d = days > 1 ? "days" : "day";
            formatedDuration += `${ days } ${ d }`;
        }

        if (hours) {
            const h = hours > 1 ? "hours" : "hour";
            formatedDuration += `${ hours } ${ h }`;
        }

        if (minutes) {
            const m = minutes > 1 ? "minutes" : "minute";
            formatedDuration += `${ minutes } ${ m }`;
        }

        if (seconds) {
            const s = seconds > 1 ? "seconds" : "second";
            formatedDuration += `${ seconds } ${ s }`;
        }

        return formatedDuration;
    }

    return (
        <div>
            <p>{ props.description }</p>
            <Table responsive condensed hover>
                <tbody>
                    <tr>
                        <td><strong>URL: </strong>{ props.url }</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Valid date: </strong>
                            { dn.format("ll") } - { dm.format("ll") }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Milestone ends: </strong>
                            { dm.fromNow() }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Milestone Lead Link Address: </strong>
                            { props.milestoneLeadLink }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Pay Recipient Address: </strong>
                            { props.payRecipient }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Reviewer: </strong>
                            { props.reviewer }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Reviewer time: </strong>
                            { format(rt) }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Payment source address: </strong>
                            { props.paymentSource }
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

Milestone.propTypes = {
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    maxCompletionDate: React.PropTypes.any.isRequired,
    minCompletionDate: React.PropTypes.any.isRequired,
    milestoneLeadLink: React.PropTypes.string.isRequired,
    reviewer: React.PropTypes.string.isRequired,
    reviewTime: React.PropTypes.number.isRequired,
    paymentSource: React.PropTypes.string.isRequired,
    status: React.PropTypes.string,
    doneTime: React.PropTypes.number,
    payRecipient: React.PropTypes.string.isRequired,
};
