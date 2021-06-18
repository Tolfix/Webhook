import { DeploymentRepository } from "./Deployment";

export interface CheckCheckRun
{
    status: string;
    conclusion: string;
    name: string;
    check_suite: E_CheckCheckSuite
}

export interface E_CheckCheckSuite
{
    id: string;
    pull_request: Array<any>
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