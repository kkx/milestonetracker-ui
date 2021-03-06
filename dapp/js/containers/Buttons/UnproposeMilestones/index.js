import { connect } from "react-redux";
import Component from "./Component";
import { unproposeMilestones } from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onUnproposeMilestones: unproposeMilestones,
    }
);

const ButtonUnroposeMilestones = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default ButtonUnroposeMilestones;
