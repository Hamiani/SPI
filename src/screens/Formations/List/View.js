import React from "react";
import {
  Table,
  Row,
  Col,
  Divider,
  Tag,
  Dropdown,
  Button,
  Menu,
  Popconfirm,
} from "antd";
import {
  EditOutlined,
  DownOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import className from "classnames";
import get from "lodash/get";

import Loading from "../../../Shared/Loading";
import { isEvenNumber } from "../../../utils/helpers";
import Unknown from "../../../Shared/Unknown";
import "./style.css";

const menu = ({ onShow, record, onRemove, onUpdate }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShow(get(record, "codeFormation"))}>
      <EyeOutlined />
      Afficher
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1" onClick={() => onUpdate(get(record, "codeFormation"))}>
      <EditOutlined />
      Modifier
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Popconfirm
        placement="topRight"
        title={"Voulez-vous vraiment supprimer cette formation ?"}
        onConfirm={() => onRemove(record)}
        okText="Confirmer"
        cancelText="Cancel"
      >
        <DeleteOutlined />
        Supprimer
      </Popconfirm>
    </Menu.Item>
  </Menu>
);

const columns = ({ onShow, onRemove, onUpdate }) => [
  {
    title: "Code",
    dataIndex: "codeFormation",
    key: "codeFormation",
    render: (codeFormation) => <Tag color="magenta">{codeFormation}</Tag>,
  },
  {
    title: "Nom De Formation",
    dataIndex: "nomFormation",
    key: "nomFormation",
    render: (nom) => <Tag color="green">{nom}</Tag>,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        overlay={menu({ onShow, record, onRemove, onUpdate })}
        trigger={["click"]}
      >
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

const View = ({ formationQuery, onShow, onRemove, onCreate, onUpdate }) => {
  const { loading, errors, idle, data } = formationQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <div className="head_bloc">
            <h1 className="h1">LES FORMATIONS</h1>
            <Button type="link" className="link_button" onClick={onCreate}>
              Ajouter Formation
            </Button>
          </div>
          <Divider />
          <Table
            rowKey="codeFormation"
            columns={columns({ onShow, onRemove, onUpdate })}
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
