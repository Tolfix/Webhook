export default interface Body
{
    /*zen: "It's not fully shipped until it's fast.",
    hook_id: number
    hook: {
      type: string;
      id: number;
      name: string;
      active: true,
      events: Array<any>;
      config: {
        content_type: string;
        insecure_ssl: string;
        url: string;
      },
      updated_at: string;
      created_at: string;
      url: string;
      test_url: string;
      ping_url: string;
      last_response: { code: null | number, status: string, message: null | string }
    },;*/
    repository: {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: Boolean;
      /*owner: {
        login: 'Tolfix',
        id: 84185750,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjg0MTg1NzUw',
        avatar_url: 'https://avatars.githubusercontent.com/u/84185750?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tolfix',
        html_url: 'https://github.com/Tolfix',
        followers_url: 'https://api.github.com/users/Tolfix/followers',
        following_url: 'https://api.github.com/users/Tolfix/following{/other_user}',
        gists_url: 'https://api.github.com/users/Tolfix/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Tolfix/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Tolfix/subscriptions',
        organizations_url: 'https://api.github.com/users/Tolfix/orgs',
        repos_url: 'https://api.github.com/users/Tolfix/repos',
        events_url: 'https://api.github.com/users/Tolfix/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Tolfix/received_events',
        type: 'Organization',
        site_admin: Boolean;
      },*/
      html_url: string;
      description: null | string,
      fork: Boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null | string,
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: null | undefined | string,
      has_issues: Boolean;
      has_projects: Boolean;
      has_downloads: Boolean;
      has_wiki: Boolean;
      has_pages: Boolean;
      forks_count: number;
      mirror_url: undefined | null | string;
      archived: Boolean;
      disabled: Boolean;
      open_issues_count: number;
      license: undefined | string
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
    },
    sender: {
      login: string;
      id: number,
      node_id: string;
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
      site_admin: Boolean;
    }
}