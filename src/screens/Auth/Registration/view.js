import React from "react";
import { Form, Input, Button, Row, Col, Card, Switch } from "antd";
import { SiAudi } from "react-icons/si";

import { isValidPhoneNumber } from "libphonenumber-js";

import "./style.css";

const { Item } = Form;
const { Password } = Input;

const rules = {
  ["lastName"]: [{ required: true, message: "Le nom est requis" }],
  ["firsName"]: [{ required: true, message: "Le prenom est requis" }],
  ["email"]: [{ required: true, message: "Email est requis", type: "email" }],
  ["password"]: [{ required: true, message: "Mot de passe est requis" }],
  ["confirmPassword"]: [
    {
      required: true,
      message: "la confirmation de mot de passe est requise",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (value === getFieldValue("password")) {
          return Promise.resolve();
        }
        return Promise.reject("Les mots de passe ne sont pas identiques");
      },
    }),
  ],
  ["tel"]: [
    {
      required: true,
      message: "Le numéro de télephone est requis",
    },
    () => ({
      validator(_, value) {
        if (isValidPhoneNumber(value)) {
          return Promise.resolve();
        }
        return Promise.reject("Le numéro de télephone est invalide");
      },
    }),
  ],
};

const View = ({ onRegister, registrationQuery }) => {
  const { loading } = registrationQuery;
  const [form] = Form.useForm();
  const onFinish = ({ confirmPassword, ...rest }) => {
    onRegister({ ...rest });
  };
  return (
    <div className="container__antd p-top-10 p-bottom-10">
      <Row type="flex" align="top" justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card className="card-class">
            <div>
              <SiAudi size={70} />
              <h3>{"S'inscrire"}</h3>
            </div>
            <div className="login__card--body">
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Item
                  label={"Nom d'utilisateur"}
                  name={"username"}
                  validateFirst
                  rules={rules["nom"]}
                >
                  <Input
                    placeholder={"Nom d'utilisateur"}
                    size={"large"}
                    min={6}
                  />
                </Item>
                <Item
                  label={"Nom"}
                  name={"lastName"}
                  validateFirst
                  rules={rules["lastName"]}
                >
                  <Input
                    placeholder={"Nom d'utilisateur"}
                    size={"large"}
                    min={6}
                  />
                </Item>
                <Item
                  label={"Prénom"}
                  name={"firstName"}
                  validateFirst
                  rules={rules["firsName"]}
                >
                  <Input placeholder={"Prénom"} size={"large"} min={6} />
                </Item>

                <Item
                  label={"Email"}
                  name={"email"}
                  validateFirst
                  rules={rules["email"]}
                >
                  <Input placeholder={"*****@example.com"} size={"large"} />
                </Item>
                <Item
                  label={"Téléphone"}
                  name={"phoneNumber"}
                  validateFirst
                  rules={rules["tel"]}
                >
                  <Input placeholder={"Téléphone"} size={"large"} />
                </Item>

                <Item
                  label={"Mot de passe"}
                  name={"password"}
                  validateFirst
                  rules={rules["password"]}
                >
                  <Password size={"large"} />
                </Item>
                <Item
                  label={"Confirmer votre mot de passe "}
                  name={"confirmPassword"}
                  validateFirst
                  rules={rules["confirmPassword"]}
                >
                  <Password size={"large"} />
                </Item>

                <Item
                  label={"Avez-vous acheté notre produit ?"}
                  name={"isAbuyer"}
                  validateFirst
                  valuePropName={"checked"}
                >
                  <Switch />
                </Item>
                <div className="p-top-20">
                  <Button
                    htmlType="submit"
                    style={{
                      background: "green",
                      color: "white",
                      border: "none",
                    }}
                    loading={loading}
                  >
                    Confirmer
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

export default View;
