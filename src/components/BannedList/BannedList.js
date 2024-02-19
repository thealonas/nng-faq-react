import { useEffect, useState } from "react";
import PesterDataTable from "../PesterDataTable/PesterDataTable";

const BannedList = () => {
  const [banned, setBanned] = useState([]);

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
    {
      Header: "Приоритет",
      accessor: "priority",
      className: "pester-data-table left",
      Cell: ({ cell: { value } }) => {
        let name = "";
        switch (value) {
          case "green":
            name = "Зелёный";
            break;

          case "teal":
            name = "Бирюзовый";
            break;

          case "orange":
            name = "Оранжевый";
            break;

          case "red":
            name = "Красный";
            break;
        }

        return (
          <span
            style={{
              color: value,
            }}
          >
            {name}
          </span>
        );
      },
    },
    {
      Header: "Жалоба от",
      accessor: "complaint",
      className: "pester-data-table left",
      Cell: ({ cell: { value } }) => {
        if (value) {
          return (
            <a
              href={`https://vk.com/id${value}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {value}
            </a>
          );
        } else {
          return <span>❌</span>;
        }
      },
    },
  ];

  const tableFormattedUsers = (userList) => {
    const output = [];
    for (const userItem of userList) {
      const violation = userItem["violations"][0];
      output.push({
        name: userItem["name"],
        url: `https://vk.com/id${userItem["user_id"]}`,
        priority: violation["priority"],
        complaint: violation["complaint"],
      });
    }

    return output;
  };

  const getBanned = async () => {
    const response = await fetch("https://api.nng.alonas.lv/users/bnnd");

    if (!response.ok) {
      return [];
    }

    return await response.json();
  };

  useEffect(() => {
    getBanned().then((data) => {
      setBanned(data);
    });
  }, [setBanned]);

  return (
    <PesterDataTable
      columns={bannedColumns}
      data={tableFormattedUsers(banned)}
    />
  );
};

export default BannedList;
