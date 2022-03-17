import { useState, memo } from 'react';
import ConfigInputArea from 'src/components/config_input_area';
import FormsGenerator from 'src/components/forms_generator';
import TabsLayout from './layout';
import Tab from './tab';

export interface TabItem {
  title: string;
  content: JSX.Element;
}

const getTabTitle = ({ title }: TabItem) => title;

const getTabContent = ({ content }: TabItem) => content;

const tabs: TabItem[] = [
  { title: 'Config', content: <ConfigInputArea /> },
  { title: 'Result', content: <FormsGenerator /> },
];

const Tabs = () => {
  const [tab, setTab] = useState(0);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <TabsLayout
      tabs={tabs.map((item, idx) => {
        const tabTitle = getTabTitle(item);

        return (
          <Tab
            key={tabTitle}
            title={tabTitle}
            idx={idx}
            isActive={idx === tab}
            onClick={setTab}
          />
        );
      })}
      content={getTabContent(tabs[tab])}
    />
  );
};

export default memo(Tabs);
