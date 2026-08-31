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
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Android Tutorial',
      items: [
        'Android Tutorial/Getting-Started-With-Android',
        'Android Tutorial/Step-1-Download-the-App',
        'Android Tutorial/Step-2-Onboarding',
        'Android Tutorial/Step-3-Save-Platforms',
        'Android Tutorial/Step-4-Back-Up-and-Restore',
        'Android Tutorial/Step-5-Sending-a-Message',
        'Android Tutorial/Step-6-Routing-Numbers',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Gateway Clients Guide',
    //   items: ['Gateway Clients Guide/GatewayClientsGuide'],
    // },
    {
      type: 'category',
      label: 'iOS Tutorial',
      items: ['iOS Tutorial/Getting-Started-With-iOS'],
    },
    // {
    //   type: 'category',
    //   label: 'On-Device Tutorial',
    //   items: ['On-Device Tutorial/On-DeviceToken'],
    // },
    {
      type: 'category',
      label: 'Technical Documentation',
      items: ['Technical Documentation/Coming-Soon'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'Troubleshooting/RelaySMS',
        'Troubleshooting/Troubleshooting-FAQ',
      ],
    },
  ],
};

export default sidebars;
