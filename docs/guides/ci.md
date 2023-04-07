---
id: ci
title: Continuous Integration
pagination_next: guides/cd
---

Put simply, Continuous Integration (or CI) is a process for building and testing changes to your code before deploying to production.

#### Without CI
* Changes are manually coordinated, and often become a complex synchronization chore.
* Testing is done manually, if at all.
* Code changes are released at a slower cadence, and with higher rates of failure.

#### With CI
* Smoothly manage code changes, and scale as your team and codebase grows.
* Automate high-confidence test coverage.
* Boost the quantity and quality of developer output.

## Getting Started
:::info
To get started, you'll need an [API Key](/reference/cloud#create-an-api-key) and the [CI config ID](/deployment_testing/dbt/dbt_core#next-steps) fr your dbt Core integration.
:::

- [CircleCI](/guides/ci/circleci)
- [GitHub Actions](/guides/ci/github_actions)
- [GitLab](/guides/ci/gitlab_ci)

<!-- Interested in setting up CI or optimizing your current setup? Check out our guided walkthroughs.
* [dbt Cloud](ci_guides/dbt_cloud.md)
* [dbt Core](ci_guides/dbt_core.md)
    * [CircleCI](ci_guides/dbt_core/circleci.md)
    * [Github Actions](ci_guides/dbt_core/github_actions.md)
    * [Gitlab CI](ci_guides/dbt_core/gitlab_ci.md)

#### How we use CI at Datafold:
<iframe width="640" height="414" src="https://www.loom.com/embed/37fc5fb4c1e640c09b9b470128c85a7b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
