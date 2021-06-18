import { DeploymentRepository } from "./Deployment";

export interface CheckCheckRun
{
    /**
     * @description
     * The current status of the check run. Can be `queued`, `in_progress`, or `completed`.
     */
    status: string;
    /**
     * @description
     * The result of the completed check run. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`, action_required or `stale`. 
     * This value will be null until the check run has completed.
     */
    conclusion: string;
    /**
     * @description
     * The name of the check run.
     */
    name: string;
    check_suite: E_CheckCheckSuite
    /**
     * @description
     * The action requested by the user.
     */
    requested_action: {
        /**
         * @description
         * The integrator reference of the action requested by the user.
         */
        identifier: number
    }
}

export interface E_CheckCheckSuite
{
    /**
     * @description
     * The id of the check suite that this check run is part of.
     */
    id: number;
    /**
     * @description
     * An array of pull requests that match this check suite. A pull request matches a check suite if they have the same `head_sha` and `head_branch`. 
     * When the check suite's `head_branch` is in a forked repository it will be `null` and the `pull_requests` array will be empty.
     */
    pull_request: Array<any>
    /**
     * @description
     * A deployment to a repository environment. This will only be populated if the check run was created by a GitHub Actions workflow job that references an environment.
     */
    deployment: DeploymentRepository;
}

export interface CheckCheckSuite
{
    head_branch: string;
    head_sha: string;
    status: string;
    conclusion: string;
    url: string;
    pull_request: string;
}

export interface CheckRequestedAction
{
    identifier: string;
}