import { fetchProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { Animate, Button, List } from '~/components';
import { ListActionType, NavigationItemType } from '~/types';

import type { GetStaticProps } from 'next';

import type { ListAction, Project } from '~/types';
import { GITHUB_REPOS_URL } from '~/lib/navigation';

interface ProjectProps {
	stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
	const projects = await fetchProjects();
	return {
		props: {
			stringifiedProjects: JSON.stringify(projects),
		},
		revalidate: 3600,
	};
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps): JSX.Element {
	const projects = JSON.parse(stringifiedProjects) as Array<Project>;
	return (
		<Layout.Default seo={{ title: 'rasyid ─ projects' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{projects?.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									actions={[
										...(project.post
											? [
												{
													type: ListActionType.LINK,
													external: false,
													href: project.post,
													icon: 'feather:edit-3',
													label: `Blog post about ${project.name}`,
												} as ListAction,
											]
											: []),
										...(project.homepage
											? [
												{
													type: ListActionType.LINK,
													href: project.homepage,
													icon: 'feather:home',
													label: `${project.name} homepage`,
												} as ListAction,
											]
											: []),
										{
											type: ListActionType.LINK,
											href: project.url,
											icon: 'feather:github',
											label: 'GitHub Repository',
										},
									]}
									description={project.description}
									icon={<span className="text-xl">{project.icon}</span>}
									title={project.name}
								/>
							</Animate>
						))}
						{
							(projects?.length === 0 || !projects) && (
								<div className="flex flex-col items-center justify-center h-screen space-y-4">
									<h1 className='text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl'>
										Opps!
									</h1>
									<p className="text-gray-500 dark:text-gray-400">
										I can&apos;t fetch my projects right now. <br />
										You can check them out on my Github instead.
									</p>
									<Button.Standard
										type={NavigationItemType.LINK}
										href={GITHUB_REPOS_URL}
										icon="feather:github">
										Github
									</Button.Standard>
								</div>
							)
						}
					</List.Container>

				</div>
			</div>
		</Layout.Default>
	);
}
