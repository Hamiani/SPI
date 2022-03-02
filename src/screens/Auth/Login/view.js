import React from "react";
import { Form, Input, Button, Row, Col, Card, notification } from "antd";
import { useHistory } from "react-router-dom";
import { SiAudi } from "react-icons/si";

import { PATHS } from "../../../utils/constants";
import { isValidEmail } from "../../../utils/helpers";

import "./style.css";

const { Item } = Form;
const { Password } = Input;

const Login = ({ loginQuery, onLogin }) => {
  const [form] = Form.useForm();
  const { loading } = loginQuery;
  return (
    <div className="container__antd p-top-200">
      <Row type="flex" align="top" justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card className="card-class">
            <div>
              <SiAudi className="audi-logo" size={70} />
              <h3>Se connecter</h3>
            </div>
            <div>
              <Form form={form} layout="vertical" onFinish={onLogin}>
                <Item
                  label={"Nom d'utilisateur"}
                  name={"username"}
                  validateFirst
                >
                  <Input placeholder={"Username"} size={"large"} />
                </Item>
                <Item label={"Mot de passe"} name={"password"}>
                  <Password placeholder={"Mots de passe"} size={"large"} />
                </Item>

                <div className="p-top-20">
                  <Button
                    htmlType="submit"
                    loading={loading}
                    className="login_button"
                  >
                    Connection
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
