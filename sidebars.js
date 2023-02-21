/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'overview', 'quickstart_guide', 'features/data_diff'
        // {
        //   type: 'category',
        //   label: 'Features',
        //   // link: {type: 'doc', id: 'features'},
        //   items: [
        //     {type: 'autogenerated', dirName: 'features'}
        //   ],
        // },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'category',
          label: 'Data Warehouses',
          link: {type: 'doc', id: 'integrations/data_warehouses/dw_overview'},
          items: [
            {type: 'autogenerated', dirName: 'integrations/data_warehouses/content'}
          ],
        },
        {
          type: 'category',
          label: 'Git',
          items: [
            {type: 'autogenerated', dirName: 'integrations/git'},
          ],
        },
        {
          type: 'category',
          label: 'Orchestration',
          items: [
            {type: 'autogenerated', dirName: 'integrations/orchestration'},
          ],
        },
        {
          type: 'category',
          label: 'Data Apps',
          items: [
            {type: 'autogenerated', dirName: 'integrations/data_apps'},
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Advanced Configurations',
    //   items: [{type: 'autogenerated', dirName: 'advanced_configs'}],
    // },
    {
      type: 'category',
      label: 'On-Prem',
      link: {type: 'doc', id: 'on-prem/on-prem_overview'},
      items: [{type: 'autogenerated', dirName: 'on-prem/content'}],
    },
    {
      type: 'category',
      label: 'SSO',
      items: [{type: 'autogenerated', dirName: 'sso'}],
    },
    {
      type: 'category',
      label: 'Security',
      items: [{type: 'autogenerated', dirName: 'security'}],
    },
    {
      type: 'category',
      label: 'Support',
      items: [{type: 'autogenerated', dirName: 'support'}],
    },
  ],
  os_diff: [
    'os_diff/about',
    'os_diff/how_to_install',
    'os_diff/databases_we_support',
    {
      type: 'category',
      label: 'How to use',
      items: [
        {type: 'autogenerated', dirName: 'os_diff/how_to_use'},
      ]
    },
    'os_diff/dbt_integration',
    'os_diff/common_use_cases',
    'os_diff/technical_explanation',
    'os_diff/how_to_implement_new_database_driver',
    {
      type: 'link',
      label: 'Python API Reference',
      href: 'https://data-diff.readthedocs.io/en/latest/python-api.html',
    },
    'os_diff/usage_analytics_data_privacy',
  ],
  api: [
    {
      type: 'category',
      label: 'APIs',
      collapsed: false,
      link: {type: 'doc', id: 'api/api-overview'},
      items: [
        {type: 'autogenerated', dirName: 'api/content'}
      ],
    },
  ],
  guides: [
    {
      type: 'category',
      label: 'CI',
      collapsed: false,
      link: {type: 'doc', id: 'guides/ci_guides_overview'},
      items: [
        'guides/ci_guides/dbt_cloud',
        {
          type: 'category',
          label: 'dbt Core',
          link: {type: 'doc', id: 'guides/ci_guides/dbt_core'},
          items: [
            {type: 'autogenerated', dirName: 'guides/ci_guides/dbt_core'}
          ],
        },
        {
          type: 'category',
          label: 'datafold-sdk',
          link: {type: 'doc', id: 'guides/ci_guides/datafold-sdk'},
          items: [
            {type: 'autogenerated', dirName: 'guides/ci_guides/datafold-sdk'}
          ],
        },

        'guides/ci_guides/slim_diff',
      ],
    },

    // {
    //   type: 'category',
    //   label: 'API',
    //   collapsed: false,
    //   link: {type: 'doc', id: 'guides/api_guides_overview'},
    //   items: [
    //     'guides/api_guides/dbt_cloud',
    //     {
    //       type: 'category',
    //       label: 'dbt Core',
    //       link: {type: 'doc', id: 'guides/api_guides/dbt_core'},
    //       items: [
    //         {type: 'autogenerated', dirName: 'guides/api_guides/dbt_core'}
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'datafold-sdk',
    //       link: {type: 'doc', id: 'guides/api_guides/datafold-sdk'},
    //       items: [
    //         {type: 'autogenerated', dirName: 'guides/api_guides/datafold-sdk'}
    //       ],
    //     },
    //   ],
    // },
  ],
};

module.exports = sidebars;