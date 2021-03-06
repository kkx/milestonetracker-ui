import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const rejectCompletedMilestone =
(milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.rejectMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};
