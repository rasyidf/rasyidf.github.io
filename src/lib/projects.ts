import emojiRegex from 'emoji-regex';
import { log } from 'next-axiom';

import type { GitHubRepos, Project, ProjectPost } from '~/types';

/**
 * Fetch Projects
 *
 * Make a GET request to the GitHub API to gather all repositories
 * under my `rasyidf` username & then filter them down to only
 * include those that contain the `portfolio` topic
 *
 * @TODO Switch to v3 API using GraphQL to save over-fetching
 */
import fetch from 'node-fetch';

export async function fetchProjects(): Promise<Array<Project> | null> {
	const query = `
    query {
  search(query: "user:rasyidf topic:portfolio", type: REPOSITORY, first: 100) {
    nodes {
      ... on Repository {
        name
        description
        homepageUrl
        url
        isArchived
      }
    }
  }
}
  `;

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + process.env.GITHUB_PAT,
			'Content-Type': 'application/json',
			'User-Agent': 'Your-User-Agent',
		},
		body: JSON.stringify({ query }),
	});

	if (response.status !== 200) {
		const json = await response.json();
		console.error({ error: json });
		log.error('Failed to fetch projects', {
			error: json,
		});
		return null;
	}

	const { data } = await response.json() as unknown as { data: { search: { nodes: Array<GitHubRepos> } } };
	const repositories = data?.search?.nodes as Array<GitHubRepos>;

	const { default: rawProjectPosts } = await import('~/data/projects.json');
	const projectPosts = rawProjectPosts as Array<ProjectPost>;

	const projects: Array<Project> = repositories
		.filter(repo => !repo.isArchived)
		.map(repo => {
			// Strip the emoji suffix from the repo description
			const trimmedDescription = repo.description?.split(' ');
			trimmedDescription?.shift();
			const description = trimmedDescription?.join(' ');

			// Check if there is a matching blog post to attach
			const repoPost = projectPosts.find(post => post.repository.toLowerCase() === repo.name.toLowerCase());

			return {
				description,
				icon: ((): (string | undefined) => {
					if (!repo.description) return undefined;
					const char = repo.description.split(' ')[0];
					return emojiRegex().test(char) ? char : undefined;
				})(),
				homepage: repo.homepageUrl ?? undefined,
				name: repo.name,
				post: repoPost ? `/blog/${repoPost.post}` : undefined,
				template: false,
				url: repo.url.toLowerCase(),
			};
		});

	return projects.length > 0 ? projects : null;
}