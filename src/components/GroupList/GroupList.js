import { useEffect, useState } from "react";
import PesterDataTable from "../PesterDataTable/PesterDataTable";

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  const groupColumns = [
    {
      Header: "Группа",
      accessor: "group",
      className: "pester-data-table left",
      Cell: ({ cell: { value }, row: { original } }) => (
        <a href={`${original.url}`} target="_blank" rel="noreferrer noopener">
          {value}
        </a>
      ),
    },
  ];

  const tableFormattedGroups = (groupList) => {
    const output = [];
    for (const groupItem of groupList) {
      const screenName = groupItem["screen_name"];
      output.push({
        group: `@${screenName}`,
        url: `https://vk.com/${screenName}`,
      });
    }

    return output;
  };

  const getGroups = async () => {
    const response = await fetch("https://api.nng.alonas.lv/groups");

    if (!response.ok) {
      return [];
    }

    return await response.json();
  };

  useEffect(() => {
    getGroups().then((data) => {
      setGroups(data);
    });
  }, [setGroups]);

  return (
    <PesterDataTable
      columns={groupColumns}
      data={tableFormattedGroups(groups)}
    />
  );
};

export default GroupList;
