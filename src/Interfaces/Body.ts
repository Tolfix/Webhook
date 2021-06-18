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
import { MemberMember, MemberSender } from "./Member";
import { MembershipSender } from "./Membership";
import { MilestoneMilestone, MilestoneSender } from "./Milestone";
import { Organization, OrganizationInvitation, OrganizationMembership, OrganizationSender } from "./Organization";
import { OrgBlockBlocked_user, OrgBlockSender } from "./OrgBlock";
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
import { Team, TeamSender } from "./Team";
import { TeamAddSender } from "./TeamAdd";
import { WatchSender } from "./Watch";

export interface Sender
{
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

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
  marketplace_purchase: MarketplacePurchaseBody;
  member: MemberBody;
  membership: MembershipBody;
  meta: MetaBody;
  milestone: MilestoneBody;
  organization: OrganizationBody
  org_block: OrgBlockBody;

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
  installation: Installation;
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

export interface MarketplacePurchaseBody
{
  // Maybe do this on all interfaces?
  /**
   * @description
   * Someone purchased a GitHub Marketplace plan. The change should take effect on the account immediately.
   * 
    `pending_change` - You will receive the pending_change event when someone has downgraded or cancelled a GitHub Marketplace plan to indicate a change will occur on the account.
    The new plan or cancellation takes effect at the end of the billing cycle. The cancelled or changed event type will be sent when the billing cycle has ended and the cancellation or new plan should take effect.

    `pending_change_cancelled` - Someone has cancelled a pending change. Pending changes include plan cancellations and downgrades that will take effect at the end of a billing cycle.

    `changed` - Someone has upgraded or downgraded a GitHub Marketplace plan and the change should take effect on the account immediately.

    `cancelled` - Someone cancelled a GitHub Marketplace plan and the last billing cycle has ended. The change should take effect on the account immediately.
   */
  action: "purchased" | "pending_change" | "pending_change_cancelled" | "changed" | "cancelled";
}

export interface MemberBody extends Body
{
  action: "added" | "removed" | "edited";
  member: MemberMember;
  changes?: {
    old_permission: {
      from: "string";
    }
  };
  sender: MemberSender;
}

export interface MembershipBody extends Body
{
  action: "added" | "removed";
  scope: string;
  member: MemberMember;
  team: Team;
  sender: TeamSender;
}

export interface MetaBody
{
  action: "deleted";
  /**
   * @description
   * The id of the modified webhook.
   */
  hook_id: number;
  /**
   * @description
   * The modified webhook. This will contain different keys based on the type of webhook it is: repository, organization, business, app, or GitHub Marketplace.
   */
  hook: Object;
  repository: Repository;
  organization: Organization;
  sender: Sender;
}

export interface MilestoneBody extends Body
{
  action: "created" | "closed" | "opened" | "edited" | "deleted";
  /**
   * @description
   * The milestone itself.
   */
  milestone: MilestoneMilestone;

  /**
   * @description
   * The changes to the milestone if the action was `edited`.
   */
  changes?: {
    description: {
      from: string;
    },
    due_on: {
      from: string;
    },
    title: {
      from: string;
    }
  }
}

export interface OrganizationBody
{
  action: "deleted" | "renamed" | "member_added" | "member_removed" |  "member_invited";
  /**
   * @description
   * 	The invitation for the user or email if the action is `member_invited`.
   */
  invitation?: OrganizationInvitation;
  /**
   * @description
   * The membership between the user and the organization. Not present when the action is `member_invited`.
   */
  membership: OrganizationMembership;
  organization: Organization;
  installation: Installation;
  sender: OrganizationSender;
}

export interface OrgBlockBody
{
  action: "blocked" | "unblocked";
  /**
   * @description
   * Information about the user that was blocked or unblocked.
   */
  blocked_user: OrgBlockBlocked_user
  organization: Organization;
  installation: Installation;
  sender: Sender;
}