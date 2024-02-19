import { useEffect, useState } from "react";
import PesterDataTable from "../PesterDataTable/PesterDataTable";

const ThxList = () => {
  const [thx, setThx] = useState([]);

  const bannedColumns = [
    {
      Header: "Имя",
      accessor: "name",
      className: "pester-data-table left",
      Cell: ({ cell: { value }, row: { original } }) => (
        <a href={`${original.url}`} target="_blank" rel="noreferrer noopener">
          {value}
        </a>
      ),
    },
  ];

  const tableFormattedUsers = (userList) => {
    const output = [];
    for (const userItem of userList) {
      output.push({
        name: userItem["name"],
        url: `https://vk.com/id${userItem["user_id"]}`,
      });
    };

    return output;
  };

  const getThx = async () => {
    const response = await fetch("https://api.nng.alonas.lv/users/thx");

    if (!response.ok) {
      return [];
    }

    return await response.json();
  };

  useEffect(() => {
    getThx()
      .then((data) => {
        setThx(data);
      });
  }, [setThx]);

  return (
    <PesterDataTable columns={bannedColumns} data={tableFormattedUsers(thx)} />
  );
};

export default ThxList;
