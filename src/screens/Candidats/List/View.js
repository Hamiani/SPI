import React from "react";
import { Table, Row, Col, Divider, Tag, Dropdown, Button, Menu } from "antd";
import { DownOutlined, EyeOutlined } from "@ant-design/icons";
import className from "classnames";
import get from "lodash/get";

import Loading from "../../../Shared/Loading";
import { isEvenNumber } from "../../../utils/helpers";
import Unknown from "../../../Shared/Unknown";
import cuid from "cuid";

const menu = ({ onShow, record }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShow(get(record, "noCandidat"))}>
      <EyeOutlined />
      Afficher
    </Menu.Item>
  </Menu>
);

const columns = ({ onShow }) => [
  {
    title: "Nom",
    dataIndex: "nom",
    key: "nom",
    render: (nom) => (
      <Tag className="tag" color="magenta">
        {nom}
      </Tag>
    ),
  },
  {
    title: "Prénom",
    dataIndex: "prenom",
    key: "prenom",
    render: (prenom) => (
      <Tag className="tag" color="green">
        {prenom}
      </Tag>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => (
      <Tag className="tag-email" color="blue">
        {email}
      </Tag>
    ),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Dropdown overlay={menu({ onShow, record })} trigger={["click"]}>
        <Button className="ant-dropdown-link boa_select_gray uppercase">
          <div>
            Actions
            <DownOutlined className="action_button" />
          </div>
        </Button>
      </Dropdown>
    ),
  },
];

const View = ({ candidatsQuery, onShow, onCreate }) => {
  const { loading, errors, idle, data } = candidatsQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <div className="head_bloc">
            <h1 className="h1">LES CANDIDATS</h1>
            <Button type="link" className="link_button" onClick={onCreate}>
              Ajouter Candidat
            </Button>
          </div>
          <Divider />
          <Table
            key={cuid()}
            columns={columns({ onShow })}
            rowClassName={(_, index) =>
              className({
                "table-row-dark": isEvenNumber(index),
                "table-row-light": !isEvenNumber(index),
              })
            }
            dataSource={data}
          />
        </Col>
      </Row>
    </div>
  );
};

export default View;
