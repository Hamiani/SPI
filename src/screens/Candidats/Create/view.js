import React, { memo, useState } from "react";
import {
  Row,
  Col,
  Card,
  Input,
  Button,
  Form,
  Select,
  Divider,
  InputNumber,
  notification,
  DatePicker,
} from "antd";
import get from "lodash/get";
import { isValidPhoneNumber } from "libphonenumber-js";
import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import cuid from "cuid";

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

const rules = {
  ["lastName"]: [{ required: true, message: "Le nom est requis" }],
  ["firsName"]: [{ required: true, message: "Le prénom est requis" }],
  ["email"]: [{ required: true, message: "Email est requis", type: "email" }],
  ["codePostale"]: [{ required: true, message: "Code postal est requis" }],
  ["lieuNaissance"]: [
    { required: true, message: "Lieu de Naissance est requis" },
  ],
  ["pays"]: [{ required: true, message: "2 premières lettres !", max: 2 }],
  ["nationalite"]: [{ required: true, message: "La nationalité est requis" }],
  ["ville"]: [{ required: true, message: "La ville est requise" }],
  ["adresse"]: [{ required: true, message: "L'adresse est requise" }],
  ["dateNaissance"]: [
    { required: true, message: "La date de naissance est requise" },
  ],
  ["universiteOrigine"]: [
    { required: true, message: "L'université est requise" },
  ],
  ["phone"]: [
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

const onSuccessCallBack = () =>
  notification.success({ message: "Ajouté avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const View = ({ promotionsQuery, createQuery, onCreate, onCandidatsClick }) => {
  const { idle, errors, loading, data } = promotionsQuery;
  const { loading: createLoading } = createQuery;

  const [promotion, setPromotion] = useState(null);
  const [form] = Form.useForm();
  if (idle || errors) return <Unknown />;
  if (loading) return <Loading />;

  const onFinish = (data) =>
    onCreate(
      {
        ...data,
        noCandidat: Math.floor(1000 + Math.random() * 9000),
        promotion,
      },
      onSuccessCallBack,
      onErrorCallBack
    );

  const onSelectPromo = ({ value }) => {
    const promotion = data.find(
      (promo) =>
        get(promo, "id.codeFormation") + get(promo, "id.anneeUniversitaire") ===
        value
    );
    setPromotion(promotion);
  };

  return (
    <div className="container__antd p-top-20">
      <Row type="flex" justify="center">
        <Col span={24}>
          <Row type="flex" justify="end">
            <Button
              type="link"
              className="link_button"
              onClick={onCandidatsClick}
            >
              CANDIDATS
            </Button>
          </Row>
          <div>
            <Card className="card">
              <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                initialValues={{ sexe: "H", listeSelection: "LP" }}
              >
                <h1 className="h1 text-start">AJOUTER CANDIDAT</h1>
                <Divider className="d_10" />
                <Row type="flex" justify="space-between">
                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <Item label="Nom" name="nom" rules={rules["lastName"]}>
                      <Input size="large" />
                    </Item>
                    <Item label="Email" name="email" rules={rules["email"]}>
                      <Input size="large" />
                    </Item>
                    <Item
                      label="Mobile"
                      name="mobile"
                      rules={rules["phone"]}
                      validateFirst
                    >
                      <Input size="large" />
                    </Item>
                    <Item
                      rules={rules["codePostale"]}
                      label="Code Postale"
                      name="codePostal"
                    >
                      <InputNumber
                        placeholder="ex:29200"
                        type="number"
                        size="large"
                        style={{ width: "100%" }}
                      />
                    </Item>
                    <Item
                      label="Pays d'origine"
                      name="paysOrigine"
                      validateFirst
                      rules={rules["pays"]}
                    >
                      <Input size="large" max={2} />
                    </Item>

                    <Item label="Sexe" name="sexe">
                      <Select>
                        <Option key="H" value="H">
                          Homme
                        </Option>
                        <Option key="F" value="F">
                          Femme
                        </Option>
                      </Select>
                    </Item>
                    <Item label="Liste Selection" name="listeSelection">
                      <Select>
                        <Option key="LP" value="LP">
                          Liste principale
                        </Option>
                        <Option key="LA" value="LA">
                          Liste d'attente
                        </Option>
                      </Select>
                    </Item>
                    <Item
                      label="Université d'origine"
                      name="universiteOrigine"
                      rules={rules["universiteOrigine"]}
                    >
                      <Input size="large" max="2" />
                    </Item>
                  </Col>

                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <Item
                      name="prenom"
                      label="Prénom"
                      rules={rules["firsName"]}
                    >
                      <Input size="large" />
                    </Item>
                    <Item
                      label="Lieu de Naissance"
                      name="lieuNaissance"
                      rules={rules["lieuNaissance"]}
                    >
                      <Input size="large" />
                    </Item>
                    <Item
                      label="Télephone"
                      name="telephone"
                      validateFirst
                      rules={rules["phone"]}
                    >
                      <Input size="large" />
                    </Item>
                    <Item label="Ville" name="ville" rules={rules["ville"]}>
                      <Input size="large" />
                    </Item>
                    <Item label="Type" name="type">
                      <Input size="large" />
                    </Item>
                    <Item
                      label="Date de naissance"
                      name="dateNaissance"
                      rules={rules["dateNaissance"]}
                    >
                      <DatePicker
                        size="large"
                        style={{ width: "100%" }}
                        placeholder="Date de naissance"
                      />
                    </Item>
                    <Item
                      label="Nationalité"
                      name="nationalite"
                      rules={rules["nationalite"]}
                    >
                      <Input size="large" placeholder="Nationalité" />
                    </Item>
                    <Item label="Promotion" name="promotion">
                      <Select onSelect={(_, obj) => onSelectPromo(obj)}>
                        {data.map((promo) => (
                          <Option
                            key={cuid()}
                            value={
                              get(promo, "id.codeFormation") +
                              get(promo, "id.anneeUniversitaire")
                            }
                          >
                            {get(promo, "id.codeFormation") +
                              get(promo, "id.anneeUniversitaire")}
                          </Option>
                        ))}
                      </Select>
                    </Item>
                  </Col>
                </Row>

                <Item label="Adresse" name="adresse" rules={rules["adresse"]}>
                  <TextArea rows={3} />
                </Item>

                <Row justify="end">
                  <Button
                    loading={createLoading}
                    htmlType="submit"
                    size="large"
                    className="create_button"
                  >
                    AJOUTER
                  </Button>
                </Row>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(View);
