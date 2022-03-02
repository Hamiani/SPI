import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Card,
  DatePicker,
  Select,
  InputNumber,
  notification,
} from "antd";
import moment from "moment";
import { DATE_FORMAT } from "../../../utils/constants";

const { Item } = Form;
const { Option } = Select;

const rules = {
  ["codeFormation"]: [{ required: true, message: "Le code est requis" }],
  ["debutAccreditation"]: [
    { required: true, message: "Le debut d'accréditation est est requis" },
  ],
  ["finAccreditation"]: [
    { required: true, message: "La fin d'accréditation est est requise" },
  ],
  ["diplome"]: [{ required: true, message: "Diplôme est requis" }],
  ["n0Annee"]: [{ required: true, message: "Numéro d'année est requis" }],
  ["nomFormation"]: [
    { required: true, message: "Nom de la formation est requis" },
  ],
};

const View = ({ createQuery, onCreate }) => {
  const { loading } = createQuery;
  const [form] = Form.useForm();

  const onSuccessCallBack = () =>
    notification.success({ message: "Ajoutée avec Succès" });

  const onErrorCallBack = () =>
    notification.error({ message: "Une erreur est survenue" });

  const onFinish = ({ debutAccreditation, finAccreditation, ...values }) => {
    onCreate(
      {
        debutAccreditation: moment(debutAccreditation).format(DATE_FORMAT),
        finAccreditation: moment(finAccreditation).format(DATE_FORMAT),
        ...values,
      },
      onSuccessCallBack,
      onErrorCallBack
    );
  };
  return (
    <div className="container__antd p-top-10 p-bottom-10">
      <Row type="flex" align="top" justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card
            className="card-class"
            title={<h1 className="h1 text-center">Ajouter Formation</h1>}
          >
            <div className="login__card--body">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{ doubleDiplome: "Oui" }}
              >
                <Item
                  label={"Code De La Formation"}
                  name={"codeFormation"}
                  validateFirst
                  rules={rules["codeFormation"]}
                >
                  <Input placeholder={"Code De La Formation"} size={"large"} />
                </Item>
                <Item
                  label={"Début D'accréditation"}
                  name={"debutAccreditation"}
                  validateFirst
                  rules={rules["debutAccreditation"]}
                >
                  <DatePicker
                    placeholder={"Début D'accréditation"}
                    size={"large"}
                    style={{ width: "100%" }}
                  />
                </Item>
                <Item
                  label={"Fin D'accréditation"}
                  name={"finAccreditation"}
                  validateFirst
                  rules={rules["finAccreditation"]}
                >
                  <DatePicker
                    placeholder={"Fin D'accréditation"}
                    size={"large"}
                    style={{ width: "100%" }}
                  />
                </Item>
                <Item
                  label={"Diplôme"}
                  name={"diplome"}
                  validateFirst
                  rules={rules["diplome"]}
                >
                  <Input placeholder={"Diplôme"} size={"large"} />
                </Item>

                <Item label={"Double Diplome"} name={"doubleDiplome"}>
                  <Select>
                    <Option key="Oui" value="O">
                      Oui
                    </Option>
                    <Option key="Non" value="N">
                      Non
                    </Option>
                  </Select>
                </Item>
                <Item
                  label={"Numéro d'année"}
                  name={"n0Annee"}
                  validateFirst
                  rules={rules["n0Annee"]}
                >
                  <InputNumber
                    placeholder={"Numéro d'année"}
                    size={"large"}
                    min={1}
                    style={{ width: "100%" }}
                    type="number"
                  />
                </Item>
                <Item
                  label={"Nom de la Formation"}
                  name={"nomFormation"}
                  validateFirst
                  rules={rules["nomFormation"]}
                >
                  <Input
                    placeholder={"Numéro d'année"}
                    size={"large"}
                    min={1}
                  />
                </Item>

                <div className="p-top-20">
                  <Button
                    htmlType="submit"
                    className="create_button"
                    loading={loading}
                  >
                    Ajouter
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
