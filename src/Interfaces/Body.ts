import { CheckCheckRun, CheckCheckSuite, CheckRequestedAction } from "./Check";
import { CommitCommentSender } from "./CommitComment";
import { CreateSender } from "./Create";
import { DeleteSender } from "./Delete";
import { DeploymentSender } from "./Deployment";
import { DeploymentStatusSender } from "./DeploymentStatus";
import { ForkForkee, ForkSender } from "./Fork";
import { GollumSender } from "./Gollum";
import { Installation, InstallationSender } from "./Installation";
import { InstallationRepositoriesSender } from "./InstallationRepositories";
import { IssueCommentSender } from "./IssueComment";
import { IssuesSender } from "./Issues";
import { LabelSender } from "./Label";
import { MarketplacePurchaseSender } from "./MarketplacePurchase";
import { MemberSender } from "./Member";
import { MembershipSender } from "./Membership";
import { MilestoneSender } from "./Milestone";
import { Organization, OrganizationSender } from "./Organization";
import { OrgBlockSender } from "./OrgBlock";
import { PageBuildSender } from "./PageBuild";
import { ProjectSender } from "./Project";
import { ProjectCardSender } from "./ProjectCard";
import { ProjectColumnSender } from "./ProjectColumn";
import { PublicSender } from "./Public";
import { PullRequestSender } from "./PullRequest";
import { PullRequestReviewSender } from "./PullRequestReview";
import { PullRequestReviewCommentSender } from "./PullRequestReviewComment";
import { PushCommit, PushPusher, PushSender } from "./Push";
import { ReleaseSender } from "./Release";
import { Repository, RepositorySender } from "./Repository";
import { StatusSender } from "./Status";
import { TeamSender } from "./Team";
import { TeamAddSender } from "./TeamAdd";
import { WatchSender } from "./Watch";

type Senders =
TeamSender | PushSender | 
ForkSender | WatchSender | 
LabelSender | CreateSender | 
DeleteSender | GollumSender | 
IssuesSender | MemberSender |
PublicSender | StatusSender |
ProjectSender | ReleaseSender | 
TeamAddSender | OrgBlockSender |
MilestoneSender | PageBuildSender |
DeploymentSender | MembershipSender |
RepositorySender | ProjectCardSender | 
PullRequestSender | InstallationSender |
IssueCommentSender | OrganizationSender |
CommitCommentSender | ProjectColumnSender |
DeploymentStatusSender | PullRequestReviewSender |
InstallationRepositoriesSender | MarketplacePurchaseSender |
PullRequestReviewCommentSender

export interface GithubEvents {
  push: PushBody;
  fork: ForkBody;
  check_run: CheckRunBody;
  check_suite: CheckSuiteBody;
  code_scanning_alert: CodeScanningAlertBody;

  everything: PushBody | ForkBody;
}
export interface Body
{
  sender: Senders;
  repository: Repository;
  organization: Organization;
  installation: Installation
}

export interface PushBody extends Body
{
  ref: string;
  before: string;
  after: string;
  commits: Array<PushCommit>
  pusher: PushPusher
}

export interface ForkBody extends Body
{
  forkee: ForkForkee
}

export interface CheckRunBody extends Body
{
  action: "created" | "completed" | "rerequested" | "requested_action";
  check_run: CheckCheckRun
  requested_action: CheckRequestedAction
}

export interface CheckSuiteBody extends Body
{
  action: "created" | "completed" | "rerequested";
  check_suite: CheckCheckSuite
}

export interface CodeScanningAlertBody extends Body
{
  action: "created" | "reopened_by_user" | "closed_by_user" | "fixed" | "appeared_in_branch" | "reopened";
  alert: Object;
  ref: string;
  commit_oid: string;
}