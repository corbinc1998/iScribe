import { Octokit } from "@octokit/rest";



// example from https://octokit.github.io/rest.js/v22/

// save your sensitive info to .env
const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
  userAgent: 'iScribe v0.0.1',
  previews: ['jean-grey', 'symmetra'],
  baseUrl: 'https://api.github.com',
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },
  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0
  }
});

export async function runDemo() {
  const { data: pullRequest } = await octokit.rest.pulls.get({
    owner: "octokit",
    repo: "rest.js",
    pull_number: 123,
  });
  console.log('Pull Request:', pullRequest);

  const { data: diff } = await octokit.rest.pulls.get({
    owner: "octokit",
    repo: "rest.js",
    pull_number: 123,
    mediaType: {
      format: "diff",
    },
  });
  console.log('Diff:', diff);

  const { data: root } = await octokit.request("GET /");
  console.log('Root:', root);

  const issues = await octokit.paginate(octokit.rest.issues.listForRepo, {
    owner: 'octokit',
    repo: 'rest.js'
  });
  console.log('Issues:', issues);

  return { pullRequest, diff, root, issues };
}
