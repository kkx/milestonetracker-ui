import React from "react";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleRejectCompletedMilestone = (event) => {
        event.stopPropagation();
        props.onRejectCompletedMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.action
        );
    };
    return (
        <MenuItem
          bsStyle="danger"
          onClick={ handleRejectCompletedMilestone }
        >
            Reject Completed
        </MenuItem>
    );
}

Component.propTypes = {
    onRejectCompletedMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
    action: React.PropTypes.array.isRequired,
};
