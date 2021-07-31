import { CheckCheckRun, CheckCheckSuite, CheckRequestedAction } from "./Check";
import { CommitComment } from "./CommitComment";
import { DeployKey, Deployment } from "./Deployment";
import { ForkForkee } from "./Fork";
import { GollumPage } from "./Gollum";
import { Installation, InstallationInstallation } from "./Installation";
import { InstallationRepositories, InstallationRepositoriesRepositories_removed, InstallationRepositoriesSender } from "./InstallationRepositories";
import { IssueCommentComment } from "./IssueComment";
import { IssuesIssue, IssuesLabel, IssuesUser } from "./Issues";
import { LabelLabel } from "./Label";
import { MemberMember, MemberSender } from "./Member";
import { MilestoneMilestone } from "./Milestone";
import { Organization, OrganizationInvitation, OrganizationMembership } from "./Organization";
import { OrgBlockBlocked_user } from "./OrgBlock";
import { PageBuildBuild } from "./PageBuild";
import { ProjectCardProject_card } from "./ProjectCard";
import { PullRequestPull_request } from "./PullRequest";
import { PullRequestReviewReview } from "./PullRequestReview";
import { PullRequestReviewCommentPullRequestReviewCommentComment, PullRequestReviewCommentPullRequestReviewCommentPull_request } from "./PullRequestReviewComment";
import { PushCommit, PushPusher } from "./Push";
import { ReleaseRelease } from "./Release";
import { Repository } from "./Repository";
import { SecurityAdvisory } from "./SecurityAdvisory";
import { Team, TeamTeam } from "./Team";
export interface Sender {
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
export interface From {
    from: string;
}
export interface RP {
    /**
     * @description
     * The repository where the event occurred.
     */
    repository: Repository;
}
export interface ORG {
    /**
     * @description
     * Webhook payloads contain the organization object when the webhook is configured for an organization or the event occurs from activity in a repository owned by an organization.
     */
    organization: Organization;
}
export interface SD {
    /**
     * @description
     * The user that triggered the event.
     */
    sender: Sender;
}
export interface INST {
    /**
     * @description
     * The GitHub App installation. Webhook payloads contain the installation property when the event is configured for and sent to a GitHub App.
     */
    installation: Installation;
}
export interface GithubEvents {
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
    organization: OrganizationBody;
    org_block: OrgBlockBody;
    package: PackageBody;
    page_build: PageBuildBody;
    ping: PingBody;
    project_card: ProjectCardBody;
    project_column: ProjectColumnBody;
    project: ProjectBody;
    public: PublicBody;
    pull_request: PullRequestBody;
    pull_request_review: PullRequestReviewBody;
    pull_request_review_comment: PullRequestReviewCommentBody;
    push: PushBody;
    release: ReleaseBody;
    repository_dispatch: RepositoryDispatchBody;
    repository: RepositoryBody;
    repository_import: RepositoryImportBody;
    repository_vulnerability_alert: RepositoryVulnerabilityAlertBody;
    secret_scanning_alert: SecretScanningAlertBody;
    security_advisory: SecurityAdvisoryBody;
    sponsorship: SponsorshipBody;
    star: StarBody;
    status: StatusBody;
    team: TeamBody;
    team_add: TeamAddBody;
    watch: WatchBody;
    workflow_dispatch: WorkflowDispatchBody;
    workflow_run: WorkflowRunBody;
    /**
     * @description
     * Everything you can wish for
     */
    everything: PushBody | ForkBody | CheckRunBody | CheckSuiteBody | CodeScanningAlertBody | CommitCommetBody | CreateBody | DeleteBody | DeployKeyBody | DeploymentBody | DeploymentStatusBody | DiscussionsBody | DiscussionsCommentBody | GithubAppAuthorizationBody | GollumBody | InstallationBody | InstallationRepositoriesBody | IssueCommentBody | IssuesBody | LabelBody | MarketplacePurchaseBody | MemberBody | MembershipBody | MetaBody | MilestoneBody | OrganizationBody | OrgBlockBody | PackageBody | PageBuildBody | PingBody | ProjectCardBody | ProjectColumnBody | ProjectBody | PublicBody | PullRequestBody | PullRequestReviewBody | PullRequestReviewCommentBody | ReleaseBody | RepositoryBody | RepositoryImportBody | RepositoryVulnerabilityAlertBody | SecretScanningAlertBody | SecurityAdvisoryBody | SponsorshipBody | StarBody | StatusBody | TeamBody | TeamAddBody | WatchBody | WorkflowDispatchBody | WorkflowRunBody;
}
export interface Body extends SD, RP, ORG, INST {
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run
 */
export interface CheckRunBody extends Body {
    /**
     * @description
     * `created` - A new check run was created.
     *
      `completed` - The status of the check run is completed.
  
      `rerequested` - Someone requested to re-run your check run from the pull request UI. See "About status checks" for more details about the GitHub UI. When you receive a rerequested action, you'll need to create a new check run. Only the GitHub App that someone requests to re-run the check will receive the rerequested payload.
  
      `requested_action` - Someone requested an action your app provides to be taken. Only the GitHub App someone requests to perform an action will receive the requested_action payload. To learn more about check runs and requested actions, see "Check runs and requested actions."
     */
    action: "created" | "completed" | "rerequested" | "requested_action";
    /**
     * @description
     * The [check_run](https://docs.github.com/en/rest/reference/checks#get-a-check-run).
     */
    check_run: CheckCheckRun;
    /**
     * @description
     * The action requested by the user.
     */
    requested_action: CheckRequestedAction;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite
 */
export interface CheckSuiteBody extends Body {
    /**
     * @description
     * `completed` - All check runs in a check suite have completed.
  
      `requested` - Occurs when new code is pushed to the app's repository. When you receive the requested action events, you'll need to create a new check run.
  
      `rerequested` - Occurs when someone requests to re-run the entire check suite from the pull request UI. When you receive the rerequested action events, you'll need to create a new check run. See "About status checks" for more details about the GitHub UI.
     */
    action: "created" | "completed" | "rerequested";
    check_suite: CheckCheckSuite;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#code_scanning_alert
 */
export interface CodeScanningAlertBody extends Body {
    action: "created" | "reopened_by_user" | "closed_by_user" | "fixed" | "appeared_in_branch" | "reopened";
    /**
     * @description
     * The code scanning alert involved in the event.
     */
    alert: Object;
    /**
     * @description
     * The Git reference of the code scanning alert. When the action is `reopened_by_user` or `closed_by_user`, the event was triggered by the sender and this value will be empty.
     */
    ref: string;
    /**
     * The commit SHA of the code scanning alert. When the action is `reopened_by_user` or `closed_by_user`, the event was triggered by the sender and this value will be empty.
     */
    commit_oid: string;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#commit_comment
 */
export interface CommitCommetBody extends Body {
    action: "created";
    comment: CommitComment;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#create
 */
export interface CreateBody extends Body {
    /**
     * @description
     * The [`git ref`](https://docs.github.com/en/rest/reference/git#get-a-reference) resource.
     */
    ref: string;
    /**
     * @description
     * The type of Git ref object created in the repository. Can be either `branch` or `tag`.
     */
    ref_type: string;
    /**
     * @description
     * The name of the repository's default branch (usually `main`).
     */
    master_branch: string;
    /**
     * @description
     * The repository's current description.
     */
    description: string;
    /**
     * @description
     * The pusher type for the event. Can be either `user` or a deploy key.
     */
    pusher_type: string;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#delete
 */
export interface DeleteBody extends Body {
    /**
     * @description
     * The [`git ref`](https://docs.github.com/en/rest/reference/git#get-a-reference) resource.
     */
    ref: string;
    /**
     * @description
     * The type of Git ref object created in the repository. Can be either `branch` or `tag`.
     */
    ref_type: string;
    /**
     * @description
     * The pusher type for the event. Can be either `user` or a deploy key.
     */
    pusher_type: string;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deploy_key
 */
export interface DeployKeyBody extends RP, ORG, SD {
    action: "created" | "deleted";
    /**
     * @description
     * The [`deploy key`](https://docs.github.com/en/rest/reference/repos#get-a-deploy-key) resource.
     */
    key: DeployKey;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment
 */
export interface DeploymentBody extends Body {
    action: "created";
    /**
     * @description
     * The [deployment](https://docs.github.com/en/rest/reference/repos#list-deployments).
     */
    deployment: Deployment;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment_status
 */
export interface DeploymentStatusBody extends Body {
    action: "created";
    /**
     * @description
     * The [deployment status](https://docs.github.com/en/rest/reference/repos#list-deployment-statuses).
     */
    deployment_status: {
        /**
         * @description
         * The new state. Can be `pending`, `success`, `failure`, or `error`.
         */
        state: string;
        /**
         * @description
         * The optional link added to the status.
         */
        target_url: string;
        /**
         * @description
         * The optional human-readable description added to the stat
         */
        description: string;
    };
    /**
     * @description
     * The [deployment](https://docs.github.com/en/rest/reference/repos#list-deployments) that this status is associated with.
     */
    deployment: Deployment;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion
 */
export interface DiscussionsBody extends Body {
    action: "created" | "edited" | "deleted" | "pinned" | "unpinned" | "locked" | "unlocked" | "transferred" | "category_changed" | "answered" | "unanswered";
    /**
     * @link https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions#discussion
     */
    discussion: Object;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment
 */
export interface DiscussionsCommentBody extends Body {
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
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#fork
 */
export interface ForkBody extends Body {
    /**
     * @description
     * The created [`repository`](https://docs.github.com/en/rest/reference/repos#get-a-repository) resource.
     */
    forkee: ForkForkee;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#github_app_authorization
 */
export interface GithubAppAuthorizationBody {
    action: "revoked";
    sender: Sender;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#gollum
 */
export interface GollumBody extends Body {
    pages: Array<GollumPage>;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#installation
 */
export interface InstallationBody extends SD {
    /**
     * @description
     * created - Someone installs a GitHub App.
  
    `deleted` - Someone uninstalls a GitHub App
  
    `suspend` - Someone suspends a GitHub App installation.
  
    `unsuspend` - Someone unsuspends a GitHub App installation.
  
    `new_permissions_accepted` - Someone accepts new permissions for a GitHub App installation. When a GitHub App owner requests new permissions, the person who installed the GitHub App must accept the new permissions request.
     */
    action: "created" | "deleted" | "suspend" | "unsuspend" | "new_permissions_accepted";
    /**
     * @description
     * An array of repository objects that the installation can access.
     */
    repositories: InstallationRepositoriesSender;
    /**
     * @description
     * The GitHub App installation.
     */
    installtion: InstallationInstallation;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#installation_repositories
 */
export interface InstallationRepositoriesBody extends SD {
    action: "added" | "removed";
    /**
     * @description
     * 	The choice of repositories the installation is on. Can be either `selected` or `all`.
     */
    repository_selection: "selected" | "all";
    /**
     * @description
     * An array of repository objects, which were added to the installation.
     */
    repositories_added: Array<InstallationRepositories>;
    /**
     * @description
     * An array of repository objects, which were removed from the installation.
     */
    repositories_removed: Array<InstallationRepositoriesRepositories_removed>;
    /**
     * @description
     */
    installtion: InstallationInstallation;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment
 */
export interface IssueCommentBody extends Body {
    action: "created" | "edited" | "deleted";
    /**
     * @description
     * The changes to the comment if the action was `edited`.
     */
    changes?: {
        body: From;
    };
    /**
     * @description
     * The [issue](https://docs.github.com/en/rest/reference/issues) the comment belongs to.
     */
    issue: IssuesIssue;
    /**
     * @description
     * The [comment](https://docs.github.com/en/rest/reference/issues#comments) itself.
     */
    comment: IssueCommentComment;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues
 */
export interface IssuesBody extends Body {
    action: "opened" | "edited" | "deleted" | "pinned" | "unpinned" | "closed" | "reopened" | "assigned" | "unassigned" | "labeled" | "unlabeled" | "locked" | "unlocked" | "transferred" | "milestoned" | "demilestoned";
    /**
     * @description
     * The [issue](https://docs.github.com/en/rest/reference/issues) the comment belongs to.
     */
    issue: IssuesIssue;
    /**
     * @description
     * The changes to the comment if the action was `edited`.
     */
    changes?: {
        title: From;
        body: From;
    };
    /**
     * @description
     * The optional user who was assigned or unassigned from the issue.
     */
    assignee?: IssuesUser;
    /**
    * @description
    * The optional label that was added or removed from the issue.
    */
    label?: IssuesLabel;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label
 */
export interface LabelBody extends Body {
    action: "created" | "edited" | "deleted";
    /**
     * @description
     * The label that was added.
     */
    label: LabelLabel;
    /**
     * @description
     * The changes to the comment if the action was `edited`.
     */
    changes?: {
        name: From;
        color: From;
    };
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#marketplace_purchase
 */
export interface MarketplacePurchaseBody {
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
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#member
 */
export interface MemberBody extends Body {
    /**
     * @description
     * `added` - A user accepts an invitation to a repository.
  
    `removed` - A user is removed as a collaborator in a repository.
  
    `edited` - A user's collaborator permissions have changed.
     */
    action: "added" | "removed" | "edited";
    /**
     * @description
     * The user that was added.
     */
    member: MemberMember;
    /**
     * @description
     * The changes to the comment if the action was `edited`.
     */
    changes?: {
        old_permission: From;
    };
    sender: MemberSender;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#membership
 */
export interface MembershipBody extends Body {
    action: "added" | "removed" | "edited";
    /**
     * @description
     * The scope of the membership. Currently, can only be team.
     */
    scope: string;
    /**
     * @description
     * The [user](https://docs.github.com/en/rest/reference/users) that was added or removed.
     */
    member: MemberMember;
    /**
     * @description
     * The [team](https://docs.github.com/en/rest/reference/teams) for the membership.
     */
    team: Team;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#meta
 */
export interface MetaBody {
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
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone
 */
export interface MilestoneBody extends Body {
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
        description: From;
        due_on: From;
        title: From;
    };
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#organizaion
 */
export interface OrganizationBody extends SD, ORG, INST {
    action: "deleted" | "renamed" | "member_added" | "member_removed" | "member_invited";
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
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#org_block
 */
export interface OrgBlockBody extends SD, ORG, INST {
    action: "blocked" | "unblocked";
    /**
     * @description
     * Information about the user that was blocked or unblocked.
     */
    blocked_user: OrgBlockBlocked_user;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#package
 */
export interface PackageBody extends RP, ORG, SD {
    action: "published" | "updated";
    /**
     * @description
     * Information about the package.
     */
    package: Object;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#page_build
 */
export interface PageBuildBody extends Body {
    /**
     * @description
     * The unique identifier of the page build.
     */
    id: number;
    /**
     * @description
     * The [List GitHub Pages builds](https://docs.github.com/en/rest/reference/repos#list-github-pages-builds) itself.
     */
    build: PageBuildBuild;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#ping
 */
export interface PingBody extends RP, ORG, SD {
    /**
     * @description
     * Random string of GitHub `zen`.
     */
    zen: string;
    /**
     * @description
     * The ID of the webhook that triggered the `ping`.
     */
    hook_id: number;
    /**
     * @description
     * The [webhook configuration](https://docs.github.com/en/rest/reference/repos#get-a-repository-webhook).
     */
    hook: Object;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card
 */
export interface ProjectCardBody extends Body {
    action: "created" | "edited" | "moved" | "converted" | "deleted";
    /**
     * @description
     * The changes to the project card if the action was edited or converted.
     */
    changes?: {
        note: From;
    };
    /**
     * @description
     * The id of the card that this card now follows if the action was "moved". Will be `null` if it is the first card in a column
     */
    after_id: number;
    /**
     * @description
     * The [project card](https://docs.github.com/en/rest/reference/projects#cards) itself.
     */
    project_card: ProjectCardProject_card;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column
 */
export interface ProjectColumnBody extends Body {
    action: "created" | "edited" | "moved" | "deleted";
    /**
     * @description
     * The changes to the project column if the action was `edited`.
     */
    changes?: {
        name: From;
    };
    /**
     * @description
     * The id of the card that this card now follows if the action was "moved". Will be `null` if it is the first card in a column
     */
    after_id: number;
    /**
     * @description
     * The [project column](https://docs.github.com/en/rest/reference/projects#columns) itself.
     */
    project_card: ProjectCardProject_card;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project
 */
export interface ProjectBody extends Body {
    action: "created" | "edited" | "closed" | "reopened" | "deleted";
    /**
     * @description
     * The changes to the project if the action was `edited`.
     */
    changes?: {
        name: From;
        body: From;
    };
    /**
     * @description
     * The [project](https://docs.github.com/en/rest/reference/projects) itself.
     */
    project: ProjectCardProject_card;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#public
 * @description
 * When a private repository is made public. Without a doubt: the best GitHub event.
 */
export interface PublicBody extends Body {
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
 */
export interface PullRequestBody extends Body {
    /**
     * @description
     * `assigned`
  
    `auto_merge_disabled`
  
    `auto_merge_enabled`
  
    `closed`: If the action is closed and the merged key is false, the pull request was closed with unmerged commits. If the action is closed and the merged key is true, the pull request was merged.
  
    `converted_to_draft`
  
    `edited`
  
    `labeled`
  
    `locked`
  
    `opened`
  
    `ready_for_review`
  
    `reopened`
  
    `review_request_removed`
  
    `review_requested`
  
    `synchronize`: Triggered when a pull request's tracking branch is synchronized with the source branch for the pull request, which happens when the source branch is updated.
  
    `unassigned`
  
    `unlabeled`
  
    `unlocked`
     */
    action: "assigned" | "auto_merge_disabled" | "auto_merge_enabled" | "closed" | "converted_to_draft" | "edited" | "labeled" | "locked" | "opened" | "ready_for_review" | "reopened" | "review_request_removed" | "review_requested" | "synchronize" | "unassigned" | "unlabeled" | "unlocked";
    /**
     * @description
     * The pull request number.
     */
    number: number;
    /**
     * @description
     * The changes to the comment if the action was `edited`.
     */
    changes?: {
        title: From;
        body: From;
    };
    /**
     * @description
     * The [pull request](https://docs.github.com/en/rest/reference/pulls) itself.
     */
    pull_request: PullRequestPull_request;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review
 */
export interface PullRequestReviewBody extends Body {
    /**
     * @description
     * `submitted` - A pull request review is submitted into a non-pending state.
  
    `edited` - The body of a review has been edited.
  
    `dismissed` - A review has been dismissed.
     */
    action: "submitted" | "edited" | "dismissed";
    /**
     * @description
     * The [pull request](https://docs.github.com/en/rest/reference/pulls) the review pertains to.
     */
    pull_request: PullRequestReviewCommentPullRequestReviewCommentPull_request;
    /**
     * @description
     * The review that was affected.
     */
    review: PullRequestReviewReview;
    /**
     * @description
     * The previous version of the body if the action was `edited`.
     */
    changes?: {
        body: From;
    };
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment
 */
export interface PullRequestReviewCommentBody extends Body {
    action: "created" | "edited" | "deleted";
    /**
     * @description
     * The changes to the comment if the action was `edited`.
     */
    changes: {
        body: From;
    };
    /**
     * @description
     * The [pull request](https://docs.github.com/en/rest/reference/pulls) itself.
     */
    pull_request: PullRequestPull_request;
    /**
     * @description
     * The [comment](https://docs.github.com/en/rest/reference/pulls#comments) itself.
     */
    comment: PullRequestReviewCommentPullRequestReviewCommentComment;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push
 */
export interface PushBody extends Body {
    /**
    * @description
    * The full git ref that was pushed. Example: `refs/heads/main`.
    */
    ref: string;
    /**
    * @description
    * The SHA of the most recent commit on `ref` before the push.
    */
    before: string;
    /**
    * @description
    * The SHA of the most recent commit on `ref` after the push.
    */
    after: string;
    /**
    * @description
    * An array of commit objects describing the pushed commits. (The array includes a maximum of 20 commits. If necessary, you can use the Commits API to fetch additional commits. This limit is applied to timeline events only and isn't applied to webhook deliveries.)
    */
    commits: Array<PushCommit>;
    /**
    * @description
    * The user who pushed the commits.
    */
    pusher: PushPusher;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release
 */
export interface ReleaseBody extends Body {
    /**
     * @description
     * `published`: a release, pre-release, or draft of a release is published
  
    `unpublished`: a release or pre-release is deleted
  
    `created`: a draft is saved, or a release or pre-release is published without previously being saved as a draft
  
    `edited`: a release, pre-release, or draft release is edited
  
    `deleted`: a release, pre-release, or draft release is deleted
  
    `prereleased`: a pre-release is created
  
    `released`: a release or draft of a release is published, or a pre-release is changed to a release
     */
    action: "published" | "unpublished" | "created" | "edited" | "deleted" | "prereleased" | "released";
    /**
     * @description
     * The previous version if the action was `edited`.
     */
    changes: {
        body: From;
        name: From;
    };
    /**
     * @description
     * The [release](https://docs.github.com/en/rest/reference/repos/#get-a-release) object.
     */
    release: ReleaseRelease;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#repository_dispatch
 * @description
 * This event occurs when a GitHub App sends a POST request to the "[Create a repository dispatch event](https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event)" endpoint.
 *
 * TODO Look into this @Tolfx
 */
export interface RepositoryDispatchBody {
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#repository
 */
export interface RepositoryBody extends Body {
    /**
     * @description
     * `created` - A repository is created.
  
    `deleted` - A repository is deleted.
  
    `archived` - A repository is archived.
  
    `unarchived` - A repository is unarchived.
  
    `edited` - A repository's information is edited.
  
    `renamed` - A repository is renamed.
  
    `transferred` - A repository is transferred.
  
    `publicized` - A repository is made public.
  
    `privatized` - A repository is made private.
     */
    action: "created" | "deleted" | "archived" | "unarchived" | "edited" | "renamed" | "transferred" | "publicized" | "privatized";
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#repository_import
 */
export interface RepositoryImportBody extends SD, ORG, SD {
    status: "success" | "cancelled" | "failure";
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#repository_vulnerability_alert
 */
export interface RepositoryVulnerabilityAlertBody extends SD, ORG, SD {
    status: "create" | "dismiss" | "resolve";
    /**
     * @description
     *
     */
    alert: {
        id: number;
        affected_range: string;
        affected_package_name: string;
        fixed_in: string;
        external_reference: string;
        external_identifier: string;
        severity: string;
        ghsa_id: string;
        created_at: string;
    };
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert
 */
export interface SecretScanningAlertBody extends Body {
    action: "created" | "resolved" | "reopened";
    alert: {
        number: number;
        secret_type: string;
        resolution: null | unknown;
        resolved_by: null | unknown;
        resolved_at: null | unknown;
    };
    /**
     * @description
     * 	If the action is resolved or reopened, the sender object will be the user that triggered the event. The sender object is empty for all other actions.
     */
    sender: Sender;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#security_advisory
 */
export interface SecurityAdvisoryBody {
    action: "published" | "updated" | "performed";
    security_advisory: SecurityAdvisory;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#sponsorship
 */
export interface SponsorshipBody extends SD {
    action: "created" | "cancelled" | "edited" | "tier_changed" | "pending_cancellation" | "pending_tier_change";
    /**
     * @description
     * The `pending_cancellation` and `pending_tier_change` event types will include the date the cancellation or tier change will take effect.
     */
    effective_date: string;
    sponsorship: {
        node_id: string;
        created_at: string;
        sponsorable: Sender;
        sponsor: Sender;
        privacy_level: string;
        tier: {
            node_id: string;
            created_at: string;
            description: string;
            monthly_price_in_cents: number;
            monthly_price_in_dollars: number;
            name: string;
            is_one_time: Boolean;
            is_custom_amount: Boolean;
        };
    };
    changes: {
        /**
         * @description
         * The `tier_changed` and `pending_tier_change` will include the original tier before the change or pending change. For more information, see the [pending tier change payload](https://docs.github.com/en/webhooks/event-payloads#webhook-payload-example-when-someone-downgrades-a-sponsorship).
         */
        tier: {
            from: Object;
        };
        /**
         * @description
         * The `edited` event types include the details about the change when someone edits a sponsorship to change the privacy.
         */
        privacy_level: From;
    };
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#star
 */
export interface StarBody extends RP, ORG, SD {
    action: "created" | "deleted";
    /**
     * @description
     * 	The time the star was created. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Will be `null` for the `deleted` action.
     */
    starred_at: string;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#status
 */
export interface StatusBody extends Body {
    /**
     * @description
     * The unique identifier of the status.
     */
    id: number;
    /**
     * @description
     * The Commit SHA.
     */
    sha: string;
    state: "pending" | "success" | "failure" | "error";
    /**
     * @description
     * The optional human-readable description added to the status.
     */
    description: string;
    /**
     * @description
     * 	The optional link added to the status.
     */
    target_url: string;
    /**
     * @description
     * An array of branch objects containing the status' SHA. Each branch contains the given SHA, but the SHA may or may not be the head of the branch. The array includes a maximum of 10 branches.
     */
    branches: Array<any>;
}
/**
 * @description
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#team
 */
export interface TeamBody extends RP, ORG, SD {
    action: "created" | "deleted" | "edited" | "added_to_repository" | "removed_from_repository";
    /**
     * @description
     * The team itself.
     */
    team: TeamTeam;
    /**
     * @description
     * The changes to the team if the action was `edited`.
     */
    changes: {
        description: From;
        name: From;
        privacy: From;
        repository: {
            permissions: {
                from: {
                    admin: Boolean;
                    pull: Boolean;
                    push: Boolean;
                };
            };
        };
    };
}
/**
 * @description
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#team_add
 */
export interface TeamAddBody extends Body {
    /**
     * @description
     * The [team](https://docs.github.com/en/rest/reference/teams) that was modified. Note: Older events may not include this in the payload.
     */
    team: TeamTeam;
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch
 */
export interface WatchBody extends Body {
    action: "started";
}
/**
 * @link
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_dispatch
 * @description
 * This event occurs when someone triggers a workflow run on GitHub or sends a `POST` request to the "[Create a workflow dispatch event](https://docs.github.com/en/rest/reference/actions/#create-a-workflow-dispatch-event)" endpoint. For more information, see "[Events that trigger workflows.](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_dispatch)"
 * TODO Find more about this?
 */
export interface WorkflowDispatchBody {
}
export interface WorkflowRunBody extends ORG, RP, SD {
    action: "requested" | "completed";
    /**
     * @description
     * he workflow run. Many workflow_run keys, such as head_branch, conclusion, and pull_requests are the same as those in a check_suite object.
     */
    workflow_run: Object;
}
