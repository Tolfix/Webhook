import { CheckCheckRun, CheckCheckSuite, CheckRequestedAction } from "./Check";
import { CommitComment, CommitCommentSender } from "./CommitComment";
import { Create, CreateSender } from "./Create";
import { DeleteSender } from "./Delete";
import { DeployKey, Deployment, DeploymentSender } from "./Deployment";
import { DeploymentStatus, DeploymentStatusSender } from "./DeploymentStatus";
import { ForkForkee, ForkSender } from "./Fork";
import { GollumPage, GollumSender } from "./Gollum";
import { Installation, InstallationInstallation, InstallationSender } from "./Installation";
import { InstallationRepositories, InstallationRepositoriesRepositories_removed, InstallationRepositoriesSender } from "./InstallationRepositories";
import { IssueComment, IssueCommentComment, IssueCommentSender } from "./IssueComment";
import { IssuesIssue, IssuesLabel, IssuesSender, IssuesUser } from "./Issues";
import { Label, LabelLabel, LabelSender } from "./Label";
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
  check_run: CheckRunBody;
  check_suite: CheckSuiteBody;
  code_scanning_alert: CodeScanningAlertBody;
  commit_comment: CommitCommetBody;
  create: CreateBody;
  delete: DeleteBody;
  deploy_key: DeployKeyBody;
  deployment: DeploymentBody;
  deployment_status: DeploymentStatusBody;
  discussion: DiscussionsBody;
  discussion_comment: DiscussionsCommentBody;
  fork: ForkBody;
  github_app_authorization: GithubAppAuthorizationBody;
  gollum: GollumBody;
  installtion: InstallationBody;
  installation_repositories: InstallationRepositoriesBody;
  issue_comment: IssueCommentBody;
  issues: IssuesBody;
  label: LabelBody;


  everything: PushBody | ForkBody | CheckRunBody |
  CheckSuiteBody | CodeScanningAlertBody | CommitCommetBody |
  CreateBody | DeleteBody | DeployKeyBody | DeploymentBody |
  DeploymentStatusBody | DiscussionsBody;
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

export interface CommitCommetBody extends Body
{
  action: "created";
  comment: CommitComment;
}

export interface CreateBody extends Body
{
  ref: string;
  ref_type: string;
  master_branch: string;
  description: string;
  pusher_type: string;
}

export interface DeleteBody extends Body
{
  ref: string;
  ref_type: string;
  pusher_type: string;
}

export interface DeployKeyBody extends Body
{
  action: "created" | "deleted";
  key: DeployKey
}

export interface DeploymentBody extends Body
{
  action: "created";
  deployment: Deployment;
}

export interface DeploymentStatusBody extends Body
{
  action: "created";
  deployment_status: DeploymentStatus;
  deployment: Deployment;
}

export interface DiscussionsBody extends Body
{
  action: "created" | "edited" | "deleted" | 
  "pinned" | "unpinned" | "locked" | "unlocked" | 
  "transferred" | "category_changed" | "answered" | "unanswered";
  /**
   * @link https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions#discussion
   */
  discussion: Object;
}

export interface DiscussionsCommentBody extends Body
{
  action: "created" | "edited" | "deleted";
  /**
   * @link https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment
   */
  comment: Object;
  /**
   * @link https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions#discussion
   */
  discussion: Object;
}

export interface ForkBody extends Body
{
  forkee: ForkForkee
}

export interface GithubAppAuthorizationBody
{
  action: "revoked";
  sender: Senders;
}

export interface GollumBody extends Body
{
  pages: Array<GollumPage>
  sender: GollumSender;
}

export interface InstallationBody
{
  action: "created" | "deleted" | "suspend" | "unsuspend" | "new_permissions_accepted";
  repositories: InstallationRepositoriesSender;
  installtion: InstallationInstallation;
  sender: InstallationSender;
}

export interface InstallationRepositoriesBody
{
  action: "added" | "removed";
  repository_selection: "selected" | "all";
  repositories_added: Array<InstallationRepositories>
  repositories_removed: Array<InstallationRepositoriesRepositories_removed>
  installtion: InstallationInstallation;
  sender: InstallationSender;
}

export interface IssueCommentBody extends Body
{
  action: "created" | "edited" | "deleted";
  changes: {
    body: {
      from: string;
    }
  }
  issue: IssuesIssue;
  comment: IssueCommentComment;
  sender: IssueCommentSender;
}

export interface IssuesBody extends Body
{
  action: "opened" | "edited" | "deleted" | "pinned" | "unpinned" | "closed" |
  "reopened" | "assigned" | "unassigned" | "labeled" |
  "unlabeled" | "locked" | "unlocked" | 
  "transferred" | "milestoned" | "demilestoned";
  issue: IssuesIssue;
  changes?: {
    title: {
      from: string;
    },
    body: {
      from: string;
    }
    assignee?: IssuesUser;
    label: IssuesLabel;
    sender: IssuesSender;
  } 
}

export interface LabelBody extends Body
{
  action: "created" | "edited" | "deleted";
  label: LabelLabel;
  changes?: {
    name: {
      from: string;
    },
    color: {
      from: string
    }
  };
}

