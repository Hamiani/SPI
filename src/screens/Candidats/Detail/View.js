import React from "react";
import get from "lodash/get";
import {
  Card,
  Col,
  Row,
  Divider,
  Popconfirm,
  Button,
  notification,
  Collapse,
  Tag,
} from "antd";
import { EyeOutlined } from "@ant-design/icons";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

const { Panel } = Collapse;

const Detail = ({ title, content }) => (
  <Col xs={24} sm={24} md={12} lg={6} xl={6}>
    <h3 className="fw-700">{title}</h3>
    <h5 className="fw-500">{content}</h5>
  </Col>
);

const onSuccessCallBack = () =>
  notification.success({ message: "Supprimé avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const View = ({
  candidatQuery,
  removeQuery,
  onRemove,
  onGoBack,
  onShowPromo,
  onShowFormation,
  onShowTeacher,
}) => {
  const { idle, data, loading, errors } = candidatQuery;
  const { loading: removeLoading } = removeQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const candidatsTopItems = [
    {
      title: "Nom",
      content: get(data, "nom"),
    },
    {
      title: "Prénom",
      content: get(data, "prenom"),
    },
    {
      title: "Email",
      content: get(data, "email"),
    },
    ,
    {
      title: "Mobile",
      content: get(data, "mobile"),
    },
    {
      title: "Telephone",
      content: get(data, "telephone"),
    },
    {
      title: "Nationalité",
      content: get(data, "nationalite"),
    },
    {
      title: "Sexe",
      content: get(data, "sexe"),
    },
    {
      title: "Université d'origine",
      content: get(data, "universiteOrigine"),
    },
  ];

  const candidatsBottomItems = [
    {
      title: "Date De Naissance",
      content: get(data, "dateNaissance"),
    },
    {
      title: "Type",
      content: get(data, "type"),
    },
    {
      title: "Liste Selection",
      content: get(data, "listeSelection"),
    },
    {
      title: "Adresse",
      content: get(data, "adresse"),
    },
    {
      title: "Code Postal",
      content: get(data, "codePostal"),
    },
    {
      title: "Pays D'origine",
      content: get(data, "paysOrigine"),
    },
    {
      title: "Lieu De Naissance",
      content: get(data, "lieuNaissance"),
    },
    {
      title: "Ville",
      content: get(data, "ville"),
    },
  ];

  const formationsTopItems = [
    {
      title: "Code",
      content: get(data, "promotion.formation.codeFormation"),
    },
    {
      title: "Début De L'accréditation",
      content: get(data, "promotion.formation.debutAccreditation"),
    },
    {
      title: "Diplôme",
      content: get(data, "promotion.formation.diplome"),
    },
    {
      title: "Double Diplôme",
      content: get(data, "promotion.formation.doubleDiplome"),
    },
  ];

  const formationsBottomItems = [
    {
      title: "Fin De L'accréditation",
      content: get(data, "promotion.formation.finAccreditation"),
    },
    {
      title: "Numéro des Années ",
      content: get(data, "promotion.formation.n0Annee"),
    },
    {
      title: "Nom De La Formation",
      content: get(data, "promotion.formation.nomFormation"),
    },
    {
      title: "",
      content: null,
    },
  ];

  const promotionsTopItems = [
    {
      title: "Date de Rentrée",
      content: get(data, "promotion.dateRentree"),
    },
    {
      title: "Date de Reponse La lp",
      content: get(data, "promotion.dateReponseLalp"),
    },
    {
      title: "Date Reponse Lp",
      content: get(data, "promotion.dateReponseLp"),
    },
    {
      title: "Année universitaire",
      content: get(data, "promotion.id.anneeUniversitaire"),
    },
  ];

  const promotionsBottomItems = [
    {
      title: "Lieu de Rentrée",
      content: get(data, "promotion.lieuRentree"),
    },
    {
      title: "Numéro Max des étudiants ",
      content: get(data, "promotion.nbMaxEtudiant"),
    },
    {
      title: "Processus de Stage",
      content: get(data, "promotion.processusStage"),
    },
    {
      title: "Sigle Promotion",
      content: get(data, "promotion.siglePromotion"),
    },
  ];

  const teacherTopItems = [
    {
      title: "Nom",
      content: get(data, "promotion.enseignant.nom"),
    },
    {
      title: "Prénom",
      content: get(data, "promotion.enseignant.prenom"),
    },
    {
      title: "Email Personnel",
      content: get(data, "promotion.enseignant.emailPerso"),
    },
    {
      title: "Email UBO",
      content: get(data, "promotion.enseignant.emailUbo"),
    },
    ,
    {
      title: "Mobile",
      content: get(data, "promotion.enseignant.mobile"),
    },
    {
      title: "Telephone",
      content: get(data, "promotion.enseignant.telephone"),
    },
    {
      title: "Sexe",
      content: get(data, "promotion.enseignant.sexe"),
    },
    {
      title: "Type",
      content: get(data, "promotion.enseignant.type"),
    },
  ];

  const teacherBottomItems = [
    {
      title: "Pays",
      content: get(data, "promotion.enseignant.pays"),
    },
    {
      title: "Adresse",
      content: get(data, "promotion.enseignant.adresse"),
    },
    {
      title: "Code Postal",
      content: get(data, "promotion.enseignant.codePostal"),
    },
    {
      title: "Ville",
      content: get(data, "promotion.enseignant.ville"),
    },
  ];

  const formationExtra = (id) => (
    <EyeOutlined
      onClick={(e) => {
        onShowFormation(id);
        e.stopPropagation();
      }}
    />
  );

  const teacherExtra = (id) => (
    <EyeOutlined
      onClick={(e) => {
        onShowTeacher(id);
        e.stopPropagation();
      }}
    />
  );

  const promotionExtra = (filter) => {
    console.log("filter :>> ", filter);
    return (
      <EyeOutlined
        onClick={(e) => {
          onShowPromo(filter);
          e.stopPropagation();
        }}
      />
    );
  };

  return (
    <div className="container__antd">
      <Col span={24}>
        <Card className="card">
          <div justify="space-between">
            <div className="head_bloc">
              <h1 className="h1">DÉTAIL</h1>
              <div className="button_bloc">
                <Button className="back_button" onClick={onGoBack}>
                  Retour
                </Button>
                <Popconfirm
                  placement="topRight"
                  title={"Voulez-vous vraiment supprimer ce candidat ?"}
                  onConfirm={() =>
                    onRemove(data, onSuccessCallBack, onErrorCallBack)
                  }
                  okText="Confirmer"
                  cancelText="Cancel"
                >
                  <Button loading={removeLoading} className="delete_button">
                    Supprimer
                  </Button>
                </Popconfirm>
              </div>
            </div>
          </div>
          <Divider />
          <Collapse accordion defaultActiveKey={["1"]}>
            <Panel header="Détail de Candidat" key="1">
              <Row type="flex" justify="space-between">
                {candidatsTopItems.map(({ title, content }, index) => (
                  <Detail key={index} title={title} content={content} />
                ))}
              </Row>
              <Divider />
              <Row type="flex" justify="space-between">
                {candidatsBottomItems.map(({ title, content }, index) => (
                  <Detail key={index} title={title} content={content} />
                ))}
              </Row>
              <Collapse activeKey={1}>
                <Panel
                  header={<Tag color="blue">Promotion</Tag>}
                  key="1"
                  extra={promotionExtra({
                    year: get(data, "promotion.id.anneeUniversitaire"),
                    code: get(data, "promotion.id.codeFormation"),
                  })}
                >
                  <Row type="flex" justify="space-between">
                    {promotionsTopItems.map(({ title, content }, index) => (
                      <Detail key={index} title={title} content={content} />
                    ))}
                  </Row>
                  <Divider />
                  <Row type="flex" justify="space-between">
                    {promotionsBottomItems.map(({ title, content }, index) => (
                      <Detail key={index} title={title} content={content} />
                    ))}
                  </Row>
                  <Collapse>
                    <Panel
                      header={<Tag color="pink">Formation</Tag>}
                      key="1"
                      extra={formationExtra(
                        get(data, "promotion.formation.codeFormation")
                      )}
                    >
                      <Row type="flex" justify="space-between">
                        {formationsTopItems.map(({ title, content }, index) => (
                          <Detail key={index} title={title} content={content} />
                        ))}
                      </Row>
                      <Divider />
                      <Row type="flex" justify="space-between">
                        {formationsBottomItems.map(
                          ({ title, content }, index) => (
                            <Detail
                              key={index}
                              title={title}
                              content={content}
                            />
                          )
                        )}
                      </Row>
                    </Panel>
                    <Panel
                      header={<Tag color="cyan">Enseignant</Tag>}
                      key="2"
                      extra={teacherExtra(
                        get(data, "promotion.enseignant.noEnseignant")
                      )}
                    >
                      <Row type="flex" justify="space-between">
                        {teacherTopItems.map(({ title, content }, index) => (
                          <Detail key={index} title={title} content={content} />
                        ))}
                      </Row>
                      <Divider />
                      <Row type="flex" justify="space-between">
                        {teacherBottomItems.map(({ title, content }, index) => (
                          <Detail key={index} title={title} content={content} />
                        ))}
                      </Row>
                    </Panel>
                  </Collapse>
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </div>
  );
};

export default View;
